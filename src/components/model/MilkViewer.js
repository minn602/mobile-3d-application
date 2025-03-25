import { Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const MilkViewer = () => {
  const modelRef = useRef();
  const [wireframe, setWireframe] = useState(false);
  const [isDrinking, setIsDrinking] = useState(false);
  const strawberryMilkRef = useRef(null);
  const initialScaleY = useRef(null);
  const initialPositionY = useRef(null);

  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/milk.glb"
  );

  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          node.material.wireframe = wireframe;

          if (node.name === "Strawberry_Milk") {
            strawberryMilkRef.current = node;
            initialScaleY.current = node.scale.y;
            initialPositionY.current = node.position.y;
          }
        }
      });
    }
  }, [gltf]);

  useEffect(() => {
    if (gltf) {
      gltf.scene.traverse((node) => {
        if (node.isMesh) {
          node.material.wireframe = wireframe;
        }
      });
    }
  }, [wireframe, gltf]);

  useEffect(() => {
    if (!isDrinking) return;

    if (strawberryMilkRef.current && initialScaleY.current !== null) {
      const milk = strawberryMilkRef.current;

      gsap.to(milk.scale, {
        y: initialScaleY.current * 0.8,
        duration: 5,
        ease: "power1.out",
      });

      if (initialPositionY.current !== null) {
        const scaleReduction = initialScaleY.current * 0.2;
        gsap.to(milk.position, {
          y: initialPositionY.current - scaleReduction / 2,
          duration: 5,
          ease: "power1.out",
        });
      }
    }
  }, [isDrinking]);

  const handleRotate = () => {
    if (modelRef.current) {
      const currentRotation = modelRef.current.rotation.y;

      gsap.to(modelRef.current.rotation, {
        y: currentRotation + Math.PI / 6,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  };

  const handleDrink = () => {
    if (isDrinking) return;

    setIsDrinking(true);

    const audio = new Audio(process.env.PUBLIC_URL + "/audio/drink.mp3");
    audio.play();

    setTimeout(() => setIsDrinking(false), 5000);
  };

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className="h-[600px]">
          <Canvas>
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <directionalLight position={[-10, -10, -5]} intensity={5} />
            <OrbitControls />
            <mesh
              position={[0, -1, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={2.5}
            >
              <primitive object={gltf.scene} ref={modelRef} />
            </mesh>
          </Canvas>
        </div>
      </Suspense>
      <div className="flex flex-col gap-2 max-w-80 mx-auto">
        <button
          onClick={() => setWireframe((prev) => !prev)}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          {wireframe ? "Normal" : "Wireframe"}
        </button>
        <button
          onClick={handleRotate}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          Rotate
        </button>
        <button
          onClick={handleDrink}
          disabled={isDrinking}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          Drink
        </button>
      </div>
    </div>
  );
};

export default MilkViewer;
