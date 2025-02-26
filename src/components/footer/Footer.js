const Footer = () => {
  return (
    <footer className="w-full p-8 fixed bottom-0 left-0 bg-white">
      <div className="flex">
        <img
          className="w-[36px]"
          src="/~mj469/assets/github.png"
          alt="github"
        />
        <img
          className="w-[36px]"
          src="/~mj469/assets/linkedin.png"
          alt="linkedin"
        />
      </div>

      <span className="text-primary">
        Designed and developed by Minsun Jung
      </span>
    </footer>
  );
};

export default Footer;
