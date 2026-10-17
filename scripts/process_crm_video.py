import os
import glob
import cv2
import numpy as np

def process_crm():
    matches = glob.glob(r"C:\Users\SEBIN\Downloads\*pipeline*.mp4")
    if not matches:
        print("No CRM pipeline video found in Downloads")
        return
    src = matches[0]
    out_dir = "public/videos/temp_crm_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Processing CRM video: {total} frames at {fps} fps")
    
    # Create precise surgical mask for the Gemini star at (1738, 899)
    # Radius of 42 covers the 4-pointed star completely without touching shadows
    star_mask = np.zeros((1080, 1920), dtype=np.uint8)
    cv2.circle(star_mask, (1738, 899), 42, 255, -1)
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # 1. Seamlessly inpaint ONLY the Gemini star using Telea inpainting
        # This preserves the underlying drop shadow gradient 100% naturally without any white patch
        inpainted = cv2.inpaint(frame, star_mask, 7, cv2.INPAINT_TELEA)
        
        # 2. Measure outer margin background color
        corners_b = np.median([inpainted[:40, :40, 0], inpainted[:40, -40:, 0], inpainted[-40:, :40, 0]])
        corners_g = np.median([inpainted[:40, :40, 1], inpainted[:40, -40:, 1], inpainted[-40:, :40, 1]])
        corners_r = np.median([inpainted[:40, :40, 2], inpainted[:40, -40:, 2], inpainted[-40:, :40, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        # 3. Scale naturally to pure white (255, 255, 255)
        scaled = (inpainted.astype(np.float32) / (bg_color - 1.5)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # 4. Target size: 1280x720 for super-smooth high quality
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    print("Done frame processing. Assembling crm_pipeline.mp4...")
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/crm_pipeline.mp4" -y')
    print("crm_pipeline.mp4 created seamlessly!")

if __name__ == '__main__':
    process_crm()
