import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const navigate = useNavigate()
    const {Component} = props;
    let login = localStorage.getItem('login')
    useEffect(()=>{
     if(login == false){
        navigate('/login')
     }
    },[])
    return (
    <div>
        <h1>this is protected section</h1>
        <Component/>
    </div>
  )
}
