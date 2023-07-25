
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Earch from "./Earch";

const Ui = () => {
  return (
    <>
    <Canvas>
        <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6}>
            <Earch />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
    </Canvas>
</>
  )
}

export default Ui