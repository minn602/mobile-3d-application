import ModelList from "./components/model/ModelList";
import Layout from "./Layout";
import { useNavigate } from "react-router";

function App() {
  const navigate = useNavigate();

  return (
    <Layout>
      <ModelList />
      <div className="px-6 max-w-2xl mx-auto pb-10">
        <h3 className="my-8 text-[28px] text-primary font-bold leading-none">
          More <br /> information <br /> about the app.
        </h3>
        <button
          onClick={() => navigate("/about")}
          className="w-fit py-2 px-4 bg-primary text-white font-semibold rounded-full"
        >
          Go to About Page
        </button>
      </div>
    </Layout>
  );
}

export default App;
