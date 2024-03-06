import React from 'react'
import {CameraControls, Grid} from "@react-three/drei"
import { useRef } from "react";
import {button, buttonGroup, useControls} from 'leva'
import * as THREE from 'three'

const CameraControl = () => {
  const cameraControlRef = useRef()
  const {DEG2RAD} = THREE.MathUtils
  console.log(DEG2RAD) //Degree(각도) = Radian
  //2phi = 360도 ,
  //2 * 3.14 = 6.28
  // 360도 = 6.28

  const cameraControls = useControls("카메라 제어",{
    horizentalRotation:
      buttonGroup({
        label:"수평 R", opts:{
          "45deg":()=>cameraControlRef.current.rotate(45*DEG2RAD,0,true),
          "-90deg":()=>cameraControlRef.current.rotate(-90*DEG2RAD,0,true),
          "360deg":()=>cameraControlRef.current.rotate(360*DEG2RAD,0,true),
        }
    }),
    verticalRotation:
      buttonGroup({
        label:"수직 R", opts:{
          "20deg":()=>cameraControlRef.current.rotate(0,20*DEG2RAD,true),
          "-40deg":()=>cameraControlRef.current.rotate(0,-40*DEG2RAD,true),
        }
    }),
    truckGroup:
      buttonGroup({
        label:"truck R", opts:{
          "(+1,0)":()=>cameraControlRef.current.truck(1,0,true),
          "(0,+1)":()=>cameraControlRef.current.truck(0,1,true),
          "(-1,-1)":()=>cameraControlRef.current.truck(-1,-1,true),
        }
    }),
    //truck은 아마 평행이동
    zoomGroup:
    buttonGroup({
      label:"zoom", opts:{
        "0.25":()=>cameraControlRef.current.zoom(0.25,true),
        "-0.25":()=>cameraControlRef.current.zoom(-0.25,true),
      }
  }),
  lookAtBox:button(()=>{
    cameraControlRef.current.setLookAt(0,1,3,9,9,9,true)
  })
})
  return (
    <>
      {/* 변화하는 시간을 smoothTime */}
      <CameraControls ref={cameraControlRef} smoothTime={0.12}/>
      <Grid args={[30,30]} cellSize={0.25} cellColor="green" sectionSize={2} fadeDistance={20} fadeStrength={0.75}/>

      <mesh>
        <boxGeometry />
        <meshBasicMaterial color="#B900F7" />
      </mesh>
    </>
  )
}

export default CameraControl