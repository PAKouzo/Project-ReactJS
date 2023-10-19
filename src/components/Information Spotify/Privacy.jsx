import React from 'react'
import { MdLanguage } from "react-icons/md";
import './main.css'
const Privacy = () => {
  return (
    <div className='view__privacy'>
        <div className='privacy'>
            <div><button className='privacy__item'>Legal</button></div >
            <div><button className='privacy__item'>Privacy Center</button></div >
            <div><button className='privacy__item'>Privacy policy</button></div >
            <div><button className='privacy__item'>Cookies</button></div >
            <div><button className='privacy__item'>About Ads</button></div >
            <div><button className='privacy__item'>Accessibility</button></div >
        </div >
        <a className='cookies' href="">Cookies</a>
        <button className='language__button'>
            <MdLanguage className='Language'></MdLanguage>
            English
        </button>
    </div >
  )
}

export default Privacy