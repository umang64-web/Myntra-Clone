import React from 'react'
import logo from '../assets/myntra_logo.png'
import SearchBar from './SearchBar'
import {FaRegUser} from 'react-icons/fa'
import {BsHeart, BsHandbag } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const wishlistcount = useSelector((store)=>store.wishlist.lists.length)
  const baglistcount = useSelector((store)=>store.bag.lists.length)
  return (
    <div className='sticky top-0 z-10 bg-white shadow-[0.5px_0.0px_15.0px_0.0px_rgba(1,0,0,0.1)] h-[5rem] py-4 flex'>
       <Link to='/'><img src={logo} className='h-[3rem] mx-[1.5rem]'></img></Link>     
       <ul className='flex justify-between'>
       <Link to='/'><li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>MEN</li></Link>
        <li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>WOMEN</li>
        <li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>KIDS</li>
        <li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>HOME & LIVING</li>
        <li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>BEAUTY</li>
        <li className='mx-4 font-semibold text-[0.88rem] my-4 cursor-pointer'>STUDIO <span className='text-[0.7rem] text-red-600'>NEW</span></li>                             
       </ul>
       <SearchBar/>
        <ul className='flex mt-7 ml-14'>
              <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent cborder1'>
                <h1 className='px-3 text-center text-xs relative'> <span className='text-lg block absolute -top-5 left-1/3'><FaRegUser /></span> <span className='block'>Profile</span> </h1>
              </li>
              <Link to={'/wishlist'}><li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

                <h1 className='px-3 text-xs text-center relative'> <span className='text-lg absolute -top-5 left-1/3 flex'><BsHeart /><span className='text-red-400 font-bold'>{wishlistcount>0?wishlistcount:''}</span></span>Wishlist</h1>
              </li></Link>
              <Link to='/bag'> <li className='w-max flex justify-center items-center font1 font-semibold capitalize no-underline text-sm border-4 border-transparent ' >

                <h1 className='px-3 text-xs text-center relative'><span className='text-lg absolute -top-5 left-1/3 flex'><BsHandbag /><span className='text-red-400 font-bold'>{baglistcount>0?baglistcount:''}</span></span>Bag</h1></li></Link>
                </ul>
    </div>
  )
}
