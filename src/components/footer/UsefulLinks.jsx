import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Support from '../../pages/Support/Support'
import MobileApp from '../../pages/Free Mobile App/MobileApp'
import './main.css'

const UsefulLinks = () => {
  return (
    <div className='footer__view'>
        Useful links
        <br />
        <Link className='footer_item' to='/Support'>Support</Link>
        <br />
        <Link className='footer_item' to='/MobileApp'>MobileApp</Link>
        <Routes>
            <Route path='/Support' element={<Support/>}></Route>
            <Route path='/MobileApp' element={<MobileApp/>}></Route>
        </Routes>
    </div>
  )
}

export default UsefulLinks