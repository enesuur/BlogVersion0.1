import {useState} from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News/News';
import Poll from '../components/Poll/Poll';
import Footer from '../components/Footer';
import Search from '../components/Search/Search';
import './blogspage.css';
const Blogs = () => {
    
    return (
        <div className='blogspage-container'>
            <header>
                <Navbar />
            </header>

            <section className='content'>
                <section className='main-content'>
                    <Search/>
                </section>
                <section className='support-content'>
                    <News />
                    <Poll />
                </section>
            </section>

            <footer>
                <Footer />
            </footer>


        </div>
    )
}

export default Blogs;