import React from 'react'
import styled from 'styled-components'
import { generateMedia } from "styled-media-query"
import {Link } from 'react-router-dom'
import Background from '../images/642067.jpg'
import Button from '../component/Button'
const Item = ({ data1 }) => {
    return (
        <Item2Container  >
            <Item2wrapper>
                <Item2heading>
                    Deal of The Day
                    <br/>
                    <span className="span"></span>
                    <br/>
                    <Link to="/">
                    <Button itembtn>
                        Order Now
                </Button>
                    </Link>
                    
                </Item2heading>
                
            </Item2wrapper>
        </Item2Container>
    )
}

export default Item


const Item2Container=styled.div`
width:100%;

position:relative;
background: radial-gradient(rgba(0,0,0,0),rgba(0,0,0,0.7)),
    url(${Background})no-repeat center center/cover;
    background-attachment:fixed;
opacity:.85;
`;
const Item2wrapper=styled.div`
margin:0 0 0 0;`;
const Item2heading=styled.h1`
text-align:center;
justify-content:center;
align-content:center;
font-weight:300;
font-size:5rem;
color:#fff;
.span:before{
    content:'Burgur';
    color:red;
    animation:animate infinite  8s;
}

@keyframes animate{
    20%{
        content:'Pizza';
        color:#FF4500;
    }
    40%{
        content:'Icecream';
        color:#FF8C00;
    }
    60%{
        content:'Chicken Roll';
        color:#FFD700;
    }
    80%{
        content:'Combo';
    }
    100%{
        
    }
}
a{
    top:-2rem;
    position:relative;
}
`

;