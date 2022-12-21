import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    let quentity = 0;

    for (const product of cart) {
        quentity = quentity + product.quentity;
        total = total + product.price * product.quentity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * .10).toFixed(2));
    const grandTotal = (total + shipping + tax);
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Selected Items: {quentity}</h4>
            <p>Total Price: $ {total}</p>
            <p>Total Shipping Charge: ${shipping}</p>
            <p>Tax: ${tax}</p>
            <h3>Grand Total: ${grandTotal.toFixed(2)}</h3>
            {props.children}
        </div>
    );
};
export default Cart;