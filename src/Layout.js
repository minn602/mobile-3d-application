import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function Layout({ children }) {
  return (
    <div className="min-h-screen text-opensans">
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
