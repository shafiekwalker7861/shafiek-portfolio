function VideoBackground() {
  return (
    <video className="video-background" autoPlay muted loop playsInline>
      <source src="/videos/background.mp4" type="video/mp4" />
    </video>
  );
}

export default VideoBackground;