import os
import glob
import cv2
import numpy as np

def process_slack():
    matches = glob.glob("C:\\Users\\SEBIN\\Downloads\\*operations_bot*.mp4")
    if not matches:
        print("No Slack video found in Downloads")
        return
    src = matches[0]
    out_dir = "public/videos/temp_slack_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Processing Slack video: {total} frames at {fps} fps")
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Sample background from top corners
        corners_b = np.median([frame[:40, :40, 0], frame[:40, -40:, 0], frame[-40:, -40:, 0]])
        corners_g = np.median([frame[:40, :40, 1], frame[:40, -40:, 1], frame[-40:, -40:, 1]])
        corners_r = np.median([frame[:40, :40, 2], frame[:40, -40:, 2], frame[-40:, -40:, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        # Scale to pure white
        scaled = (frame.astype(np.float32) / (bg_color - 2.0)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # Vectorized cleanup of bottom-left corner outside the tablet
        h, w = scaled.shape[:2]
        y_start = int(h * 0.7)
        x_end = int(w * 0.28)
        sub = scaled[y_start:, :x_end]
        sub_mean = sub.mean(axis=2)
        sub[sub_mean > 190] = [255, 255, 255]
        scaled[y_start:, :x_end] = sub
        
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    print("Done frame processing. Assembling operations_bot.mp4...")
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/operations_bot.mp4" -y')
    print("operations_bot.mp4 updated with perfect borders!")

if __name__ == '__main__':
    process_slack()
