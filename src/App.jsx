import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Model } from './components/Model';
import "./App.css";

export default function App() {
  return (
        <Canvas>
          <ambientLight />
          <OrbitControls/>
          <directionalLight castShadow />
            <Suspense fallback= {null}>
              <Model scale={0.2}/>
            </Suspense>
            <Environment preset='city' />
        </Canvas>
  );
}
