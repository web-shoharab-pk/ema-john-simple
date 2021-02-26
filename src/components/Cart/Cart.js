import React from 'react';



const Cart = (props) => {
    const cart = props.cart
    console.log("Cart",cart);
    // const total = cart.reduce((total, prd) => total + prd.price, 0);

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price;
        var subTotal = parseFloat(total)
        console.log("total",total);
    }

    let shippingCost = 0;
    if (subTotal > 0) {
        shippingCost = 12.99;
    }
    else if (subTotal > 22) {
        shippingCost = 5.99
    }
    else if (subTotal > 55) {
        shippingCost = 5;
    }
   
    else if (subTotal > 102) {
        shippingCost = 6.99;
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
            <h4>Order Total(shipping, price, tax): ${(shippingCost+ subTotal + parseFloat((subTotal*.1).toFixed(2))).toFixed(3)} </h4>
        </div>
         <button className="cart-btn">Review your order</button>
        </div>
    );
};

export default Cart;
 