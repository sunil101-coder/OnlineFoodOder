import React from 'react'
import styled from 'styled-components'
import {RiFootprintFill} from 'react-icons/ri/index'
import {AiOutlineShopping} from 'react-icons/ai/index'
const Icontab = () => {
    return (
        <Iconbar className="iconbar">
                <div className="icon">
                <AiOutlineShopping size={25}/>
                <br/>
                Delivery
                </div>
                <div className="icon">
                <RiFootprintFill size={25}/>
                <br/>
                Take Away
                </div>
                
                
            </Iconbar>
      
      
    )
}

export default Icontab

const Iconbar=styled.div`
position: fixed;
height: 4rem;
width: 100%;
background: white;
display:flex;
flex-direction:row;
margin: -15rem 0 0 0;
border-top:1px solid #e8e8e8;
bottom:0;
color:black;
.icon{
    justify-content:center;
    text-align:center;
    align-content:center;
    margin:0.5rem 0 0 0;
    width:50%;

}

`;
