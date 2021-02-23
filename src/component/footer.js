import React, { useState } from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query"
import { Link } from 'react-router-dom'
import { AiOutlineGlobal } from 'react-icons/ai/index'
import { MdKeyboardArrowDown } from 'react-icons/md/index'
import FooterBackground from '../images/Footerbg.jpg'
const Footer = () => {
    const [langcontent, setlangcontent] = useState(false);
    const handletoggle = () => {

        setlangcontent({ setlangcontent: !langcontent });
        if (langcontent) {
            setlangcontent(false)
        }

    };
    return (
        <Footercontainer className="container">
            <span>
                Question?Call <Link>7011359101</Link>
            </span>




            <div className="footer-content">
                <ul>
                    <li>
                        <Link>     COMPANY  </Link>
                    </li>
                    <li>
                        <Link> Who We Are</Link>
                    </li>
                    <li>
                        <Link>Blog</Link>
                    </li>
                    <li>
                        <Link>Careers</Link>
                    </li>
                    <li>
                        <Link> Contact</Link>
                    </li>

                </ul>
                <ul>
                    <li>
                        <Link>FOR FOODIES</Link>
                    </li>
                    <li>
                        <Link>Community</Link>
                    </li>
                    <li>
                        <Link>Blogger Help</Link>
                    </li>
                    <li>
                        <Link>Mobile Apps</Link>

                    </li>

                </ul>
                <ul>
                    <li>
                        <Link>FOR YOU</Link>
                    </li>
                    <li>
                        <Link>Privacy</Link>
                    </li>
                    <li>
                        <Link>Terms</Link>
                    </li>
                    <li>
                        <Link>Security Sitemap</Link>
                    </li>
                </ul>
                <ul>

                    <li>
                        <Link>Report Fraud</Link>
                    </li>
                    <li>
                        <Link>Terms of Use</Link>
                    </li>
                    <li>
                        <Link>Contact Us</Link>
                    </li>
                </ul>
                <div className="lang-btn" >
                    <AiOutlineGlobal size={25} />
                    English&nbsp;
                <MdKeyboardArrowDown size={25} onClick={handletoggle} />
                </div>
            </div>
            {langcontent ?
                <div className="lang-toggle" >
                    <ul>
                        <li>
                            Hindi
                        </li>
                    </ul>
                </div>
                : null
            }
        </Footercontainer>
    )
}

export default Footer

//css
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "900px",
    mobile: "740px",
    smMobile: "600px"
});
const Footercontainer = styled.div`
margin:2rem 0 0 0;
background: radial-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)),
    url(${FooterBackground})no-repeat center center/cover;

Padding-top:10rem;
padding-bottom:3rem;
color:#e8d6d6;


.footer-content
{
        margin:1.5rem auto 0;
        width:70%;
        display:grid;
        grid-template-columns:repeat(4,1fr);
        grid-gap:1rem;
        overflow:auto;
        font-size:1rem;
        align-content:center;
        ${customMedia.lessThan('mdDesktop')`
        grid-template-columns:repeat(4,1fr);
        width:auto;
  
          `}
      
        ${customMedia.lessThan('smMobile')`
        margin-left:-1rem;
        grid-template-columns:repeat(2,1fr);
        width:max-content;
        `
    }
    }

  span{
         margin:0 0 0 12.5rem;
         font-size:larger;
         color:#e8d6d6;
         ${customMedia.lessThan('mdDesktop')`
         margin:0 0 0 3rem;
 
         `}
         ${customMedia.lessThan('smMobile')`
         margin-left:1rem;
        
           `}
                        }
ul li{
    list-style:none;
    padding:8px 8px 8px 8px;
    grid-column:10/12;
    color:#fff;
    ${customMedia.lessThan('smMobile')`
    grid-template-columns:repeat(2,1fr);
    padding:8px 0px 5px 0px;
      `}

        
}
a{
        color:#e8d6d6;

}
a:hover{
    text-decoration:none;
    cursor:pointer;
}
.lang-btn{
    background:transparent;
    border:0.9px solid #333;
    padding:1rem;
    width:10rem;
    margin-left:1.5rem;
    display:grid;
    grid-template-columns:repeat(3,1fr);
    justify-content:center;
    align-items:center;
}
.lang-toggle{
    display:grid;
    grid-template-columns:repeat(1,1fr);    
    margin-left:15.58rem;
    position:absolute;
    ${customMedia.lessThan('mdDesktop')`
    margin-left:1.48rem;
   
    `}
    ${customMedia.lessThan('smMobile')`
    margin-left:9.58rem;
   
    `}
}
.lang-toggle ul{
    background:var(--main-deep-dark);
    width:10rem; 
    border:0.9px solid #333;
    align-items:center;
    
}
.lang-toggle ul li{
    text-align:center;
    margin-left:-46px;
    &:hover{
        background:#0085ff;
        color:#fff; 
    }
}
`;