import { Link } from "react-router-dom";
import cart from '../assets/cart.png'
// icon
import { FaTimes } from "react-icons/fa";
function Navbar({navRef}) {
  const showMenu = () =>{
    navRef.current.classList.toggle("responsive-nav");
  }
  return (
    <nav ref={navRef}>
      <ul className="navList">
        <li className="navItem">
          <Link to="/">Home</Link>
        </li>
        <li className="navItem">
          <Link to="/product">Product</Link>
        </li>
        <li className="navItem">
          <Link to="/about">About</Link>
        </li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navItem">
          <Link to="/account">Account</Link>
        </li>
        <li className="navItem">
          <Link to="/cart"><img src={cart} alt="cart" className="cart-img" /></Link>
        </li>
        
      </ul>
      {/* <button className="nav-btn nav-close-btn" onClick={ showMenu}>
          <FaTimes/>
      </button> */}
     
    </nav>
  );
}

export default Navbar;
