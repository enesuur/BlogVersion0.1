import React from 'react';
import './blogcart.css';
import img from './content.jpg'
import { BiCommentDetail, BiCalendar } from 'react-icons/bi'
const BlogCart = ({ title, snippet, image, comments, date }) => {
    return (
        <div className='cart-container'>
            <div className='cart-header'>
                <img src={img} alt="" />
            </div>
            <div className='cart-body'>
                <div className='cart-title'>
                    <span className='title'>{title}</span>
                </div>
                <p className='cart-snippet'>{snippet}
                </p>
                <div className='cart-info'>
                    <div className='cart-tag'>
                        <span>
                            <BiCommentDetail fontSize={'1em'} />
                        </span>
                        <p>{comments} comments</p>
                    </div>
                    <div className='cart-date'>
                        <span className='date-icon'>
                            <BiCalendar fontSize={'1em'} />
                        </span>
                        <p className='date-info'>{date}</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default BlogCart;