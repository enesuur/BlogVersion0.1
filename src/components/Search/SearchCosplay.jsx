import React, { useState } from 'react';
import Cosplays from '../Cosplay/Cosplays';
import './searchcosplay.css';
const SearchCosplay = () => {

    const [articles, setArticles] = useState([{ id: 1, title: 'Enes' }]);
    const [query, setQuery] = useState('');


    const handleSearch = () => {
        // Call the onSearch prop function with the query as an argument

    };

    return (
        <div className='searchcosplay-container'>
            <div className='searchcosplay-box'>
                <input
                    className='inp-cosplay-search'
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch} className='btn-search'>Search</button>
            </div>
            <div className='cosplays-container'>
                <Cosplays />
            </div>
        </div>
    );
};

export default SearchCosplay;
