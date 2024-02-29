import { OrbitControls, Environment, PerspectiveCamera, CubeCamera } from "@react-three/drei";
import {useFrame} from '@react-three/fiber'
import {useRef} from 'react'

const Scene = () => {
  const cubeRef = useRef()
  useFrame((_,delta)=>{
    // cubeRef.current.scale.y += delta
    cubeRef.current.rotation.x += delta
    cubeRef.current.rotation.y += delta
  }) //useFrame 내의 람다 함수를 호출(기본 호출하는 시간은 일정)
  return (
    <>
      <OrbitControls />
      <Environment background files="./envMap/1.hdr" />
      {/* Environment은 환경설정, background는 배경 */}
      {/* <PerspectiveCamera makeDefault position={[0,0,10]} fov={75}/> */}
      {/* PerspectiveCamera 원근 투영 */}
      <CubeCamera resolution={1024} frames={Infinity}> 
      {/* resolution는 해상도 */}
        {(texture)=>(
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />  
          {/* 세가지 값은 반지름, 가로 세그먼트, 세로 세그먼트 */}
          <meshStandardMaterial 
          envMap={texture}
          roughness={0}
          metalness={0.9}
          />
      </mesh>
      )}
      </CubeCamera>
      <mesh ref={cubeRef} position-z={5}>
          <boxGeometry/>
          <meshBasicMaterial color="purple"/>
      </mesh>
      <mesh position-z={-5}>
          <sphereGeometry/>
          <meshBasicMaterial color="yellow"/>
      </mesh>
      <mesh position-y={5}>
          <sphereGeometry/>
          <meshBasicMaterial color="red"/>
      </mesh>



    </>
  );
};

export default Scene;
