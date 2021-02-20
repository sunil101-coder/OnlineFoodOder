import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });
  export const Customercontainer =styled.div`
  width:100%;
  height:50vh;

  `;
  export const CustomerHeading=styled.div`
  justify-content:center;
  margin:2rem 0 0 0;
  color:blue;
  `;
  export const CustomerHeadingText=styled.h1`
  justify-content:center;
  align-content:center;
  text-align:center;
  color:blue;
  font-size:2rem;
  `;
  export const Customercontent=styled.div`
  display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto; 
`;
  export const Customercard=styled.div`
  margin:2rem 1rem 2rem 1rem;
  line-height:2;
  width:500px;
  height:200px;
  border:1px solid lightblue;
  border-radius:20px 20px 16px 16px;
    `;
  export const Customerimg=styled.img`
  border-radius:75%;
  min-height:177px;
  width:100%;
  
  `;
  export const CustomerTitle=styled.h1`
  text-align:left;
  font-size:1rem;
  margin:3rem 0 0 1rem; 
  color:blue;
font-family:math; 
vertical-align:basline;
`;
  export const CustomerDesc=styled.h1`
  text-align:left;
  font-size:1rem;
  color:#000;
  margin:2rem 0 0 1rem; `;
