// components
import Logo from "./Logo";
import Navbar from "./Navbar";
// icon
import { FaBars } from "react-icons/fa";
// hook
import { useRef } from "react";

function Header() {
  const navRef = useRef();

  const showaMenu = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <header className="container header">
      <Logo />
      <Navbar  navRef={navRef} />
      <button className="nav-btn nav-open-btn" onClick={showaMenu}>
        <FaBars />
      </button>
    </header>
  );
}

export default Header;
