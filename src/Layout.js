import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function Layout({ children }) {
  return (
    <div className="text-opensans">
      <Header />
      <div className="min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
