import React from 'react'
import './cosplaycart.css';
import img from './cosplay.jpeg';
const CosplayCart = () => {
    return (
        <div className='cosplaycart-container'>
            <div className='cosplaycart-header'>
                <img src={img} alt="" />
            </div>
            <div className='cosplaycart-body'>
                <h2 className='cosplaycart-title'>Batuhan herkese vermeye devam ediyor!!!</h2>
                <p className='cart-snippet'>Batuhan ulus frikikleri ile bizi şaşırttı, amerikan ibneler birliği yargıya başvurdu!!</p>
            </div>
            <div className='cosplaycart-footer'>
                <p className='cosplaycart-info'>
                    <p className='cosplaycart-tag'>Cosplay</p>
                    <p className='cosplaycart-date'>31.31.2021</p>
                </p>
            </div>
        </div>
    )
}

export default CosplayCart