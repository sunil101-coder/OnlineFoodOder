import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 



const Foodquery = ({Title, Image}) => {
    return (
        <div className="Querycontainer">
        
            <Querycard row1card >
                    <Queryimg src={Image} class="card-img-top" alt="..." />

                    <div class="card-body">
            <QueryTitle class="card-title" item-title>{Title}</QueryTitle>
                    </div>
                </Querycard>
            
            
        </div>
    
    )
}

export default Foodquery
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px" ,
    smMobile: "600px"
  });

  export const Maincontainer=styled.div`
margin:1rem 0 0 0rem;
width:100%;
height:100%;
background:white;
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

 const Querycard=styled.div`
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
    
 const Queryimg=styled.img`
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
const QueryTitle=styled.h1`
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
