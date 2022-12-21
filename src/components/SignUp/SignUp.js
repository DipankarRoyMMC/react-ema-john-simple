import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import gogoleLogo from '../../images/images.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    if (user) {
        navigate('/');
    }

    const handleCreateUser = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Your password does not matching');
            return;
        }

        createUserWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" placeholder="Enter yoru password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handleConfirmPassword} type="password" placeholder="Enter yoru password" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>

                    <Link to='/login'>
                        <input type="submit" className='form-submit' value="Sign Up" />
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
    );
};

export default SignUp;