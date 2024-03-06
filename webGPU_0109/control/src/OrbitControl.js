import { OrbitControls } from '@react-three/drei'
import React from 'react'

const OrbitControl = () => {
  return (
    <>
    <OrbitControls 
    // enableDamping={true} dampingFactor={0.05} autoRotate={true} autoRotateSpeed={80}
    maxAzimuthAngle={Math.PI/2} //방위각(Azimuth)
    minAzimuthAngle={-Math.PI/2}
    maxPolarAngle={Math.PI/2} //극각(POLAR)
    minPolarAngle={-Math.PI/2}
    />
    <mesh>
        <boxGeometry/>
        <meshBasicMaterial color="#8900f7"/>
    </mesh>
    </>
  )
}

export default OrbitControl