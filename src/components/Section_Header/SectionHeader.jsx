import React from 'react'
import { LuLibrary } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import './main.css'

const SectionHeader = () => {
  return (
    <div>
        <button>
          <LuLibrary className='library__button'></LuLibrary>
          Your Library
        </button>
        <button>
          <IoAdd className='add__button'></IoAdd>
        </button>
    </div>
  )
}

export default SectionHeader