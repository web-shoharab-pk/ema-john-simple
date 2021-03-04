import React from 'react';
import { Link } from 'react-router-dom';



const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        var subTotal = parseFloat(total) 
    }

    let shippingCost = 0;
    if (subTotal > 0) {
        shippingCost = 12.99;
    }
 
    // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
    return (
        <div>
        <h3>Order Summary</h3>
        <p>Items ordered: {cart.length}</p>
        <div>
            <p>Items: {cart.length}</p>
            <p>Shiping & Handling: ${shippingCost} </p>
            <p>Total before tax: ${subTotal}</p>
            <p><small>Estimated Tax: ${(subTotal*.1).toFixed(2)}</small> </p>
            <h4>Order Total: ${(shippingCost+ subTotal + parseFloat((subTotal*.1).toFixed(2))).toFixed(3)} </h4>
        </div>
         <Link to="/review"><button className="cart-btn">Review your order</button></Link>
        </div>
    );
};

export default Cart;
 