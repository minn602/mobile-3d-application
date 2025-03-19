import { Float, Html, OrbitControls, useProgress } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import React, { Suspense, useState, useRef, useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gsap from "gsap";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const CakeViewer = () => {
  const modelRef = useRef();
  const [wireframe, setWireframe] = useState(false);
  const [text, setText] = useState("");
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + "/models/cake.glb"
  );

  useEffect(() => {
    if (!text) return;
    if (!modelRef.current) return;

    const scene = modelRef.current;
    const textMesh = scene.getObjectByName("Text");

    if (textMesh) {
      const fontLoader = new FontLoader();
      fontLoader.load("/~mj469/font/Harlow Solid LET_Plain.json", (font) => {
        const newGeometry = new TextGeometry(text, {
          font: font,
          size: 0.8,
          height: 0.5,
          depth: 0.1,
        });

        newGeometry.computeBoundingBox();
        const textWidth =
          newGeometry.boundingBox.max.x - newGeometry.boundingBox.min.x;
        newGeometry.translate(-textWidth / 2, 0, 0);
        newGeometry.rotateX(-Math.PI / 2);

        textMesh.geometry.dispose();
        textMesh.geometry = newGeometry;

        gsap.from(textMesh.scale, { x: 0.5, y: 0.5, z: 0.5, duration: 0.5 });
      });
    }
  }, [text]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <div className="h-[600px]">
          <Canvas>
            <directionalLight position={[10, 10, 5]} intensity={5} />
            <directionalLight position={[-10, -10, -5]} intensity={5} />
            <OrbitControls />
            <mesh position={[0, 0, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1}>
              <primitive object={gltf.scene} ref={modelRef} />
            </mesh>
          </Canvas>
        </div>
      </Suspense>
      <div className="flex flex-col md:flex-row gap-2 max-w-80 mx-auto">
        <button
          onClick={() => setWireframe((prev) => !prev)}
          className="py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          {wireframe ? "Normal" : "Wireframe"}
        </button>
        <button className="py-2 px-4 bg-primary text-white font-semibold rounded-full">
          Rotate
        </button>
        <input
          className="py-2 px-4 rounded-full bg-primary text-white"
          type="text"
          onChange={(e) => setText(e.target.value)}
          placeholder="Writing on a cake"
        />
      </div>
    </div>
  );
};

export default CakeViewer;
