function VideoBackground() {
  return (
    <video
      className="video-background"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={`${import.meta.env.BASE_URL}videos/hacker-coding-poster.webp`}
      aria-hidden="true"
      tabIndex="-1"
      disablePictureInPicture
    >
      <source src={`${import.meta.env.BASE_URL}videos/background.mp4`} type="video/mp4" />
    </video>
  );
}

export default VideoBackground;
