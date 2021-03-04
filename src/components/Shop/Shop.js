import React from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import  './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
 

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products] = useState(first20)
    const [cart, setCart] = useState([])
 
    const handleAddedProduct = (product) => {
        // console.log("Clicked", product);
        const newCart = [...cart, product];
        setCart(newCart);
        const sameProduct = newCart.filter(pd => pd.key === product.key);
        const count = sameProduct.length;
        addToDatabaseCart(product.key, count)
    }
    return (
        <div className="shop-container">
            <div className="product-container">
                    {
                        products.map(pd => <Product
                            key={pd.key}
                            product={pd}
                            handleAddedProduct={handleAddedProduct}
                            showAddToCart={true}
                            /> )
                    }
            </div>
            <div className="cart-container">
                <Cart cart={cart} />
            </div>

        </div>
    );
};

export default Shop;