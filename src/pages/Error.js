import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='section error-section'>
    <div className='error-container'>
    <h1>Oops!! A dead end</h1>
      <Link to='/' className='btn btn-primary'>
        Back to Home
      </Link>
    </div>
  
    </section>
  )
}

export default Error
