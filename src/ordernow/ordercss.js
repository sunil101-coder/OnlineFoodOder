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
    padding:6px;
   
}
.profile{
    color:black;
    margin:1rem 0 0 0;
    padding:6px;
    float:right;
    transform:translate(-4rem,0);
    ${customMedia.lessThan('smMobile')`
    transform: translate(-2rem, 0px);
   
    `};

   
}
.searchicon{
    position:absolute;
margin:17rem 0 0  35.5rem;
width:8%;
justify-content:center;
border-radius:0rem 1rem 1rem 0rem     ;
background:transparent;
height:4rem;
border:2px solid white;

border-left:0px;
border-right:2px solid white;
outline:none;
${customMedia.lessThan('mdDesktop')`
margin:17rem 0 0  28rem;

`};
${customMedia.lessThan('tablet')`
margin:17rem 0 0  20rem;

`};

${customMedia.lessThan('smMobile')`
margin:17rem 0 0  2rem;
right:1rem;
width:4rem;

`}


}
span{
    vertical-align:sub;

}
.Seemorebtn{
   justify-content:center;
    align-conte nt:center;
    text-align:center;
    margin-left:-6rem;
    ${customMedia.lessThan('smMobile')`
    
    `};
}
.showdata::before{
    content:'See Less';
}
.showdata::before {
    content:'See Less';

}
.showdata::after{
    content:'';
}
.showhide::before{
    content:'See More';
}
.showhide::after{
    content:'';
} 

`
;
export const Topbar=styled.div`
width:100%;
height:4rem;
z-index:1;
position:fixed;
background:white;
top:0;
border-bottom:1px solid #e8e8e8;
`;export const Content =styled.div`
height:100%;

`;
export const Searchbox=styled.div`

width:100%;
position:relative;
display:flex;
justify-content:center;
align-content:center;
text-align:center;
    `;
export const Searchbar=styled.input`
position:absolute;
font-size:3rem;

margin:17rem 0 0  0rem;
width:36%;
justify-content:center;
text-align:center;
align-content:center;
border-radius:1rem 0rem 0rem 1rem;
background:transparent;

border:2px  solid white;
border-right:0px;
height:4rem;
outline:none;
&placehoder{
    color:black;
}
${customMedia.lessThan('smMobile')`
width:67%;
font-size:3rem;
margin-left:-1rem
`}

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
grid-template-columns:repeat${props=>(props.row1?"(6,1fr)":"(4,1fr)")}; 
${customMedia.lessThan('mdDesktop')`
grid-template-columns:repeat${props=>(props.row1?"(3,1fr)":"(4,1fr)")}; 
margin:0 5rem 0 5rem;

`};

${customMedia.lessThan('tablet')`
margin:2rem 0rem 0 1.5rem; 
grid-template-columns:repeat(3,1fr);
`}
${customMedia.lessThan('smMobile')`
margin:1rem 2rem 0 1.1rem; 
grid-template-columns:repeat(2,1fr);
`}`;

export const Title=styled.h1`
font-size:1.5rem;
font-weight:100;
color:black;
margin-left:1rem;
font-family:cursive;`;
export  const Productcard=styled.div`
margin:1rem 1rem 2rem 1rem;
line-height:2;
width:${props=>(props.row1card?'180px':'250px')};
.filtercardshow{
    display:block;
}
.filtercardhide{
    display:none;
}
height:${props=>(props.productcard?'260px':null)};
border:1px solid lightblue;
border-radius:20px 20px 16px 16px;
${customMedia.lessThan('mdDesktop')`
width:${props=>(props.row1card?'250px':'250px')};

`};
${customMedia.lessThan('tablet')`
width:${props=>(props.row1card?'215px':'250px')};

`};
${customMedia.lessThan('smMobile')`
width:150px;
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
export const Image=styled.img`
margin:4rem 0 0 0;
width:100%;
height:340px;
object-fit:cover    `;