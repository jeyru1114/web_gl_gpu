/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 heart.gltf 
*/
import React, { useRef, useEffect } from "react";
import { useGLTF } from '@react-three/drei'
import { useFrame } from "@react-three/fiber";

const Heart = (props) => {
  const { nodes, materials } = useGLTF('./model/heart.gltf')
  
  const firstMesh = useRef();
  const secondMesh = useRef();

  useFrame((_, delta) => {
    // firstMesh.current.rotation.y += delta * 3;
    // secondMesh.current.rotation.z += delta * 3;
    console.log("in useFrame");
  });

  console.log("out useFrame");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.heart_teamRed.geometry} material={materials['Red.015']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('./model/heart.gltf')
export default Heart;