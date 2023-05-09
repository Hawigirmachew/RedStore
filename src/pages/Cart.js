import React from "react";

function Cart({ cartItems,handleDecreaseQuantity,handleAddToCart }) {

  const totalprice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
  return (
    <section className="cart">
      <div className="container">
        {cartItems.length === 0 ? (
          <div className="cart-no-item">No item in the cart</div>
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
              <div className="cart-body" key={item.id}>
                <div className="cart-des">
                  <img
                    src={item.image}
                    alt="Product figure"
                    className="cart-img"
                  />
                  <h3 className="cart-title">{item.title}</h3>
                </div>
                <div className="cart-item-quantity">
                  <button className="btn-add-quantity" onClick={()=>handleAddToCart(item)}>+</button>
                  <button className="btn-remove-quantity" onClick={()=>handleDecreaseQuantity(item)}>-</button>
                </div>
                <div className="cart-item-price">{item.quantity} * {item.price}</div>
              </div>
            ))}
            {
              cartItems.length >= 1 && <div className="total-price">
              Total: ${totalprice.toFixed(2)}
            </div>
            }
          </div>
        )}
      </div>
    </section>
  );
}

export default Cart;
