import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./ghost.gltf");

  const scaleFactor = isMobile ? 1.5 : 1.75; // Adjust the scale factor for mobile and non-mobile devices

  const [rotation, setRotation] = useState(0);

  const mobilePosition = isMobile ? [0, -2, -1] : [0, -3.625, -0.75]; // Adjust Y-axis position for mobile and non-mobile devices
  const position = isMobile ? mobilePosition : [0, -2.625, 3.75];

  useEffect(() => {
    const spinInterval = setInterval(() => {
      // Update rotation over time (adjust the speed as needed)
      setRotation((prevRotation) => prevRotation + 0.02);
    }, 16); // Update every 16 milliseconds for smooth rotation

    return () => clearInterval(spinInterval);
  }, []);

  return (
    <mesh>
      <hemisphereLight intensity={0.8} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.1}
        penumbra={1}
        intensity={0}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={8} />
      <primitive
        object={computer.scene}
        scale={[scaleFactor, scaleFactor, scaleFactor]}
        position={position}
        rotation={[0, rotation, 0]} // Rotate around the Y-axis
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        
        <Computers isMobile={isMobile} />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default ComputersCanvas;
