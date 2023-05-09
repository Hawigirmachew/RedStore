import React from "react";
import banner from "../assets/image1.png";
import watch from '../assets/exclusive.png'
import Card from "../components/Card";

// data
import testimonials from "../Utils/data";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
// components
import Spinner from "../components/Spinner";
import Testimony from "../components/Testimony";
function Home({ products,isLoading,handleAddToCart}) {
  return (
    <section>
      <div className="home">
      <div className="container row">
        <div className="col col-1">
          <h1>
            Give your workout
            <br />A News Later
          </h1>
          <p>
            Success isn't always about greatness. It's about consistency.
            Consistent
            <br />
            hard work gain success. Gretness will come.
          </p>
          <Link to="/product" className="link">
            Explore Now <FaArrowRight />{" "}
          </Link>
        </div>
        <div className="col col-2">
          <img src={banner} alt="banner" />
        </div>
      </div>
      </div>
     {
      isLoading? <Spinner/>:
      (
        <div className="small-container min-container">
        {products.slice(14, 17).map((product) => (
          <img src={product.image} alt="images" />
        ))}
      </div>
      )
     }
      <div className="small-container featuredProducts">
        <h2 className="subtitle">Featured Products</h2>
        <div className="product-container">
          {products &&
            products
              .slice(0, 4)
              .map((product) => <Card key={product.id} product={product} handleAddToCart={handleAddToCart}/>)}
        </div>
      </div>

      <div className="small-container latestProducts">
        <h2 className="subtitle">Latest Products</h2>
        <div className="product-container">
          {products &&
            products
              .slice(0, 8)
              .map((product) => <Card key={product.id} product={product} handleAddToCart={handleAddToCart}/>)}
        </div>
      </div>
      <div className="offer">
      <div className="container row">
       
        <div className="col col-2">
        <img src={watch} alt="exclusive watch" className="offer-img"/>
        </div>
        <article className="col col-1">
          <h2>
            Exclusive Available on Redstore
          </h2>
          <h3>
           
          Smart Band 4
          </h3>
          <p>
          The Mi Smart Band 4 features a 39.9% larger (than Mi Band 3) AMOLED color full-touch display with adjustable brightness, so everything is clear as can be.
          </p>
          <Link to="/product" className="link">
            Buy Now<FaArrowRight />{" "}
          </Link>
        </article>
      </div>
      </div>
      <div className="testimonies">
        <div className="small-container min-container">
           {testimonials.map(testimony =>(
              <Testimony testimony={testimony.testimony}
              fullName={testimony.fullName}
              img={testimony.img}
              rating={testimony.rating}/>
           ))}
        </div>

      </div>
    </section>
  );
}

export default Home;
