import React, { useState } from 'react'
import {NavLink,Link} from 'react-router-dom'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 

const Sidenavbar = () => {
    const [shownav,setshownav]=useState(false);
    const closeNav=()=>{
        setshownav({ setshownav: !shownav });
        if (shownav) {
            setshownav(false)
            
        }

        
    }
    return (    
        
        <Navbar className="Sidebar">
            <NavLink to="/" className="closebtn" onClick={closeNav}>&#9776;</NavLink>
            {
            shownav ?
            
            <nav className="nav">
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Sign In</NavLink>
                <NavLink to="/">Order Now</NavLink>
                            
            </nav>

                :null
                }
         </Navbar>
         
    )
}

export default Sidenavbar
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });

const Navbar=styled.div`
${customMedia.lessThan('lgdesktop')`
display:none;
    `}
    ${customMedia.lessThan('smMobile')`
    display:block;
        `}
    
height: 100%;
  width: 13.5rem;
  z-index: 1;
  top: 0;
  left: 0;
  position:absolute;
  background-color: transparent;
  overflow-x: hidden;
  transition: 0.5s;
  transform:translate(70%,2%);
  padding-top: 60px;

  .closebtn {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: 36px;
    margin-left: 50px;
  }
  .nav{
      margin:-4rem 0 0 -2rem; 
  }
  .nav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 25px;
    color: #fff;
    display: block;
    transition: 0.3s;
  }
  
  .nav a:hover {
    color: #000;
  }
  
`;
