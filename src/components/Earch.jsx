import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Earch(props) {
  const { nodes, materials } = useGLTF("/earth.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials.Object001_mtl}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials.Object002_mtl}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/earth.glb");
