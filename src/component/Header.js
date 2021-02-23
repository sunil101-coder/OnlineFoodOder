import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import Logo from '../images/Logo.jpg'
import Button from '../component/Button'
import {NavLink } from 'react-router-dom'
import Sidenavbar from '../component/Sidenavbar'
const Header = () => {
    const [nav ,setnav]=useState(false);
    const fixednavbar=()=>{
        console.log(window.scrollY);
        if(window.scrollY)
        {
            setnav(true);
        }
        else{
            setnav(false);

        }
    }
    window.addEventListener('scroll',fixednavbar);


    
    return (
        <Headercontainer className="header-container">
                 <div className={nav?'header-top active':'header-top'}>
                <Sitelogo src={Logo}/>
                <Sidenavbar/>
                 <nav>
                    <ul>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="">Contact</NavLink></li>
                    <li><NavLink to="/order-online">Order Now</NavLink></li>

                    </ul>
             
                </nav>


                </div> 
                <div className="header-content">
                <div className="header-box">
                <Title>
                    Always Choose Good
                </Title>
                <Subtitle>
                    Order  anywhere anytime.

                     </Subtitle>
                     <Button className="titlebtn">
                        Our menu
                        </Button>                     

              
                </div>
            </div>                       
            
                   
                
          </Headercontainer>
        
    )
}

export default Header
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });
const Sitelogo =styled.img`
width:150px;
${customMedia.lessThan('tablet')`
        width:100px;
        margin:0 0 0 -2rem;
`
}
${customMedia.lessThan('smMobile')`
        display:none;
`}`
const Headercontainer =styled.div`
${customMedia.lessThan('tablet')`
height:100vw;`}

    ${customMedia.lessThan('smMobile')`
    height:100vw;
    `}
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
    ${customMedia.lessThan('smMobile')`
    font-size:1em;
    
    `}
    
    
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
        
    }
    ${customMedia.lessThan('smMobile')`
    display:none;

`}

}

.header-content{

    width:100%;
    position:relative;
    margin:4.5rem 0 0;
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    ${customMedia.lessThan('smMobile')`
    position:absolute;
    margin:7rem 0 0 0;
    ;
`}
    
}
.header-box{
    height:10rem;
    text-align:left;
    justify-content:center;
    aloign-content:center;
    margin:10rem 0 0 0;
}
.titlebtn
{
    border:none;
    outline:none;
    border-radius:0.235rem;
    ${customMedia.lessThan('smMobile')`
    margin:7px 0 0 0;
    `}

}

`;

//content
const Title = styled.h1`
    left:0;
    color:red;
    text-align:left;
    margin:1rem 0 0;
    font-weight:700;
    font-size:3rem;;
    line-height:2.1rem;
    ${customMedia.lessThan('mdDesktop')`
    line-height:2.1rem;
    font-size:xx-large;
    margin-top:-4rem;
`}
    ${customMedia.lessThan('smMobile')`
    line-height:2.1rem;
    font-size:larger;
    margin-top:-5rem;
`}


`;
const Subtitle = styled.h2`
color:#fff;
text-align:center;
margin:15px 0 0;
font-weight:400;
font-size:3rem;
line-height:1.25rem;
padding:10px 0 0 0;
${customMedia.lessThan('mdDesktop')`
line-height:2.1rem;
font-size:xx-large;
margin-top:0.5rem;
`}  
${customMedia.lessThan('smMobile')`
    font-weight:200;
    font-size:medium;
    margin-top:-1rem;

`}
`;

