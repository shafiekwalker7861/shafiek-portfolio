import { useVideoTexture } from "@react-three/drei";

function VideoScreen() {
  const texture = useVideoTexture("/videos/demo.mp4");

  return (
    <mesh>
      <planeGeometry args={[16, 9]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

export default VideoScreen;