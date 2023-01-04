import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
        <h1>
        About page 
        </h1>
      <Link to={'/'}>  <button>vist to Home page back</button></Link>
    </div>
  )
}
