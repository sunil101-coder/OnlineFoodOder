import React from 'react'
import styled from 'styled-components'
import {RemovedEl,Filter} from './orderdata'
import { generateMedia } from "styled-media-query" 
import '../css/Listitem.css'

const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });

const Popularitem = () => {
    return (
        <Popularcontainer>
        <Title>Popular Food</Title>
        <FoodWrapper>
            <Fooditem className="popularfooditem">
            {
                    RemovedEl.map((data, index) => {
                        return ( 
                   
                        <Productcard className="popularfoodcard" >
                                <Productimg src={data.image} class="card-img-top" alt="..." />

                                <div class="card-body">
                        <ProductTitle class="card-title" item-title>{data.Title}</ProductTitle>
                                </div>
                            </Productcard>
                        )}
                    )}
                    
              </Fooditem>     
             </FoodWrapper>
        </Popularcontainer>
    )
}

export default Popularitem
const Popularcontainer=styled.div`
height:5rem;
`;
 const Title=styled.h1`
font-size:1.2rem;
font-family:cursive;
color:black;
margin-left:1rem;`;
 const FoodWrapper =styled.div`
height:15rem;

`;
const Fooditem=styled.div`
${customMedia.lessThan('tablet')`
    max-height:278px;
   
`}
`;

 const Productcard=styled.div`
margin:1rem 1rem 2rem 1rem;
line-height:2;
width:250px;
max-height:260px;
border:1px solid lightblue;
border-radius:20px 20px 16px 16px;
${customMedia.lessThan('mdDesktop')`
margin:0rem 0rem 2rem 2rem;   
min-width:217px;
height:244px;
`};
${customMedia.lessThan('tablet')`
margin:0rem 0rem 2rem 2rem;   
min-width:217px;
height:244px;
`}
${customMedia.lessThan('smMobile')`
min-width:156px;
height:140px;
margin:0rem 0 1rem 1rem;

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