import { Float, Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { MeshBasicMaterial, Mesh } from "three";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const ModelViewer = ({ path }) => {
  const [wireframe, setWireframe] = useState(false);
  const [modelPath, setModelPath] = useState(path);

  const gltf = useLoader(GLTFLoader, process.env.PUBLIC_URL + modelPath);

  const modelRef = React.useRef();

  useEffect(() => {
    setModelPath(path);
  }, [path]);

  useEffect(() => {
    if (gltf) {
      modelRef.current = gltf.scene;

      modelRef.current.traverse((child) => {
        if (child instanceof Mesh) {
          child.userData.originalMaterial = child.material.clone();
        }
      });
      updateMaterials();
    }
  }, [gltf]);

  const updateMaterials = () => {
    if (modelRef.current) {
      modelRef.current.traverse((child) => {
        if (child instanceof Mesh) {
          if (wireframe) {
            child.material = new MeshBasicMaterial({
              wireframe: true,
              color: 0x000000,
            });
          } else {
            child.material = child.userData.originalMaterial.clone();
          }
        }
      });
    }
  };

  useEffect(() => {
    updateMaterials();
  }, [wireframe]);

  return (
    <div className="">
      <Suspense fallback={<Loader />}>
        <Canvas>
          <ambientLight intensity={8} />
          <directionalLight position={[10, 10, 5]} intensity={10} />
          <directionalLight position={[-10, -10, -5]} intensity={1} />
          <OrbitControls />
          <Float speed={1.4} rotationIntensity={1.5} floatIntensity={2.3}>
            <mesh position={[0, -1, 0]} scale={1.5}>
              <primitive object={gltf.scene} position={[0, 0, 0]} />
            </mesh>
          </Float>
        </Canvas>
      </Suspense>
      <div>
        <button onClick={() => setWireframe((prev) => !prev)}>
          {wireframe ? "Normal" : "Wireframe"}
        </button>
      </div>
    </div>
  );
};

export default ModelViewer;
