import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import './authLayout.css';
const AuthLayout = () => {
    return (
        <div className='auth-container'>
            <section className='auth-section'>
                <Outlet/>
            </section>

   
        </div>
    )
}

export default AuthLayout;