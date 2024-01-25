import React from 'react'

const Custom1 = () => {

  return (
    <mesh visible userData={{ hello: 'world' }} position={[1, 2, 3]} rotation={[Math.PI / 2, 0, 0]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshBasicMaterial color="hotpink" />
    </mesh>
  )
}

export default Custom1