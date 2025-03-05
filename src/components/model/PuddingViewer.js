import { Float, Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const PuddingViewer = () => {
  const modelRef = useRef();
  const [wireframe, setWireframe] = useState(false);
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/pudding.glb"
  );

  const handleClick = () => {
    if (modelRef.current) {
      const audio = new Audio("/~mj469/audio/pop.mp3");
      audio.play();

      gsap.to(modelRef.current.scale, {
        y: 0.8,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(modelRef.current.rotation, {
        x: (Math.random() - 0.5) * 0.2,
        z: (Math.random() - 0.5) * 0.2,
        duration: 0.2,
        ease: "power1.out",
      });

      gsap.to(modelRef.current.scale, {
        y: 1,
        duration: 0.4,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      });

      gsap.to(modelRef.current.rotation, {
        x: 0,
        z: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
        delay: 0.2,
      });
    }
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className="h-[600px]">
          <Canvas>
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <directionalLight position={[-10, -10, -5]} intensity={5} />
            <OrbitControls />
            <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
              <mesh position={[0, -1, 0]} scale={1}>
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
        <button
          onClick={() => handleClick()}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          Pop!
        </button>
      </div>
    </div>
  );
};

export default PuddingViewer;
