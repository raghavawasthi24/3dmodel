import React, { lazy, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Loading from "./components/Loading";
const Model = lazy(() => import("./components/Model"));
import './App.css'

export default function App() {
  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Canvas>
        <ambientLight />
        <directionalLight position={[10, 10, 10]} castShadow />
        <OrbitControls />
        <Suspense fallback={<Loading />}>
          <Model scale={0.2} />
        </Suspense>
        <Environment preset="city" />
      </Canvas>

      <div style={{ padding: "20px", color: "white", textAlign: "center" }}>
        <p>3D Model</p>
      </div>
    </div>
  );
}
