import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const confirmPasswordRef = useRef(null);

    const handleSignup = (e) => {
        e.preventDefault();

        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        // Perform signup logic here
        // ...
    };

    const handleLoginRedirect = () => {
        // Redirect to login page
        // ...
        navigate('/auth/signin')

    };

    return (
        <>
            <div className='signup-bg'></div>
            <div className='signup-container'>
                <h2 className='signup-title'>Signup</h2>
                <p className='signup-description'>You look like a new comer,take a seat join us!</p>
                <form onSubmit={handleSignup} className='signup-form'>
                    <label htmlFor="username" className='signup-label'>Username</label>
                    <input type="text" id="username" ref={usernameRef} required />

                    <label htmlFor="email" className='signup-label'>Email</label>
                    <input type="email" id="email" ref={emailRef} required />

                    <label htmlFor="password" className='signup-label'>Password</label>
                    <input type="password" id="password" ref={passwordRef} required />

                    <label htmlFor="confirmPassword" className='signup-label'>Confirm Password</label>
                    <input type="password" id="confirmPassword" ref={confirmPasswordRef} required />

                    <button type="submit" className='btn-signup'>Signup</button>
                </form>
                <p className='signup-footer'>
                    Already have an account?{' '}
                    <span onClick={handleLoginRedirect} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
                        Login here
                    </span>
                </p>
            </div>
        </>
    );
};

export default Signup;
