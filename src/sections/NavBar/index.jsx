import { useState } from "react";
import { RiCloseLargeFill, RiMenuFill } from "react-icons/ri";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed w-full bg-white z-10">
      <section className="flex justify-around p-5">
        <img className="w-40" src="/emtechLogo.webp" alt="EmtechLogo logo" />
        <ul className="hidden lg:flex">
          <li className="relative">
            <a
              href="#Home"
              className={`block py-2 px-4 text-xl	 font-bold text-Cblue `}
            >
              Home
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-0 h-5 bg-blue-500 w-0.5"></span>
          </li>
          <li className="relative">
            <a href="#Howdowedoit" className={`block py-2 px-4 text-xl	`}>
              How do we do it?
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-0 h-5 bg-blue-500 w-0.5"></span>
          </li>
          <li className="relative">
            <a href="#WhychooseEmTech?" className={`block py-2 px-4 text-xl	`}>
              Why choose EmTech?
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-0 h-5 bg-blue-500 w-0.5"></span>
          </li>
          <li className="relative">
            <a href="#Events" className={`block py-2 px-4 text-xl	`}>
              Events
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-0 h-5 bg-blue-500 w-0.5"></span>
          </li>
          <li className="relative">
            <a href="#Blog" className={`block py-2 px-4 text-xl	`}>
              Blog
            </a>
            <span className="absolute top-1/2 transform -translate-y-1/2 right-0 h-5 bg-blue-500 w-0.5"></span>
          </li>
        </ul>
        <button
          onClick={toggleMenu}
          className="block lg:hidden cursor-pointer ml-auto"
        >
          {isMenuOpen ? (
            <RiCloseLargeFill size={32} color="#1165F6" />
          ) : (
            <RiMenuFill size={32} color="#1165F6" />
          )}
        </button>
      </section>
      <section
        className={`${
          !isMenuOpen && "hidden"
        } lg:hidden flex text-left text-lg pl-5 pt-2`}
      >
        <ul>
          <li className="py-4 text-xl">
            <a href="#Home">Home</a>
          </li>
          <li className="py-4 text-xl">
            <a href="#Howdowedoit">How do we do it?</a>
          </li>
          <li className="py-4 text-xl">
            <a href="#WhychooseEmTech">Why choose EmTech?</a>
          </li>
          <li className="py-4 text-xl">
            <a href="#Events">Events</a>
          </li>
          <li className="py-4 text-xl">
            <a href="#Blog">Blog</a>
          </li>
        </ul>
      </section>
    </header>
  );
}