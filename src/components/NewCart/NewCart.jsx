import React from 'react';
import './newcart.css';
import { Link } from 'react-router-dom';
import { BiCommentDetail, BiCalendar } from 'react-icons/bi'

const NewCart = () => {
    return (
        <div className='newcart-container'>
            <div className='newcart-header'>
                <img src='https://picsum.photos/200/300' alt='photo' />
            </div>
            <div className='newcart-body'>
                <h3 className='category'>Cosplay</h3>
                <h2 className='newcart-title'>
                    <Link to='#'>Lorem ipsum dolor sit.Lorem ipsum dolor sit.Lorem ipsum dolor sit.</Link>
                </h2>
                <p className='newcart-snippet'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                </p>
                <div className='newcart-info'>
                    <div className='newcart-message'>
                        <i><BiCommentDetail /></i>
                        <span>32</span>
                    </div>
                    <p className='newcart-date'>
                        <i><BiCalendar /></i>
                        <span>23.12.2023</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default NewCart;
