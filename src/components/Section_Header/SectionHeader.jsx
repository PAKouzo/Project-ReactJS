import React from 'react'
import { LuLibrary } from "react-icons/lu";
import { IoAdd } from "react-icons/io5";
import './main.css'

const SectionHeader = () => {
  return (
    <div className='col-12'>
      <div className="row">
        <div className="col-10">
          <button>
            <LuLibrary className='library__button'></LuLibrary>
            Your Library
          </button>
        </div>
        <div className="col-2">
          <button>
            <IoAdd className='add__button'></IoAdd>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SectionHeader