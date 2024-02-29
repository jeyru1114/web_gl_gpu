import { OrbitControls } from "@react-three/drei";
import {button, useControls} from "leva";

const Scene1 = () => {
  const {position, color, wireframe, scale, rotation} = useControls({
    position:{
      value:{x:0,y:0,z:0}, min:-10, max:10, step:0.01
    },
    color : "white", wireframe:false, 버튼: button(()=> console.log("클릭")),
    scale:{options:[1,2,3]}, rotation: { value: 0, min: 0, max: Math.PI * 2, step: Math.PI / 10 }
  })
  // console.log(levaControls)
  return (
    <>
      <OrbitControls />

      <ambientLight />
      <directionalLight position={[0, 2, 4]} />
      {/* directionalLight 수평 */}

      <mesh position={[position.x, position.y, position.z]} scale={scale} rotation={[0, rotation, 0]} >
        <boxGeometry />
        <meshStandardMaterial color={color} wireframe={wireframe} />
      </mesh>
    </>
  );
};
export default Scene1;
