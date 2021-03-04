import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart, setCart] = useState([]);
 
    useEffect(()=> {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveData[key]
            return product;
        });
        setCart(cartProducts);
    }, [])
    return (
        <div>
            <h3>Order items: {cart.length} </h3>
           {
               cart.map(item =>  <ReviewItem product={item} />)
           }
           
        </div>
    );
};

export default Review;