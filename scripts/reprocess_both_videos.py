import os
import glob
import cv2
import numpy as np

def process_doc():
    matches = glob.glob(r"C:\Users\SEBIN\Downloads\*document_processing*.mp4")
    if not matches:
        return
    src = matches[0]
    out_dir = "public/videos/temp_doc_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    
    star_mask = np.zeros((1080, 1920), dtype=np.uint8)
    cv2.circle(star_mask, (1738, 899), 42, 255, -1)
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        bg_local = frame[10, 10]
        # Erase top-left #FDFBF7 text
        frame[:160, :380] = bg_local
        
        # Surgical inpaint of Gemini star
        inpainted = cv2.inpaint(frame, star_mask, 7, cv2.INPAINT_TELEA)
        
        corners_b = np.median([inpainted[:40, :40, 0], inpainted[:40, -40:, 0], inpainted[-40:, :40, 0]])
        corners_g = np.median([inpainted[:40, :40, 1], inpainted[:40, -40:, 1], inpainted[-40:, :40, 1]])
        corners_r = np.median([inpainted[:40, :40, 2], inpainted[:40, -40:, 2], inpainted[-40:, :40, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        scaled = (inpainted.astype(np.float32) / (bg_color - 1.5)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/ai_document_processing.mp4" -y')
    print("ai_document_processing.mp4 updated with no watermarks!")

def process_slack():
    matches = glob.glob(r"C:\Users\SEBIN\Downloads\*operations_bot*.mp4")
    if not matches:
        return
    src = matches[0]
    out_dir = "public/videos/temp_slack_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    
    star_mask = np.zeros((1080, 1920), dtype=np.uint8)
    cv2.circle(star_mask, (1738, 899), 42, 255, -1)
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Surgical inpaint of Gemini star
        inpainted = cv2.inpaint(frame, star_mask, 7, cv2.INPAINT_TELEA)
        
        corners_b = np.median([inpainted[:40, :40, 0], inpainted[:40, -40:, 0], inpainted[-40:, :40, 0]])
        corners_g = np.median([inpainted[:40, :40, 1], inpainted[:40, -40:, 1], inpainted[-40:, :40, 1]])
        corners_r = np.median([inpainted[:40, :40, 2], inpainted[:40, -40:, 2], inpainted[-40:, :40, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        scaled = (inpainted.astype(np.float32) / (bg_color - 2.0)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # Clean bottom-left corner
        h, w = scaled.shape[:2]
        sub = scaled[int(h * 0.7):, :int(w * 0.28)]
        sub[sub.mean(axis=2) > 190] = [255, 255, 255]
        scaled[int(h * 0.7):, :int(w * 0.28)] = sub
        
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/operations_bot.mp4" -y')
    print("operations_bot.mp4 updated with no watermarks!")

if __name__ == '__main__':
    process_slack()
    process_doc()
