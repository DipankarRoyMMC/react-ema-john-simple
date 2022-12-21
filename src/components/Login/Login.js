import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import gogoleLogo from '../../images/images.png';

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder="Enter yoru password" required />
                    </div>
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