import React, { useEffect } from 'react'
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useAnimations, useGLTF } from '@react-three/drei';

const Model = () => {
    // const model = useLoader(GLTFLoader, "./model/dog.glb")
    const model = useGLTF("./model/hat.gltf")
    const animations = useAnimations(model.animations, model.scene)
    console.log(model)
    console.log('animation',animations)

    useEffect(() => {
        animations.actions.pose_chapeau.play()
    },[])

  return (
    <primitive position-y={-0.4} object={model.scene}/>
  )
}
useGLTF.preload("./model/dog.glb") //pre (미리) load (가져온다)

export default Model