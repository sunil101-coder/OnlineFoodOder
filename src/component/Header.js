import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import Logo from '../images/Logo.jpg'
import Button from '../component/Button'
import {NavLink ,Link} from 'react-router-dom'
import Sidenavbar from '../component/Sidenavbar'
import  Modal from 'react-modal'
import  Box from '../userlocation/locationsearchbar'
import SignupButton from '../component/Signupbtn'
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}
const Header = () => {
    const [nav ,setnav]=useState(false);
    const [loginbtn, setloginbtn] = useState(false)
    {/*const Placeapi="https://maps.googleapis.com/maps/api/place/textsearch/output?parameters";
    console.log(Placeapi);
    const fixednavbar=()=>{
        if(window.scrollY)
        {
            setnav(true);
        }
        else{
            setnav(false);

        }
    }*/}
    const Loginbtn =()=>{
        setloginbtn({setloginbtn:!loginbtn});
        if(loginbtn)
        {
            setloginbtn(false);
        }
        
        };
    {/*window.addEventListener('scroll',fixednavbar);*/}

    
    Modal.setAppElement('body')
    
    return (
        <Headercontainer className="header-container">
                 <div className={nav?'header-top active':'header-top'}>
                {/*<Sitelogo src={Logo}/>*/}
                <Sidenavbar/>
                 <nav>
                    <ul>
                    <li><NavLink to=""><button className="top-barbtn"  onClick={Loginbtn}>Login</button></NavLink></li>
                    <li><NavLink to=""><button className="top-barbtn">Signup</button></NavLink></li>
                    
                    </ul>
             
                </nav>
        
                </div> 
                <div className="header-content">
                <div className="header-box">
                <Box/>
                {/*<Title>
                    Always Choose Good
                </Title>
                <Subtitle>
                    Order  anywhere anytime.

                     </Subtitle>
                     <Link to="/order-online">
                     <Button className="titlebtn">
                        Our menu
                        </Button>                     

                     </Link>
                     
                */}
                </div>
            </div>                       
            
            <Modal isOpen={loginbtn} 
             onRequestClose={Loginbtn}
            style={customStyles}
            >
            <SignupButton onClick={Loginbtn} close>X</SignupButton>
            <GoogleLogin
            clientId="676724069050-aoag59u2qh6m7rmrr29nghpskjhnlvo2.apps.googleusercontent.com"
            buttonText="Signup With Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
            />
          
          <SignupButton>
              Signup with mobile no
          </SignupButton>
          
            <div></div>
          <form>
          </form>
               
                </Modal>

                
          </Headercontainer>
        
    )
}

export default Header
const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      color                 : 'black',
      width                 : '30rem'

    }
  };
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
${customMedia.greaterThan('lgdesktop')`
height:26vw;
`}
${customMedia.lessThan('mdDesktop')`
height:45vw;`}

${customMedia.lessThan('tablet')`
height:40vw;`}

    ${customMedia.lessThan('smMobile')`
    width:102%;
    height:85vw;
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
    
    ${customMedia.lessThan('smMobile')`
    display:none;

`}

}
.top-barbtn{
    height: 3rem;
    width: 7rem;
    background: transparent;
    border: none;
    outline: none;
    font-size: 1em;
    color:white;

    &:hover{
        color:lightblue;
        cursor:pointer;
        border:1px solid black;
    }
}

.header-content{

    width:100%;
    position:relative;
    margin:0.5rem 0 0 0;
    display:flex;
    justify-content:center;
    align-content:center;
    text-align:center;
    ${customMedia.lessThan('mdDesktop')`
    margin:5.5rem 0 0 0;
    
    `}
    ${customMedia.lessThan('mdDesktop')`
    margin:4.5rem 0 0 0;
    
    `}
    ${customMedia.lessThan('smMobile')`
    position:absolute;
    margin:6rem 0 0 -1rem;
    
`}
    
}
.header-box{
    height:10rem;
    text-align:left;
    justify-content:center;
    align-content:center;
    transform:translate(0,114px);
    ${customMedia.lessThan('mdDesktop')`
    margin:-7.5rem 0 0 0;
    
    `}
    ${customMedia.lessThan('smMobile')`
    margin:-6.5rem 0 0 0rem;
    
    `}
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

