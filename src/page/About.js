import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 

const Login = () => {
    return (
        <Logincontainer>
        <div className="Login-top">
            <h2>Login</h2>
        </div>
        <Logincontent>

        </Logincontent>
        </Logincontainer>
    )
}

export default Login
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });

export const Logincontainer=styled.div`
display: block; 

  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 10%; 
  overflow: auto; 
  background-color: rgba(250,250,250); 
  justify-content:center;
  text-align:center;
  align-content:center;
  border:1px solid white;


`;
const Logincontent=styled.div`
background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  jus
`;