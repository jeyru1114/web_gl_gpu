import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import { Suspense } from "react";
import Bike from './Bike'
import Heart from './Heart'

const Scene = () => {

  return (
    <>

      <ambientLight intensity={2}/>
      <OrbitControls />
      {/* scale은 크기조정 , rotation은 회전, 이동은 stranslation */}
      <Suspense fallback={      
      <mesh scale-y={2}>
        <boxGeometry />
        <meshBasicMaterial wireframe/>
      </mesh>}>
      {/* <Bike scale={0.85} position={[-0.5,0.75,0]}/> */}
      <Heart scale={0.5} position-y={1.8} position-x={0}/>
      {true?<Model/>:""}
      </Suspense>
    </>
  );
};

export default Scene;
