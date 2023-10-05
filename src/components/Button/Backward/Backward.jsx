import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

const Backward = ({color}) => {
  return (
    <div>
        <button style={{color: color}} className='button__Backward' onclick="history.back()">
          <FaAngleLeft></FaAngleLeft>
        </button>
    </div>
  )
}

export default Backward