import { useEffect, useState } from 'react';

import './news.css';

const News = () => {
    const [newsData, setNewsData] = useState([
        { title: 'Lorem ipsum dolor.', img: 'https://picsum.photos/200/300' },
        { title: 'Lorem ipsum dolor.', img: 'https://picsum.photos/200/300' },
        { title: 'Lorem ipsum dolor.', img: 'https://picsum.photos/200/300' },
        { title: 'Lorem ipsum dolor.', img: 'https://picsum.photos/200/300' },
        { title: 'Lorem ipsum dolor.', img: 'https://picsum.photos/200/300' }
    ]);

    // useEffect(() => {
    //     // Fetch news data and update state
    //     const fetchNewsData = async () => {
    //         try {
    //             const response = await fetch('API_ENDPOINT_URL');
    //             const data = await response.json();
    //             setNewsData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchNewsData();
    // }, []);

    return (
        <div className='news-container'>
            <div className='news-header'>
                <h2 className='news-title'>News from today!!</h2>
            </div>
            <hr style={{ marginTop: '26px' }} />
            {newsData.length > 0 ? (
                <div className='news-body'>
                    {newsData.map((newsItem) => (
                        <div key={newsItem.id} className='news-item'>
                            <div className='news-img'>
                                <img src={newsItem.img} alt='News' />
                            </div>
                            <div className='news-info'>
                                <p className='news-snippet'>{newsItem.title}</p>
                            </div>
                        </div>
                    ))}

                </div>
            ) : (
                <div className='loading-message'>Loading news...</div>
            )}
            <hr />
        </div>
    );
};

export default News;
