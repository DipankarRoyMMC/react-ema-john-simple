import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleAddToCart = (selectedProduct) => {
        // console.log(selectedProduct)
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quentity = 1;
            newCart = [...cart, selectedProduct];
        } else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quentity = exists.quentity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart);
        addToDb(selectedProduct.id);
    }
    return (
        <div className="shop-container">
            <div className="products-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button className='reveiw-order-btn'>Review Order
                            <FontAwesomeIcon className='order-icon' icon={faArrowRight}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop; 