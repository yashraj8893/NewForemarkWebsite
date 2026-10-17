import os
import time
import cv2
import numpy as np
from PIL import Image
from rembg import remove, new_session

def process_video():
    input_video = 'public/videos/raw_operations_bot.mp4'
    frames_dir = 'public/videos/frames_temp'
    out_white_dir = 'public/videos/frames_white'
    out_rgba_dir = 'public/videos/frames_rgba'
    
    os.makedirs(frames_dir, exist_ok=True)
    os.makedirs(out_white_dir, exist_ok=True)
    os.makedirs(out_rgba_dir, exist_ok=True)
    
    # 1. Open video and read frames
    cap = cv2.VideoCapture(input_video)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Total frames: {total_frames}, FPS: {fps}")
    
    session = new_session()
    
    frame_idx = 0
    t0 = time.time()
    
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Target size: 1280x720 (crystal sharp 2.5x retina for web)
        h, w = frame.shape[:2]
        if w != 1280:
            frame = cv2.resize(frame, (1280, 720), interpolation=cv2.INTER_AREA)
            
        # Convert BGR to RGB for PIL
        rgb = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        pil_img = Image.fromarray(rgb)
        
        # Remove background
        rgba = remove(pil_img, session=session)
        
        # Save RGBA
        rgba.save(os.path.join(out_rgba_dir, f"frame_{frame_idx:04d}.png"))
        
        # Create pure white background composite
        white_bg = Image.new("RGB", rgba.size, (255, 255, 255))
        white_bg.paste(rgba, (0, 0), rgba)
        white_bg.save(os.path.join(out_white_dir, f"frame_{frame_idx:04d}.png"))
        
        frame_idx += 1
        if frame_idx % 20 == 0:
            elapsed = time.time() - t0
            fps_proc = frame_idx / elapsed
            eta = (total_frames - frame_idx) / fps_proc
            print(f"Processed {frame_idx}/{total_frames} frames ({fps_proc:.2f} fps, ETA: {eta:.1f}s)")
            
    cap.release()
    print("All frames processed successfully! Assembling video...")
    
if __name__ == '__main__':
    process_video()
