import {useState} from 'react';
import Navbar from '../components/Navbar';
import NewCart from '../components/NewCart/NewCart';
import Poll from '../components/Poll/Poll';
import Footer from '../components/Footer';
import Search from '../components/Search/Search';
import PostPagination from '../components/PostPagination/PostPagination';
import './newspage.css';
const NewsPage = () => {
    const [postData,setPostData] = useState([
        
        {
          "id": 1,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "1.11.2023"
        },
        {
          "id": 2,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "2.11.2023"
        },
        {
          "id": 3,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
          "id": 4,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
          "id": 5,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
          "id": 6,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
          "id": 7,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
          "id": 8,
          "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
          "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
          "image": "content.jpg",
          "comments": 0,
          "date": "31.11.2023"
        },
        {
            "id": 9,
            "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
            "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
            "image": "content.jpg",
            "comments": 0,
            "date": "99.11.2023"
          },
          {
            "id": 10,
            "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
            "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
            "image": "content.jpg",
            "comments": 0,
            "date": "222.11.2023"
          },
          {
            "id": 11,
            "title": "Lorem ipsum dolor sit amet consectetur, adipisicing elit",
            "snippet": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos fugit blanditiis odit repellat recusandae facilis reiciendis sit quod.",
            "image": "content.jpg",
            "comments": 0,
            "date": "777.11.2023"
          }
      
])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostPerPage] = useState(10);
    const lastPostIndex = postsPerPage * currentPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = postData.slice(firstPostIndex, lastPostIndex);
    return (
        
        <div className='newspage-container'>
            <header>
                <Navbar />
            </header>

            <section className='content'>
                <section className='main-content'>
                    <section className='main-content-header'>
                        <h2>Latest News</h2>
                        <hr style={{marginTop:'0.5em',marginBottom:'1em'}}/>
                    </section>
                    <NewCart/>
                    <NewCart/>
                    <NewCart/>
                    <NewCart/>
                    <NewCart/>
                    <section className='pagination-container'>
                        <PostPagination
                        totalPosts={postData.length}
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        />
                    </section>
                </section>

                <aside className='support-content'>
                
                    <Poll />
                </aside>
            </section>

            <footer>
                <Footer />
            </footer>


        </div>
    )
}

export default NewsPage;