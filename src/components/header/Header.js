import { useNavigate, useLocation } from "react-router";

const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <header className="w-full fixed top-0 left-0 p-3 flex items-center z-10">
      {!isHome && (
        <img
          onClick={() => navigation("/")}
          className="w-[36px] h-[36px] cursor-pointer"
          src="/~mj469/assets/back.png"
          alt="back"
        />
      )}
      <div
        onClick={() => navigation("/")}
        className="m-auto flex items-center cursor-pointer"
      >
        <img className="w-[36px]" src="/~mj469/assets/cherry.png" alt="logo" />
        <h1 className="font-playwrite text-[36px] text-primary">Desserts</h1>
      </div>
    </header>
  );
};

export default Header;
