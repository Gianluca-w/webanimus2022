import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


extend({ OrbitControls });

const CameraControls = ({OptionalExternalController}) => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, OptionalExternalController.current]}
      autoRotate={true}
      enableZoom={false}
      rotateSpeed={0.5}
    />
  );
};

// Loads the skybox texture and applies it to the scene.
function SkyBox() {
  const { scene } = useThree();
  const loader = new CubeTextureLoader();
  // The CubeTextureLoader load method takes an array of urls representing all 6 sides of the cube.
  const texture = loader.load([
    // Sides of the cube represented as the right hand convention for x y z
    "/skybox/posx.jpg", // x side
    "/skybox/negx.jpg", // -x side
    "/skybox/posy.jpg", // y side 
    "/skybox/negy.jpg", // -y side
    "/skybox/posz.jpg", // z side
    "/skybox/negz.jpg" // -z side
  ]);

  // Set the scene background property to the resulting texture.
  scene.background = texture;
  return null;
}
// Geometry

// Lights
function SkyboxBackground({}) {
  const SkyboxController = useRef();
  return (<>
  <div className="SkyboxControls" ref={SkyboxController}></div>
    <Canvas className="canvas" style={{
        position:"absolute",
        top:0,
        left:0,
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        zIndex:"-1"}} 
        
        >
      <CameraControls OptionalExternalController={SkyboxController} />
      <SkyBox />
    </Canvas>
    </>
  );
}

export default SkyboxBackground;