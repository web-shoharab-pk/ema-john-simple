import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Products/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [loading, setLoading] = useState(true);
    document.title = "Product details"

    const product = fakeData.find(pd => 
        pd.key === productKey,
        setLoading(false)
    );
    console.log(product);
    return (
        <div>
            <h1>Your Product Detail</h1>
            {
                loading ? <p>loading....</p> : ""
            }
            <Product showAddToCart={false} product={product} />
        </div>
    );
};

export default ProductDetail;