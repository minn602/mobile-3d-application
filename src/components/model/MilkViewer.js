import { Float, Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const MilkViewer = () => {
  const modelRef = useRef();
  const [wireframe, setWireframe] = useState(false);
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/milk.glb"
  );

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className="h-[600px]">
          <Canvas>
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <directionalLight position={[-10, -10, -5]} intensity={5} />
            <OrbitControls />
            <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
              <mesh
                position={[0, -1, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={2.5}
              >
                <primitive object={gltf.scene} ref={modelRef} />
              </mesh>
            </Float>
          </Canvas>
        </div>
      </Suspense>
      <div>
        <button
          onClick={() => setWireframe((prev) => !prev)}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          {wireframe ? "Normal" : "Wireframe"}
        </button>
      </div>
    </div>
  );
};

export default MilkViewer;
