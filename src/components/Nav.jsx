import { useState, useEffect, useRef } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };

  const handleOutsideClick = (event) => {
    if (
      isOpen &&
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleOutsideClick);
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }
  }, [isOpen]);

  return (
    <header className="bg-white fixed w-full z-[999]">
      <nav className="flex justify-between items-center w-11/12 mx-auto">
        <span className="font-bold text-3xl py-3">My Portofolio</span>
        <div
          ref={menuRef}
          className={`md:static absolute min-h-fit right-0 w-full md:w-auto flex py-6 md:py-2 justify-center bg-white bg-opacity-50 transition-all duration-700 ease-in-out ${
            isOpen ? "top-full " : "top-[-500%]"
          }`}
        >
          <ul className="flex md:flex-row text-xl flex-col md:items-center gap-7 ">
            <NavList href="#" text="Home" />
            <NavList href="#about" text="About" />
            <NavList href="#project" text="Project" />
            <NavList href="#skill" text="Skill" />
          </ul>
        </div>
        <div className="flex items-center cursor-pointer md:hidden">
          <button
            ref={buttonRef}
            className="flex items-center text-sky-300 hover:text-purple-600 p-5"
            onClick={handleClick}
          >
            <svg
              className="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              pointerEvents="none"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}

const NavList = ({ href, text }) => {
  return (
    <li className="font-semibold">
      <a
        href={href}
        className="flex justify-center items-center rounded-full hover:bg-slate-400 hover:text-white p-2"
      >
        {text}
      </a>
    </li>
  );
};
