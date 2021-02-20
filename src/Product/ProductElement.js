import styled from 'styled-components';
import { generateMedia } from "styled-media-query" 
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });


export  const ProdouctsContainer=styled.div`
width:100%;
min-height:${props=>(props.primary ?'30vh':'50vh')};
margin:3rem 0 5rem   0; 
background:#fff;

.hover{
    text-decoration:none;
&:hover{
    transform:scale(1.051);
    transition:0.2s;
}
}
 `;
export  const ProductWrapper=styled.div`

display:flex;
flex-wrap:wrap;
justify-content:center;
margin:0 auto; 
`;
    

export  const ProdouctsHeading=styled.h1`
font-size:3rem;
text-align:left;
margin:2rem 0 2rem 7.4rem; 
color:#000;
${customMedia.lessThan('smMobile')`
margin:-1rem 0 2rem 1rem; 
`}
`; 
export  const Prodouctstext=styled.p`
font-size:1rem;
text-align:left;
margin:.2rem 0 0 0.4rem; 
color:#000;
font-family:math;
`; 

export  const Productcard=styled.div`
margin:0 1rem 2rem 1rem;
line-height:2;
width:300px;
height:${props=>(props.productcard?'300px':null)};
border:1px solid lightblue;
border-radius:20px 20px 16px 16px;
`;
    
export  const Productimg=styled.img`
height:${props=>(props.secondary?'300px':'177px')};
min-height:177px;
width:100%;
border-radius:${props=>(props.secondary?'20px 20px 20px 20px':'20px 20px 0 0')};
`;
 
export  const Productinfo=styled.div`
display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;-
    padding:2rem;
    text-align:center;
`;
export  const ProductTitle=styled.h1`
font-weight:400;
justify-content:center;
align-items:center;
text-align:center; 
Color:#000;
opacity: 1;
margin-top:${props=>(props.producttitle?'-4rem':null)} ;
color:${props=>(props.producttitle?'#fff':'#000')};
font-size:${props=>(props.producttitle?'2rem':'1.5rem')} ;
}

`;
    

export  const Productprice=styled.p`
color:#000;
margin-bottom:1rem`;
    
export  const Productbutton=styled.button`
justify-content:center;
align-self:center;
width:200px;
height:54px;
color:#000;
font-size:17.1px;
letter-spacing:2px;
text-transform:uppercase;
transition:0.5s ease-out;
border:none;
cursor: pointer;
  background:var(--main-red);
  &:hover{
    background:var(--main-deep-red);
    transition:0.5s ease-out;
    letter-spacing:6px;
  }`

