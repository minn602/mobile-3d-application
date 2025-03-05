import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ModelList from "./components/model/ModelList";

function App() {
  return (
    <div className="min-h-screen text-opensans">
      <Header />
      <ModelList />
      <Footer />
    </div>
  );
}

export default App;
