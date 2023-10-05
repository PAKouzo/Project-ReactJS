import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import About from '../../../pages/About/About'
import Job from '../../../pages/Jobs/Job'
import Record from '../../../pages/For the Record/Record'
import './main.css'

const Company = () => {
  return (
    <div>
        Company
        <br />
        <Link className='company' to='/About'>About</Link>
        <br />
        <Link className='company' to='/Job'>Jobs</Link>
        <br />
        <Link className='company' to='/Record'>For the Record</Link>
        <Routes>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/Job' element={<Job/>}></Route>
            <Route path='/Record' element={<Record/>}></Route>
        </Routes>

    </div>
  )
}

export default Company