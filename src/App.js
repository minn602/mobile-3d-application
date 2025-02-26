import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ModelContainer from "./components/model/ModelContainer";

function App() {
  return (
    <div className="h-screen bg-secondary text-opensans">
      <Header />
      <ModelContainer />
      <Footer />
    </div>
  );
}

export default App;
