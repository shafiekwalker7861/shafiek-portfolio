function VideoBackground() {
  return (
    <video className="video-background" autoPlay muted loop playsInline>
      <source src={`${import.meta.env.BASE_URL}videos/background.mp4`} type="video/mp4" />
    </video>
  );
}

export default VideoBackground;