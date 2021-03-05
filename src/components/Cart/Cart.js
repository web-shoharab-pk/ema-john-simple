import React from 'react';




const Cart = (props) => {
    const cart = props.cart

    let total = 0;
    let shippingCost = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
        shippingCost = shippingCost + product.shipping;
 
    }


    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items ordered: {cart.length}</p>
            <div>
                <p>Items: {cart.length}</p>
                <p>Shiping & Handling: ${Math.round(shippingCost)} </p>
                <p>Total before tax: ${Math.round(total)}</p>
                <p><small>Estimated Tax: ${(Math.round(total * .1))}</small> </p>
                <h4>Order Total: ${Math.round(shippingCost) + Math.round(total) + (Math.round(total) * .1)} </h4>
                {
                    props.children
                }
            </div>
            
        </div>
    );
};

export default Cart;
