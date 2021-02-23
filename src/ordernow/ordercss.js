import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });

export const Ordercotainer=styled.div`
background:white;
width:100%;
height:100%;
.left-arrow{
    color:black;
    margin:1rem 0 0 1rem;
    
   
} span{
    vertical-align:sub;
}`
;
export const Topbar=styled.div`
width:100%;
height:4rem;
z-index:1;
position:fixed;
background:white;
top:0;
border-bottom:1px solid #e8e8e8
`;export const Content =styled.div`
height:50rem;

`;export const Searchbar=styled.input`
margin:6rem 0 0  1rem;
width:92%;
justify-content:center;
border-radius:2.4rem;
height:4rem;
outline:none;
`;
export const Foodlist=styled.div`
margin:1rem 0 0 0rem;
width:100%;
height:100%;
background:white;
`;
export const Foodcard=styled.div`
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
margin:1rem 2rem 0 1.1rem; 
grid-template-columns:repeat(3,1fr);
`}`;

export const Title=styled.h1`
font-size:1rem;
font-weight:100;
color:black;
margin-left:1rem;`;
export  const Productcard=styled.div`
margin:1rem 1rem 2rem 1rem;
line-height:2;
width:250px;
.filtercardshow{
    display:block;
}
.filtercardhide{
    display:none;
}
height:${props=>(props.productcard?'260px':null)};
border:1px solid lightblue;
border-radius:20px 20px 16px 16px;
${customMedia.lessThan('smMobile')`
width:100px;
height:${props=>(props.productcard?'180px':'140px')};
margin:0rem 0 1rem 1rem;
.filtercardshow{
    display:block;
}
.filtercardhide{
    display:none;
}

`
}

`;
    
export  const Productimg=styled.img`
height:${props=>(props.secondary?'260px':'177px')};
width:100%;
border-radius:${props=>(props.secondary?'20px 20px 20px 20px':'20px 20px 0 0')};
${
  customMedia.lessThan('smMobile')`
  height:${props=>(props.secondary?'200px':'94px')};
  width:100%;
  object-fit:cover;


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

export const Button=styled.button`
width:auto;
justify-content:center;
align-content:center;
height:2rem;
align-self:center;
width:200px;
height:54px;
margin:0.8rem 0 0 5rem;
box-shadow:3px 6px 17px 19px #e8e8e8;
font-size:1rem;
border:none;
outline:none;

`;