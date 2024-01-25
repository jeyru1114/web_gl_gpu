//Scene(장면)
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:'purple'})
const mesh = new THREE.Mesh(geometry,material)
//Mesh => 2개의 인자 (geometry, material)

scene.add(mesh)

//Camera
const aspect = { //aspect 해상도
    width:window.innerWidth,
    height:window.innerHeight
}
const camera = new THREE.PerspectiveCamera(75,aspect.width/aspect.height,1,2000) //Perspective 원근투영, 1은 near(가깝다), 200은 far(멀다)
camera.position.z=3
camera.position.x=1
camera.position.y=1
scene.add(camera)
//Renderer
const canvas = document.querySelector(".draw")
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(aspect.width,aspect.height)
renderer.render(scene,camera)