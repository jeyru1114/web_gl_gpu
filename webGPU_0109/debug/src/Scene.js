import { OrbitControls } from "@react-three/drei";
import {useState} from "react";

const Scene = () => {
  const [active, setActive] = useState(false)
  const [cnt, setCnt] = useState(0)

  const colorChange = (cnt) =>{
    var color = "#"+cnt // #00ff00 => #00ff01
    console.log(color)
  }
  const clickHandler = ()=> {
    console.log("확인",cnt)
    setActive(!active)
    setCnt(cnt+1)
    colorChange(cnt)
  }
  return (
    <>
      <mesh onWheel={clickHandler} position-x={1}>
        <boxGeometry />
        <meshBasicMaterial color={colorChange}/>
      </mesh>
      <mesh position-x={-1}>
        <boxGeometry />
        <meshBasicMaterial color="purple"/>
      </mesh>
    </>
  );
};
export default Scene;
