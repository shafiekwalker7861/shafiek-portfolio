import { useRef, useState } from "react";

function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <div className="music-player">
      <audio ref={audioRef} src={`${import.meta.env.BASE_URL}sounds/soundtrack.mp3`} loop />
      <button onClick={toggleMusic}>
        {playing ? "Pause Sound" : "Play Sound"}
      </button>
    </div>
  );
}

export default MusicPlayer;