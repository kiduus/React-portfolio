//Computers.jsx
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  // Usa un percorso assoluto per il file GLTF
  const computer = useGLTF("/desktop_pc/scene-optimized.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.5} groundColor="black" />
      <pointLight intensity={5.0} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.15}
        penumbra={1}
        intensity={2}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.75 : 2.1}
        position={isMobile ? [0, -1, 0.1] : [0, -1.55, 1]}
        rotation={[0.1, 0.75, -0.15]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Aggiungi un listener per i cambiamenti della dimensione dello schermo
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // Definisci una funzione di callback per gestire i cambiamenti alla media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Aggiungi il listener per i cambiamenti alla media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Rimuovi il listener quando il componente viene smontato
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { duration: 3 },
      }}
      animate={{
        y: [0, 24, 0],
        transition: { repeat: Infinity, duration: 2 },
      }}
      transition={{
        repeatType: "loop",
      }}
      className="w-full h-[100%]"
    >
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 25 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <Computers isMobile={isMobile} />
        </Suspense>
        <Preload all />
        <OrbitControls />
      </Canvas>
    </motion.div>
  );
};

export default ComputersCanvas;
