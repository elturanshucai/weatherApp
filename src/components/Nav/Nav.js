import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Main from "../Main/Main";
import Sports from "../Sports/Sports";
import './Nav.css'

function Nav(){
    const setBG=(e)=>{
        let links=document.querySelectorAll('nav a')
        links.forEach(item=>item.style.backgroundColor='rgb(22, 206, 22)')
        e.target.style.backgroundColor='rgb(15, 114, 15)'
    }
    return(
        <div>
            <nav>
                <Link to='/' onClick={setBG}>Weather</Link>
                <Link to='/football' onClick={setBG}>Football</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/football" element={<Sports/>}/>
            </Routes> 
        </div>
    )
}
export default Nav;