import React from 'react'
import { FaAngleRight } from 'react-icons/fa'
const Forward = () => {
  return (
    <div>
        <button className='button__Forward' onclick="history.forward()"><FaAngleRight></FaAngleRight></button>
    </div>
  )
}

export default Forward