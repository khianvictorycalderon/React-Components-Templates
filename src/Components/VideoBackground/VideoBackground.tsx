import React from "react";
import styles from "./VideoBackground.module.css";

interface VideoBackgroundProps {
  VideoPath: string;
  OverlayVisibility?: number;
  children: React.ReactNode;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ VideoPath, children, OverlayVisibility }) => {
  return (
    <div className={styles.container}>
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={VideoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles.overlay} style={{backgroundColor: `rgba(0, 0, 0, ${OverlayVisibility || "0.5"})`}}></div>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
