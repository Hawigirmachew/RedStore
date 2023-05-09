import { Link } from "react-router-dom";
import cart from '../assets/cart.png'
// icon
// import { FaTimes } from "react-icons/fa";
function Navbar({navRef, cartItems}) {
 
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
        <li className="navItem add-cart">
          <Link to="/cart"><img src={cart} alt="cart" className="add-cart-img" />
          <span className="cart-length">{cartItems.length >= 1 && cartItems.length}</span></Link>
        </li>
        
      </ul>
      {/* <button className="nav-btn nav-close-btn" onClick={ showMenu}>
          <FaTimes/>
      </button> */}
     
    </nav>
  );
}

export default Navbar;
