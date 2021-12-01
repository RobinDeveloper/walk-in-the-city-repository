import './style.css'
import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl');

const scene = new THREE.Scene();

const listener = new THREE.AudioListener();
const sound = new THREE.Audio( listener );
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'sounds/edited.mp3', function( buffer ) {
    sound.setBuffer( buffer );
    sound.setLoop( false );
    sound.setVolume( 0.5 );
    sound.play();
});

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();



    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
})

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
scene.add(camera);
camera.add( listener );

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

const clock = new THREE.Clock()

let audioPrevTime;
let audioCurrentTime;
let pause = 0;

open("https://goo.gl/maps/QuqG1qcRTfb1dakP7");


const tick = () =>
{

    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
}

tick();