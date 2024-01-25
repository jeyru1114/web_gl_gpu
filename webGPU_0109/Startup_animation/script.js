// Scene Mesh Camera Renderer

//Scene
const scene = new THREE.Scene();

//Mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: "purple" });

const mesh = new THREE.Mesh(geometry, material);
mesh.position.z = 1

scene.add(mesh);

//Camera
const aspect = {
  width: window.innerWidth,
  height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
  75,
  aspect.width / aspect.height,
); // near value is 1, and far value is 2000
camera.position.z = 3
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw"); //select the canvas element
const renderer = new THREE.WebGLRenderer({ canvas }); //add the WebGLRenderer
renderer.setSize(aspect.width, aspect.height); //Renderer size

//Clock
const clock = new THREE.Clock()

//Animate
const animate = () => {
    //GetElapsedTime (경과된 시간 획득)
    var elapsedTime = clock.getElapsedTime()
    elapsedTime%=2
    console.log(elapsedTime)
    // const elapsedTime = 0
    // // x축 과 y축의 회전을 계속 갱신
    mesh.rotation.x = elapsedTime * Math.PI * 3
    mesh.rotation.y = elapsedTime * Math.PI * (1/3)
    if (elapsedTime<2.0) mesh.position.z = elapsedTime 
    // else if (elapsedTime>2.0) mesh.position.z = elapsedTime * -2
    renderer.render(scene, camera); //display what the camera in the scene captured
    window.requestAnimationFrame(animate)
}
animate()