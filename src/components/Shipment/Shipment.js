import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import gogoleLogo from '../../images/images.png';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');

    // const navigate = useNavigate();

    const handleNameBlur = (event) => {
        setName(event.target.value);
    }
    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handleAddresBlur = (event) => {
        setAddress(event.target.value);
    }
    const handlePhoneBlur = (event) => {
        setPhone(event.target.value);
    }


    const handleShippingInfo = (event) => {
        event.preventDefault();
        const shipping = { name, email, address, phone };
        console.log(shipping);
    }

    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Shipping Info</h2>
                    <form onSubmit={handleShippingInfo}>
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input value={user?.email} readOnly type="email" placeholder="Enter your email" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Address</label>
                            <input onBlur={handleAddresBlur} type="text" placeholder="Enter yoru Address" required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Enter Phone Number</label>
                            <input onBlur={handlePhoneBlur} type="text" placeholder="Enter yoru phone number" required />
                        </div>
                        <p style={{ color: 'red' }}>{error}</p>

                        <Link to='/login'>
                            <input type="submit" className='form-submit' value="Add Shipping" />
                        </Link>

                        <p>New to Ema-john ? <Link className='form-link' to='/login'>Create New Account</Link></p>

                        <div className='border-line'>
                            <div></div> <span>or</span>  <div></div>
                        </div>
                        <div>
                            <button className='google-btn' value="Continue with Google">
                                <img style={{ height: '30px' }} src={gogoleLogo} alt="google image" />
                                Continue with Goole
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Shipment;