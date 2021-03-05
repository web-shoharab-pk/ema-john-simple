import React, { useEffect } from 'react';
import fakeData from '../../fakeData'
import { useState } from 'react';
import  './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';
 

const Shop = () => {
    const first20 = fakeData.slice(0, 20);
    const [products ] = useState(first20)
    const [cart, setCart] = useState([])
 
    useEffect(() => {
        const saveItem = getDatabaseCart();
        const productsKeys = Object.keys(saveItem);
       
        const previousCart = productsKeys.map(pdkey => {
            const product = fakeData.find(pd => pd.key === pdkey);
            product.quantity = saveItem[pdkey];
            return product;
            
        });
        setCart(previousCart);
    }, [])


    const handleAddedProduct = (product) => {
        // console.log("Clicked", product);
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === product.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
           sameProduct.quantity =  count;
           const others = cart.filter(pd => pd.key !== toBeAddedKey);
           newCart = [...others, sameProduct]
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product]
        }
       
       
        setCart(newCart);
        
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
                <Cart  cart={cart}>
                    <Link to="/review"><button className="cart-btn">Review your order</button></Link>
                </Cart>
             
            </div>

        </div>
    );
};

export default Shop;