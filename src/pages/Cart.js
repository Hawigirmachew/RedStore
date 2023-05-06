import React from "react";

function Cart({ cartItems }) {
  return (
    <section className="cart">
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="cart-no-Item">No item in the cart</div>
        ) : (
          <div className="cart-dispaly">
            <div className="cart-nav">
              <ul>
                <li>Product</li>
                <li>Quantity</li>
                <li>Price</li>
              </ul>
            </div>
            {cartItems.map((item) => (
                
              <div className="cart-body">
                <div className="cart-des">
                  <img
                    src={item.image}
                    alt="Product figure"
                    className="cart-img"
                  />
                  <h3 className="cart-title">{item.title}</h3>
                </div>
                <div className="cart-item-quantity">{item.quantity}</div>
                <div className="cart-item-price">
                  {item.quantity * item.price}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
