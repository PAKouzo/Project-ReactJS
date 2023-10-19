import React from 'react'
import { FaAngleLeft } from "react-icons/fa";

const Backward = () => {
  const goback = () => {
    window.history.back();
  }
  return (
    <div>
        <button className='button__Backward' onclick={goback}>
          <FaAngleLeft></FaAngleLeft>
        </button>
    </div>
  )
}

export default Backward