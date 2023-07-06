import React from 'react'
import '../components/notfound.css'
import {Link} from 'react-router-dom'
const NotFound = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='notfound-container'>
        <div className='notfound-header'>
            <h1>404 :/</h1>
            <h3 style={{textAlign:'center'}}>OPPS! PAGE NOT FOUND</h3>
        </div>
        <div className='notfound-info'>
            <p>Sorry,the page you'r looking for doesn't exist,If you think something is broken,report a problem!</p>
        </div>
        <div className='notfound-buttons'>
            <button className='btn-notfound' onClick={handleSubmit}>
                <Link to={'/'} style={{textDecoration:'none',color:'white',padding:'16px'}}>Return Homepage</Link>
            </button>
            <button className='btn-notfound' onClick={handleSubmit}>
                <Link to={'/'} style={{textDecoration:'none',color:'white',padding:'16px'}}>Give Feedback</Link>
            </button>
        </div>
    </div>
  )
}

export default NotFound