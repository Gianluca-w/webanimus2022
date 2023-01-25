import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";


extend({ OrbitControls });

const CameraControls = () => {
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls class.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls

  const {
    camera,
    gl: { domElement }
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame(() => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      autoRotate={true}
      enableZoom={false}
      rotateSpeed={0.7}
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
function SkyboxBackground({OptionalExternalController}) {
  return (<>
    <Canvas className="canvas" style={{
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0}} 
        onCreated={(state)=>state.events.connect(OptionalExternalController.current)}>
      <CameraControls />
      <SkyBox />
    </Canvas>
    </>
  );
}

export default SkyboxBackground;