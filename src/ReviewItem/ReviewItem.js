import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { counter } from '@fortawesome/fontawesome-svg-core';


const ReveiwItem = (props) => {
    const { product, handleRemoveProduct } = props;
    const { name, img, price, shipping, quentity } = product;
    return (
        <div className='product-item'>
            <img src={img} alt="" />
            <div className="product-detail">
                <div>
                    <h2>Review Item {name.length > 20 ? name.slice(0, 20) + '...' : name} </h2>
                    <p>Price : <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                    <p><small>Quentity: {quentity}</small></p>
                </div>

                <button onClick={() => handleRemoveProduct(product)} className='product-button'>
                    <FontAwesomeIcon className='product-icon' icon={faTrashAlt}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default ReveiwItem;