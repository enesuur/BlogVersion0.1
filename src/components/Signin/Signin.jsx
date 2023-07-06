import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './signin.css';

const Signin = () => {
    const navigate = useNavigate();
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSignin = (e) => {
        e.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        // Perform signin logic here
        // ...

        navigate('/auth/home');
    };

    const handleSignupRedirect = () => {
        // Redirect to signup page
        // ...

        navigate('/auth/signup');
    };

    return (
        <>
            <div className='signin-bg'></div>
            <div className='signin-container'>
                <h2 className='signin-title'>Signin</h2>
                <p className='signin-description'>Welcome back,please signin.</p>
                <form onSubmit={handleSignin} className='signin-form'>
                    <label htmlFor="email" className='signin-label'>Email</label>
                    <input type="email" id="email" ref={emailRef} required />

                    <label htmlFor="password" className='signin-label'>Password</label>
                    <input type="password" id="password" ref={passwordRef} required />

                    <button type="submit" className='btn-signin'>Signin</button>
                </form>
                <p className='signin-footer'>
                    Don't have an account?{' '}
                    <span onClick={handleSignupRedirect} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        Signup here
                    </span>
                </p>
            </div>
        </>
    );
};

export default Signin;
