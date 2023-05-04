import { Link } from "react-router-dom";
import cart from '../assets/cart.png'
function Navbar() {
  return (
    <nav>
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
    </nav>
  );
}

export default Navbar;
