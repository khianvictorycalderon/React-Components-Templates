import React, { useState } from "react";
import styles from "./VideoBackground.module.css";

interface VideoBackgroundProps {
  VideoPath: string;
  OverlayVisibility?: number;
  BGColor: string;
  children: React.ReactNode;
  id?: string;
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({
  VideoPath,
  children,
  OverlayVisibility,
  BGColor,
  id
}) => {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className={styles.container} id={id || ""}>
      {!videoError ? (
        <video
          className={styles.video}
          autoPlay
          muted
          loop
          playsInline
          onError={() => setVideoError(true)}
        >
          <source src={VideoPath} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div
          className={styles.videoFallback}
          style={{ backgroundColor: BGColor }}
        ></div>
      )}
      <div
        className={styles.overlay}
        style={{
          backgroundColor: `rgba(0, 0, 0, ${OverlayVisibility ?? 0.5})`
        }}
      ></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default VideoBackground;
