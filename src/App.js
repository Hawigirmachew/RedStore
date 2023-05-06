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

function App() {
  // Loading tracker
  const [isLoading, setIsLoading] = useState(true);
  // product
  const [products, setProducts] = useState([]);

  // categories
  const [category, setCategory] = useState([]);

  //  drop down option
  const options = [
    { label: "Defualt sort", value: "default", id: 1 },
    { label: "Sorted by price", value: "price", id: 2 },
    { label: "Sorted by Rating", value: "rating", id: 3 },
    { label: "Sorted by Popularity", value: "popular", id: 4 },
    { label: "Sorted by Category", value: "category", id: 5 },
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
    } else if (value === "category") {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          setCategory(data);
          // console.log(category);
          // category.map((c) =>
          //   fetch(`https://fakestoreapi.com/products/category/${c}`)
          //     .then((res) => res.json())
          //     .then((data) => console.log(data))
          // );
        });
    } else {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((err) => console.log(err));
    }

    setIsLoading(false);
  }, [value]);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          {isLoading ? (
            <Spinner />
          ) : (
            <Routes>
              <Route path="/" exact element={<Home products={products} isLoading={isLoading}/>} />
              <Route
                path="/product"
                element={
                  <Product
                    products={products}
                    options={options}
                    value={value}
                    handleSelecteChage={handleSelecteChage}
                  />
                }
              />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          )}
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
