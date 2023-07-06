import React, { useEffect, useState } from 'react'
import BlogCart from '../BlogCart/BlogCart'
import './posts.css';
import PostPagination from '../PostPagination/PostPagination';
const Posts = ({ currentPosts }) => {



    return (
        <div className='posts-container'>
            {currentPosts.map((post, index) => {
                return (
                    <BlogCart
                        key={index}
                        title={post.title}
                        snippet={post.snippet}
                        image={post.image}
                        comments={post.comments}
                        date={post.date}
                    />
                );
            })}
        </div>
    )
}

export default Posts