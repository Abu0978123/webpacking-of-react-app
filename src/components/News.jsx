import React from 'react'
import { Link, Outlet,  } from 'react-router-dom';
import './cssStyles/style.css'

export default function News() {
    // const location = useLocation();
    // console.log(location)
  return (
    <div className='outlet'>
        <h1>this is news section</h1>
        <Link className='link' to={'company'}>company</Link>
        <Link className='link' to={'channel'}>channel</Link>
        <Link className='link' to={'other'}>other</Link>
        <Outlet/>
        {/* <Outlet/> */}
    </div>
  )
}



