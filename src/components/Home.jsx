import React from 'react'
import {  useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()
  function Nav(){
    let x = false;
    if (x){
      navigate('/about')
    }else{
      navigate('/news')
    }
  }
  return (
    <div>
        <h1>Home page</h1>
       <button onClick={(()=>{Nav()})}>go to about OR news </button>
    </div>
  )
}
