import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import ForArtist from '../../../pages/For Artists/ForArtist'
import Developer from '../../../pages/Developers/Developer'
import Advertising from '../../../pages/Advertising/Advertising'
import Investor from '../../../pages/Investors/Investor'
import Vendor from '../../../pages/Vendors/Vendor'
import './main.css'

const Communities = () => {
  return (
    <div>
        Communities
        <br />
        <Link className='communities' to='/ForArtist'>ForArtist</Link>
        <br />
        <Link className='communities' to='/Developer'>Developer</Link>
        <br />
        <Link className='communities' to='/Advertising'>Advertising</Link>
        <br />
        <Link className='communities' to='/Investor'>Investor</Link>
        <br />
        <Link className='communities' to='/Vendor'>Vendor</Link>
        <Routes>
            <Route path='/ForArtist' element={<ForArtist/>}></Route>
            <Route path='/Developer' element={<Developer/>}></Route>
            <Route path='/Advertising' element={<Advertising/>}></Route>
            <Route path='/Investor' element={<Investor/>}></Route>
            <Route path='/Vendor' element={<Vendor/>}></Route>
        </Routes>
    </div>
  )
}

export default Communities