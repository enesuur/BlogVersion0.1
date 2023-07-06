import React, { useState, useEffect } from 'react';
import './search.css';
import Posts from '../Posts/Posts';
import Cosplay from '../Cosplay/Cosplays';
const Search = ({ myState }) => {
    const [postData, setPostData] = useState([

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

    const [isCosplay, setIsCosplay] = useState(false);
    const [articles, setArticles] = useState([{ id: 1, title: 'Enes' }]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        setIsCosplay(myState === 'cosplay');
    }, [myState]);

    const handleSearch = () => {
        // Call the onSearch prop function with the query as an argument

    };

    return (
        <div className='search-container'>
            <div className='search-box'>
                <input
                    className='inp-search'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className='btn-search'>Search</button>
            </div>
            <div>
                {isCosplay && <Cosplay />}
                {!isCosplay && <Posts currentPosts={currentPosts} />}
            </div>
        </div>
    );
};

export default Search;
