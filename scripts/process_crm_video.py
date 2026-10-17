import os
import glob
import cv2
import numpy as np

def process_crm():
    matches = glob.glob("C:\\Users\\SEBIN\\Downloads\\*pipeline*.mp4")
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
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Measure background color from the 4 outer corner margins
        corners_b = np.median([frame[:40, :40, 0], frame[:40, -40:, 0], frame[-40:, :40, 0], frame[-40:, -40:, 0]])
        corners_g = np.median([frame[:40, :40, 1], frame[:40, -40:, 1], frame[-40:, :40, 1], frame[-40:, -40:, 1]])
        corners_r = np.median([frame[:40, :40, 2], frame[:40, -40:, 2], frame[-40:, :40, 2], frame[-40:, -40:, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        # Scale to pure white (255, 255, 255)
        scaled = (frame.astype(np.float32) / (bg_color - 1.5)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # Target size: 1280x720 (crystal sharp 2.5x retina for web)
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    print("Done frame processing. Assembling crm_pipeline.mp4...")
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/crm_pipeline.mp4" -y')
    print("crm_pipeline.mp4 created with perfect borders and pure white background!")

if __name__ == '__main__':
    process_crm()
