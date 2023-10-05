import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Support from '../../../pages/Support/Support'
import MobileApp from '../../../pages/Free Mobile App/MobileApp'
import './main.css'

const UsefulLinks = () => {
  return (
    <div>
        Useful links
        <br />
        <Link className='usefullink' to='/Support'>Support</Link>
        <br />
        <Link className='usefullink' to='/MobileApp'>MobileApp</Link>
        <Routes>
            <Route path='/Support' element={<Support/>}></Route>
            <Route path='/MobileApp' element={<MobileApp/>}></Route>
        </Routes>
    </div>
  )
}

export default UsefulLinks