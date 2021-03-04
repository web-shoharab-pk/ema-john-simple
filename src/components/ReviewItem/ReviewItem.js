import React from 'react';

const ReviewItem = (props) => {
    const {name, seller, price, img, stock} = props.product;
    console.log(props.product);
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

                      <button  className="cart-btn">Remove</button>
                      <button className="cart-btn">Order now</button>

                    </div>
                    
                </div>
            </div>

        </div>
    );
 
};

export default ReviewItem;