import React from 'react'
import { useLocation } from 'react-router-dom'

const Bbpage = () => {

    const location = useLocation();
    const moviedetails = location.state.array || {}

  return (
    <div className='text-white'>
      <h1>hai</h1>
      <h1>{moviedetails.name}</h1>
    </div>
  )
}

export default Bbpage
