import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { name, img, url, seller, price, stock } = props.product
    // console.log(props.product);
    return (
        <div className="product">
            <div className="products-img">
                <img src={img} alt="" />
            </div>
            <div className="products-detils">
                <p className="product-name"><a href={url}>{name}</a></p>
                <div>
                    <div>
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddedProduct(props.product)} className="cart-btn">
                        <FontAwesomeIcon icon={faCartPlus}/>Add to cart</button>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;