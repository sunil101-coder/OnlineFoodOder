import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 


const Querycard = ({search}) => {
    
    return (
      
        <Querycontainer>
             <Queryimg src={search.recipe.image} class="card-img-top" alt="..." />

<div class="card-body">
<QueryTitle class="card-title" item-title>{search.recipe.label}</QueryTitle>
</div>
       

        </Querycontainer>
        
)
}

export default Querycard
const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px" ,
    smMobile: "600px"
  });

    const Querycontainer=styled.div`
    margin:1rem 1rem 2rem 0rem;
line-height:2;
width:250px;
.filtercardshow{
    display:block;
}
.filtercardhide{
    display:none;
}
height:260px;
${customMedia.lessThan('mdDesktop')`
width:250px;
margin:1rem 1rem 4rem 0rem;

`};
${customMedia.lessThan('tablet')`
width:200px;
margin:0rem 1rem 0rem 0rem;
`};
${customMedia.lessThan('smMobile')`
width:150px;
height:180px;
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
height:260px;
width:100%;
object-fit:fill;
border-radius:50%;
${
  customMedia.lessThan('tablet')`
  height:200px
  `}

${
  customMedia.lessThan('smMobile')`
  height:200px
 `}

`; 
const QueryTitle=styled.h1`
font-weight:400;
justify-content:center;
align-items:center;
text-align:center; 
Color:#000;
opacity: 1;
margin-top:1rem ;
color:#000;
font-size:1rem ;
${customMedia.lessThan('smMobile')`
font-size:1rem;
`}

}

`;
