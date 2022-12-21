import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import './Orders.css';
import Cart from '../Cart/Cart';
import ReveiwItem from '../../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className="review-items-container">
                {
                    cart.map(product => <ReveiwItem
                        product={product}
                        key={product.id}
                        handleRemoveProduct={handleRemoveProduct}

                    ></ReveiwItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/shipment'>
                        <button className='proceed-checkout-btn'>
                            Proceed Shipment
                            <FontAwesomeIcon icon={faCreditCard}></FontAwesomeIcon>
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;