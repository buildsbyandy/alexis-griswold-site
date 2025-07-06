import type { FC } from 'react';

interface VideoBackgroundProps {
  src: string;
  poster?: string;
}

/**
 * VideoBackground component for decorative background videos
 * Renders a full-screen video with proper accessibility attributes
 */
const VideoBackground: FC<VideoBackgroundProps> = ({ src, poster }) => {
  return (
    <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
        aria-hidden="true"
        tabIndex={-1}
      />
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
    </div>
  );
};

export default VideoBackground; 