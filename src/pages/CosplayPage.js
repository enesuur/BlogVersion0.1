import React from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News/News';
import Poll from '../components/Poll/Poll';
import Footer from '../components/Footer';

import SearchCosplay from '../components/Search/SearchCosplay';
import './cosplaypage.css';
import Cosplays from '../components/Cosplay/Cosplays';

const CosplayPage = () => {
    const myState = 'cosplay';
    return (
        <div className='cosplaypage-container'>
            <header>
                <Navbar />
            </header>

            <section className='content'>
                <section className='main-content'>
                    <SearchCosplay/>
                    <Cosplays/>
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

export default CosplayPage;