import os
import cv2
import numpy as np

def process_doc_video():
    src = "C:\\Users\\SEBIN\\Downloads\\AI_document_processing_animation_1080p_20261017184432.mp4"
    if not os.path.exists(src):
        # Fallback to local copy
        src = "public/videos/ai_document_processing.mp4"
        
    out_dir = "public/videos/temp_doc_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Doc video: {total} frames at {fps} fps")
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # 1. Erase top-left text watermark '#FDFBF7'
        # Local background in top-left
        bg_local = frame[10, 10]
        frame[:160, :380] = bg_local
        
        # 2. Measure background color from the 4 outer corner margins
        corners_b = np.median([frame[:50, :50, 0], frame[:50, -50:, 0], frame[-50:, :50, 0], frame[-50:, -50:, 0]])
        corners_g = np.median([frame[:50, :50, 1], frame[:50, -50:, 1], frame[-50:, :50, 1], frame[-50:, -50:, 1]])
        corners_r = np.median([frame[:50, :50, 2], frame[:50, -50:, 2], frame[-50:, :50, 2], frame[-50:, -50:, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        # 3. Scale to pure white (255, 255, 255)
        # Using a slightly aggressive white point (bg_color - 1.5) to ensure pure 255 background across all pixels
        scaled = (frame.astype(np.float32) / (bg_color - 1.5)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # Target size: 1280x720 for web efficiency & crispness
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    print("Doc frames processed. Assembling video with FFmpeg...")
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/ai_document_processing.mp4" -y')
    print("ai_document_processing.mp4 created!")


def process_slack_video():
    src = "C:\\Users\\SEBIN\\Downloads\\AI_operations_bot_workflow_anima…_20261017183833.mp4"
    if not os.path.exists(src):
        import glob
        matches = glob.glob("C:\\Users\\SEBIN\\Downloads\\*operations_bot*.mp4")
        if matches:
            src = matches[0]
            
    out_dir = "public/videos/temp_slack_frames"
    os.makedirs(out_dir, exist_ok=True)
    
    cap = cv2.VideoCapture(src)
    fps = cap.get(cv2.CAP_PROP_FPS) or 24
    total = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    print(f"Slack video: {total} frames at {fps} fps")
    
    idx = 0
    while cap.isOpened():
        ret, frame = cap.read()
        if not ret:
            break
            
        # Clean background by whitening
        corners_b = np.median([frame[:50, :50, 0], frame[:50, -50:, 0], frame[-50:, -50:, 0]])
        corners_g = np.median([frame[:50, :50, 1], frame[:50, -50:, 1], frame[-50:, -50:, 1]])
        corners_r = np.median([frame[:50, :50, 2], frame[:50, -50:, 2], frame[-50:, -50:, 2]])
        bg_color = np.array([corners_b, corners_g, corners_r], dtype=np.float32)
        
        # Scale to pure white
        scaled = (frame.astype(np.float32) / (bg_color - 2.0)) * 255.0
        scaled = np.clip(scaled, 0, 255).astype(np.uint8)
        
        # Remove any stray shadow in the far bottom-left corner outside the tablet
        # Tablet is strictly in x > 380, y > 150
        # In bottom-left: y > 800 and x < 350
        mask_bl = np.zeros(scaled.shape[:2], dtype=bool)
        h, w = scaled.shape[:2]
        # Soft ramp to pure white in bottom-left corner
        for y in range(int(h * 0.7), h):
            for x in range(0, int(w * 0.28)):
                if scaled[y, x].mean() > 195:
                    scaled[y, x] = [255, 255, 255]
                    
        scaled_small = cv2.resize(scaled, (1280, 720), interpolation=cv2.INTER_AREA)
        cv2.imwrite(os.path.join(out_dir, f"frame_{idx:04d}.png"), scaled_small)
        idx += 1
        
    cap.release()
    print("Slack frames processed. Assembling video with FFmpeg...")
    os.system(f'ffmpeg -framerate {fps} -i "{out_dir}/frame_%04d.png" -c:v libx264 -pix_fmt yuv420p -crf 18 -preset slow -movflags +faststart "public/videos/operations_bot.mp4" -y')
    print("operations_bot.mp4 updated with perfect borders!")

if __name__ == '__main__':
    process_doc_video()
    process_slack_video()
