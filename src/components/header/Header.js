import { useNavigate } from "react-router";
const Header = () => {
  const navigation = useNavigate();

  return (
    <header className="w-full fixed top-0 left-0 flex z-10">
      <div
        onClick={() => navigation("/~mj469")}
        className="pt-4 m-auto flex items-center cursor-pointer"
      >
        <img className="w-[36px]" src="/~mj469/assets/cherry.png" alt="logo" />
        <h1 className="font-playwrite text-[36px] text-primary">Desserts</h1>
      </div>
    </header>
  );
};

export default Header;
