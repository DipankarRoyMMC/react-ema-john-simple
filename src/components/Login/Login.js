import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import gogoleLogo from '../../images/images.png';
import { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate('/shop');
    }

    const handleUserSignIn = (event) => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder="Enter yoru password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {loading && <p>Loading...</p>}
                    <div>
                        <Link to='/signup'>
                            <input type="submit" className='form-submit' value="Login" />
                        </Link>
                    </div>


                    <p>New to Ema-john ? <Link className='form-link' to='/signup'>Create New Account</Link></p>

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
    );
};

export default Login;