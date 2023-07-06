import {useState} from 'react';
import Navbar from '../components/Navbar';
import News from '../components/News/News';
import Poll from '../components/Poll/Poll';
import Footer from '../components/Footer';
import './postpage.css'
const PostPage = () => {
    
    return (
        <div className='blogspage-container'>
            <header>
                <Navbar />
            </header>

            <section className='content'>
                <section className='main-content'>
                    <section className='article-container'>
                        <div className='article-header'>
                            <h2 className='article-title'>31</h2>
                        </div>
                        <div className='article-body'>
                            <div className='article-image'>
                                <img></img>
                            </div>
                            <article className='article'> 

                            </article>
                        </div>
                        <div className='article-footer'>

                        </div>
                    </section>
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

export default PostPage;