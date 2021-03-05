import React, { useEffect, useState } from 'react';
import './Review.css'
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../ReviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import orderedImage from '../../images/giphy.gif'
// import { Link } from 'react-router-dom';


const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderePlaced, setOrderPlaced] = useState(false)
 
    const handleOrderNow = () => {
        
        setCart([])
        console.log("Order Now Clicked", cart);
        setOrderPlaced(true);
        processOrder();
      
    }

    const handleRemoveItem = (productKey) => {
         
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey)
    }

    useEffect(() => {
        const saveData = getDatabaseCart();
        const productKeys = Object.keys(saveData);
        const cartProducts = productKeys.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = saveData[key]
            return product;
        });
        setCart(cartProducts);
    }, [])
    
    let thankYou;
    if (orderePlaced) {
        thankYou = <img src={orderedImage} alt="Your Ordered Is Confirm"/>;
    } 

    return (
        <div className="reviewItem">
            <div className="review-item">
                {
                cart.map(item =>  
                <ReviewItem
                    key={item.key}
                    handleRemoveItem={handleRemoveItem}
                    product={item} />)
                }
                {
                    thankYou
                }
            </div>
            <div className="reviewSummary">
                <Cart cart={cart} >
                      <button  onClick={handleOrderNow} className="cart-btn">Order Now</button> 
                </Cart>
                 
            </div>                   
        </div>
              
          
           
    );
};

export default Review;