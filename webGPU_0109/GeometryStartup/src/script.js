import "./style.css";
import * as THREE from "three";
import {
  MapControls,
  OrbitControls,
} from "three/examples/jsm/controls/OrbitControls";

//Scene
const scene = new THREE.Scene();

//Resizing
window.addEventListener("resize", () => { //이벤트핸들러(사이즈 변경시)
  //Update Size
  aspect.width = window.innerWidth;
  aspect.height = window.innerHeight;

  //New Aspect Ratio
  camera.aspect = aspect.width / aspect.height;
  camera.updateProjectionMatrix(); //투영(projection) 행렬(matrix) 갱신(update)

  //New RendererSize
  renderer.setSize(aspect.width, aspect.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//AxeHelper 축
const axeHelper = new THREE.AxesHelper()
scene.add(axeHelper)

//Mesh
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "purple" });
const geometry = new THREE.PlaneBufferGeometry(3,1,20,20)
console.log(geometry)
const material = new THREE.MeshBasicMaterial({color:"purple", wireframe:true})
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.set(2, 2, 2);
camera.lookAt(mesh.position);
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//OrbitControls (마우스로 움직이는게 가능)
const orbitControls = new OrbitControls(camera, canvas);
orbitControls.enableDamping = true; // 움직임이 부드럽게 

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
  //GetElapsedTime
  const elapsedTime = clock.getElapsedTime();

  //Update Controls
  orbitControls.update();

  //Renderer
  renderer.render(scene, camera);

  //RequestAnimationFrame
  window.requestAnimationFrame(animate);
};
animate();