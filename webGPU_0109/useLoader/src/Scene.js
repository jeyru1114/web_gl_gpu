import {OrbitControls} from '@react-three/drei';
import Particles from './Particles';

const Scene = () => {


  return (
    <>
    <OrbitControls/>
      {/* <mesh>
        <planeGeometry args={[4, 4]} />
        <meshBasicMaterial map={texture}/>
      </mesh> */}
      <Particles/>
    </>
  );
};

export default Scene;
