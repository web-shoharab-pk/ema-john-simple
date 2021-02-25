import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import  './Shop.css'

const Shop = () => {
    const first15 = fakeData.slice(0, 15);
    const [products, setProducts] = useState(first15)
    // console.log(first10);
    return (
        <div className="shop-container">
            <div className="product-container">
                <ul>
                    {
                        products.map(product => <li>{product.name}</li>)
                    }
                </ul>
            </div>
            <div className="cart-container">
                <h3>This is cart container</h3>
            </div>

        </div>
    );
};

export default Shop;