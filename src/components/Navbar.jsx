import React from "react";
import { NavLink,  } from "react-router-dom";
import "./navbar.css";


export default function Navbar() {
//   const [searchparams, setSeachParams] = useSearchParams();
  // const searchparams =  useSearchParams();
//   let age = searchparams.get("age");
//   let city = searchparams.get("city");
//   console.log(searchparams.get("age"));
//   console.log(searchparams.get("city"));
  return (
    <>
      <div className="topnav">
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" };
          }}
          className="Navlink-css"
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" };
          }}
          className="Navlink-css"
          to={"/news"}
        >
          News
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" };
          }}
          className="Navlink-css"
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" };
          }}
          className="Navlink-css"
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => {
            return { color: isActive ? "red" : "black" };
          }}
          className="Navlink-css"
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
      <br />
      {/* <h1>this is my city {city}</h1> 
       <h1>this is my age {age}</h1>
       <input type="text" placeholder='please input your collage name' onChange={((e)=>{setSeachParams({text: e.target.value})})}/>
       <button type='button' onClick={(()=>{setSeachParams({age: 50, city:"US"})})}>click here</button>
        */}
    </>
  );
}
