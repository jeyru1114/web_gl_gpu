import { OrbitControls } from "@react-three/drei";
import Custom1 from "./Custom1";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      {/* <axesHelper args={[2]}/>
      <gridHelper args={[20,20,0xff00ff,'cyan']}/> */}
      <Custom1/>
      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="aqua" />
      </mesh>
    </>
  );
};

export default Scene;
