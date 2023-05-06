// router
import { BrowserRouter, Route, Routes } from "react-router-dom";
// pages
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Account from "./pages/Account";
import Home from "./pages/Home";
// hooks
import { useEffect, useState } from "react";
// components
import Header from "./components/Header";
import Spinner from "./components/Spinner";
import Cart from "./pages/Cart";

function App() {
  // Loading tracker
  const [isLoading, setIsLoading] = useState(true);
  // product
  const [products, setProducts] = useState([]);

  //  drop down option
  const options = [
    { label: "Defualt sort", value: "default", id: 1 },
    { label: "Sorted by price", value: "price", id: 2 },
    { label: "Sorted by Rating", value: "rating", id: 3 },
    { label: "Sorted by Popularity", value: "popular", id: 4 },
    
  ];
  const [value, setValue] = useState("default");

  
  // handle option selected
  const handleSelecteChage = (e) => {
    setValue(e.target.value);
  };
  // using useEffect for tracking the select options
  useEffect(() => {
    if (value === "price") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.sort((a, b) => a.price - b.price));
        })
        .catch((err) => console.log(err));
    } else if (value === "rating") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.sort((a, b) => b.rating.rate - a.rating.rate));
        })
        .catch((err) => console.log(err));
    } else if (value === "popular") {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data.sort((a, b) => b.rating.count - a.rating.count));
        })
        .catch((err) => console.log(err));
    }  else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }

    setIsLoading(false);
  }, [value]);

  // cart Items

  const [cartItems, setCartItems] = useState([])

  const handleAddToCart= (product)=>{
    const productExist = cartItems.find((item)=> item.id === product.id)
    if(productExist){
      setCartItems(cartItems.map((item) => item.id === product.id? {productExist, quantity:productExist.quantity + 1}: item))
    }
    else{
      setCartItems([...cartItems, {...product, quantity:1}])
    }

  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          {isLoading ? (
            <Spinner />
          ) : (
            <Routes>
              <Route path="/" exact element={<Home products={products} isLoading={isLoading}
              handleAddToCart={handleAddToCart}/>} />
              <Route
                path="/product"
                element={
                  <Product
                    products={products}
                    options={options}
                    value={value}
                    handleSelecteChage={handleSelecteChage}
                    handleAddToCart={handleAddToCart}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart"    element={<Cart handleAddToCart={handleAddToCart}
              cartItems={cartItems}/>
            } />
            </Routes>
          )}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
