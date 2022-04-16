const section = document.querySelector(".flag")

var scene = new THREE.Scene()
var camera = new THREE.PerspectiveCamera(75, section.clientWidth / section.clientHeight, 0.1, 1000 )

var renderer = new THREE.WebGLRenderer({ 
  antialias: true,
  alpha: true
})
renderer.setSize(section.clientWidth, section.clientHeight)
renderer.setClearColor(0x000000, 0)

section.appendChild( renderer.domElement )

const loader = new THREE.TextureLoader()

var geometry = new THREE.PlaneGeometry(2, 3, 40, 60)
var material = new THREE.MeshBasicMaterial({ 
  opacity: 0,
  transparent: true,
  map: loader.load("assets/img/nano.jpg", () => { 
    material.opacity = 1 
  }),
//   wireframe: true,
// 	color: 0x2727e6
})

var flag = new THREE.Mesh( geometry, material )
flag.rotation.set(-0.1, 0, 0)

scene.add(flag)

camera.position.z = 3

const clock = new THREE.Clock()

function animate() {
  const time = clock.getElapsedTime()
  
  flag.geometry.vertices.map(v => {    
    const waveY1 = 0.2 * Math.sin(v.y * 2 + time * 2)
    const waveX1 = 0.2 * Math.sin(v.x * 2 + time * 2)
    
    v.z = waveY1 + waveX1
  })
  
  flag.geometry.verticesNeedUpdate = true 
  
	requestAnimationFrame( animate )
	renderer.render( scene, camera )
}

animate()

window.addEventListener("resize", function () {
  camera.aspect = section.clientWidth / section.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(section.clientWidth, section.clientHeight)
})

