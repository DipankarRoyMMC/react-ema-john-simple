import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Product.css';
const Product = ({ product, handleAddToCart }) => {
    // const { product, handleAddToCart } = props;
    const { name, price, img, seller, ratings } = product;
    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-info">
                <h2 className="product-name">{name}</h2>
                <p className="product-price"><strong>Price: ${price}</strong></p>
                <p><small>Manufacturer:</small> {seller}</p>
                <p><small>Rating:</small> {ratings} star</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className="cart-text">Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;