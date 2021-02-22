import React from 'react'
import {NavLink } from 'react-router-dom'
import Logo from '../images/Logo.jpg'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 

const Navbar = () => {
    return (
        <Headertop className='header-top'>
        <Sitelogo src={Logo}/>                                 
        <nav>
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="">Contact</NavLink></li>
            <li><NavLink to="">Order Now</NavLink></li>

            </ul>
     
        </nav>
    </Headertop>    )
}

export default Navbar
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });


const Sitelogo =styled.img`
width:150px;
${customMedia.lessThan('smMobile')`
        width:100px;
        margin:-8rem 0 0 -5rem;
        top:0;
`}`;
const Headertop=styled.div`
.header-top{
    
    z-index:1;
    top:0;
    right:0;
    width:100%;
    padding:0 100px ;
    display:flex;
    justify-content:space-between;
    align-items:center;
    transition:0.5s;
    

} 

.header-top a{
color:#fff;
font-size:2em;
font-weight:700;
text-decoration:none;

}

nav ul li{
list-style:none;
padding:10px 0 0 3rem;
float:left;
font-size:1.5rem;

}
.header-top nav ul li a{
font-size:1em;
font-weight:100;
width:4rem;
&:hover{
    color:lightblue;
    border-top:1px solid black;
    border-left:1px solid black;
    border-right:1px solid black;    
}
}
`;
