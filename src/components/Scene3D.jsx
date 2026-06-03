import { Canvas } from "@react-three/fiber";
import VideoScreen from "./VideoScreen";

function Scene3D() {
  return (
    <div className="scene">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <VideoScreen />
      </Canvas>
    </div>
  );
}

export default Scene3D;