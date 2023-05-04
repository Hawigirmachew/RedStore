import React from "react";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";

function Product({ products, options, value, handleSelecteChage }) {
  return (
    <section className="section">
      <div className="section--1">
        <h2 className="title">All Products</h2>
        <Dropdown
          handleSelecteChage={handleSelecteChage}
          options={options}
          value={value}
        />
      </div>
      <div className="product-container">
        {products &&
          products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
      </div>
    </section>
  );
}

export default Product;
