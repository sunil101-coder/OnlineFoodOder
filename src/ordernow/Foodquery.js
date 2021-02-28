import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query" 
import Displaycard from './Displaycard'
import Querycard from './Querycard'


const Foodquery = ({isloading,search}) => {

    return isloading ?(
        
        <Maincontainer>
        { search.map((search,index) => 
           (
        
        <Querycard   search={search} id={index}/>
                    
    
    )
        )
}
            
        </Maincontainer>
    
    ):<Displaycard/>
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
width:95%;
height:88vw;
background:white;
display:grid;
flex-wrap:wrap;
justify-content:center;
margin:0 5rem  1rem 4rem;
grid-template-columns:repeat(4,1fr); 
${customMedia.lessThan('mdDesktop')`
grid-template-columns:repeat(3,1fr); 
height:100rem;
width:90%;

margin:0 5rem 0 3rem;

`};

${customMedia.lessThan('tablet')`
height:86rem;

margin:2rem 0rem 0 1.5rem; 
grid-template-columns:repeat(3,1fr);
`}
${customMedia.lessThan('smMobile')`
height:100%;
margin:1rem 2rem 0 1.1rem; 
grid-template-columns:repeat(2,1fr);
`}`;

