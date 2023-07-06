import React from 'react'
import './cosplays.css';
import img from './cosplay.jpeg';
import CosplayCart from './CosplayCart';
const Cosplay = () => {
    return (
        <div className='cosplays-container'>
            <CosplayCart />
            <CosplayCart />
            <CosplayCart />
            <CosplayCart />
            <CosplayCart />
            <CosplayCart />
        </div>
    )
}

export default Cosplay