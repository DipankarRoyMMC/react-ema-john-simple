import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    // products loads 
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Order Summary</h2>
                <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop; <h2>this is shop components</h2>