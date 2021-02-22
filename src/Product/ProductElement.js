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
display:contents;
.hover{
    text-decoration:none;
&:hover{
    transform:scale(1.051);
    transition:0.2s;
}
}
 `;
export  const ProductWrapper=styled.div`

display:grid;
flex-wrap:wrap;
justify-content:center;
margin:0 5rem 0 5rem;
grid-template-columns:repeat(4,1fr); 
${customMedia.lessThan('tablet')`
margin:2rem 0rem 0 1.5rem; 
grid-template-columns:repeat(2,1fr);
`}
${customMedia.lessThan('smMobile')`
margin:1rem 0rem 0 -0.5rem; 
grid-template-columns:repeat(2,1fr);
`}

`;
    

export  const ProdouctsHeading=styled.h1`
font-size:3rem;
text-align:left;
margin:2rem 0 2rem 7.4rem; 
font-weight:500;
color:#000;
${customMedia.lessThan('smMobile')`
margin:0 0 2rem 1rem; 
`}
`; 
export  const Prodouctstext=styled.p`
font-size:1rem;
text-align:left;
font-weight:300;
margin:.2rem 0 0 0.4rem; 
color:rgba(54,54,54,54);
line-height:1.4;
font-family:math;
`; 

export  const Productcard=styled.div`
margin:1rem 1rem 2rem 1rem;
line-height:2;
width:250px;
height:${props=>(props.productcard?'260px':null)};
border:1px solid lightblue;
border-radius:20px 20px 16px 16px;
${customMedia.lessThan('smMobile')`
width:167px;
height:${props=>(props.productcard?'180px':'179px')};
margin:1rem 0 1rem 1rem;

`
}

`;
    
export  const Productimg=styled.img`
height:${props=>(props.secondary?'260px':'177px')};
width:100%;
border-radius:${props=>(props.secondary?'20px 20px 20px 20px':'20px 20px 0 0')};
${
  customMedia.lessThan('smMobile')`
  height:${props=>(props.secondary?'200px':'130px')};
  width:100%;

`}

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
${customMedia.lessThan('smMobile')`
font-size:1rem;
`}

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

