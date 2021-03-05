import React from 'react';

const ReviewItem = (props) => {
    const { name, seller, price, img, stock, key, quantity } = props.product;

    return (
        <div className="product">
            <div className="products-img">
                <img src={img} alt="" />
            </div>
            <div className="products-detils">
                <h6> {name} </h6>
                {/* <p className="product-name"><a href={url}>{name}</a></p> */}
                <div>
                    <div>
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <p>Quantity: {quantity}</p>
                        <h4>Total price: {price*quantity}</h4>
                        <button onClick={() => props.handleRemoveItem(key)} className="cart-btn">Remove</button>
                    </div>

                </div>
            </div>

        </div>
    );

};

export default ReviewItem;