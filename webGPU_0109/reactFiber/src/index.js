import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";
import * as THREE from 'three'

const root = ReactDOM.createRoot(document.getElementById("root"));

const creatingCanvasHandler=(state)=>{
  console.log("canvas가 생성되었어요",state)
  state.gl.setClearColor(new THREE.Color("rgb(255,80,0"),0.5)
}
root.render(
  <>
    <Canvas gl={{antialias:false,alpha:true}} //alpha 투명도 , bgra
      camera={{
        fov: 45, //시야각(field of view)
        near: 0.1, //가까운(near) 평면(plane)
        far: 100, //멀리있는(far) 평면(plane)
        position: [2, 2, 6], //카메라위치
      }} //frustum은 near와 far 사이에있는것
      onCreated={creatingCanvasHandler}
    >
      <Scene />
    </Canvas>
  </>
);
