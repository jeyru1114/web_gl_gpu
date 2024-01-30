import React, { useEffect, useRef } from 'react'
import { useLoader } from "@react-three/fiber";
import * as THREE from 'three'
const Particles = () => {
    const ref = useRef(null)
    const texture = useLoader(THREE.TextureLoader,"./img/sea.jpg")

    useEffect(() => {
      const count=1000
      const pointions = new Float32Array(1*3*32) //32는 4byte => 32bit, 1byte = 8bit
      //float = 4byte
      const colors = new Float32Array(1*3*32)

      for (let i = 0; i < pointions.length; i++) {
        pointions[i] = (Math.random()-0.5)*10
        colors[i] =Math.random()
        
      }
      console.log(pointions)
      // XYZ UV RGB
      ref.current.setAttribute("position",new THREE.BufferAttribute(pointions,3)) //X,Y,Z
      ref.current.setAttribute("color",new THREE.BufferAttribute(colors,3)) //R,G,B
    
      
    }, [])
    
  return (
    <points><sphereGeometry/>
    <bufferGeometry ref={ref}/>
    <pointsMaterial size={0.1} vertexColors color={"white"} map={texture} 
     transparent alphaMap={texture} depthWrite={false}
    />
    </points>
  )
}

export default Particles