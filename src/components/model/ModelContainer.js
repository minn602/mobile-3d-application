import { useState } from "react";
import ModelViewer from "./ModelViewer";

const ModelContainer = () => {
  const [tab, setTab] = useState(1);

  return (
    <section className="m-4 mt-[70px] rounded-xl">
      <ul className="flex ">
        <li
          onClick={() => setTab(1)}
          className={`p-2 bg-lightgray rounded-t-lg  ${
            tab === 1 ? "bg-white text-primary font-bold" : "text-gray"
          }`}
        >
          Pudding
        </li>
        <li
          onClick={() => setTab(2)}
          className={`p-2 bg-lightgray rounded-t-lg  ${
            tab === 2 ? "bg-white text-primary font-bold" : "text-gray"
          }`}
        >
          Milk
        </li>
        <li
          onClick={() => setTab(3)}
          className={`p-2 bg-lightgray rounded-t-lg  ${
            tab === 3 ? "bg-white text-primary font-bold" : "text-gray"
          }`}
        >
          MelonSoda
        </li>
      </ul>
      <div className="bg-secondary rounded-b-xl rounded-tr-xl">
        <ModelViewer
          path={tab === 1 ? "/models/pudding.glb" : "/models/milk.glb"}
        />
      </div>
    </section>
  );
};

export default ModelContainer;
