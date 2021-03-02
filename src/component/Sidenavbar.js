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
                
                <NavLink to="/">Login</NavLink>
                <NavLink to="/">Signup</NavLink>
                <NavLink to="/order-online">Order Now</NavLink>
                            
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
    smMobile: "440px"
  });

const Navbar=styled.div`
${customMedia.greaterThan('lgdesktop')`
display:none;
    `}
    ${customMedia.lessThan('lgdesktop')`
    display:none;
        `}
        ${customMedia.lessThan('smMobile')`
    display:block;
    background-color: transparent;
        `}
    
height: 22rem;
  width: 22rem;
  z-index: 1;
  top: 0;
  left: 0;
  position:absolute;
  background-color: ;
  overflow-x: hidden;
  transition: 0.5s;
  transform:translate(1%,2%);
 
  .closebtn {
    position: relative;
    top: 0;
    right: 2rem;
    font-size: 36px;
    margin-left: 50px;
  }
  .nav{
      margin:2rem 0 0 1rem; 
  }
  .nav a {
    padding: 8px 8px 8px 32px;
    text-decoration: none;
    font-size: 1rem;
    color: #fff;
    display: block;
    transition: 0.3s;


  }
  
  .nav a:hover {
    color: #000;
  }
  
`;
