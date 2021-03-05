import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, img,   seller, price, stock, key } = props.product
 
    return (
        <div className="product">
            <div className="products-img">
                <img src={img} alt="" />
            </div>
            <div className="products-detils">
                <h5><Link to={"/product/"+key}>{name}</Link> </h5>
                {/* <p className="product-name"><a href={url}>{name}</a></p> */}
                <div>
                    <div>
                        <p>by: {seller}</p>
                        <p>${price}</p>
                        <p>only {stock} left in stock - order soon</p>
                        {props.showAddToCart === true && <button onClick={() => props.handleAddedProduct(props.product)} className="cart-btn">
                        <FontAwesomeIcon icon={faCartPlus}/>Add to cart</button>}
                    </div>
                    
                </div>
            </div>

        </div>
    );
};

export default Product;