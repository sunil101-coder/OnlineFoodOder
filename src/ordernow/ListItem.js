import React ,{useState}from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import '../css/Listitem.css'
import Frenchfries from '../Icon/Frenchfries.png'
import Pizza from '../Icon/Pizza.png'
import Fastfood from '../Icon/Fastfood.png'
import Icecream from '../Icon/Icecream.png'
import Friedchicken from '../Icon/Friedchicken.png'

const ListItem = () => {
    const [nav ,setnav]=useState(false);
    const fixednavbar=()=>{
        if(window.scrollY>300)
        {
            setnav(true);
        }
        else{
            setnav(false);

        }
    }
    window.addEventListener('scroll',fixednavbar);

    return (
        <IconList className={nav?'icon-top-active':null}>
            <div className="icon">
                <NavLink to="">
                <Icon src={Frenchfries} alt='...'/>
                </NavLink>
                
            </div>
            <div className="icon">
            <NavLink to="">
            <Icon src={Pizza} alt='...'/>    
                    </NavLink>
                
            </div>
            <div className="icon">
            <NavLink to="">
            <Icon src={Fastfood} alt='...'/>    
                    </NavLink>
                
            </div>
            <div className="icon">
            <NavLink to="">
            <Icon src={Icecream} alt='...'/>     
                    </NavLink>
               
            </div>
            <div className="icon">
            <NavLink to="">
            <Icon src={Friedchicken} alt='...'/>    
                    </NavLink>
                
            </div>

        </IconList>
    )
}

export default ListItem
const IconList=styled.div`
height: 4rem;
width: 100%;
background: white;
display:flex;
flex-direction:row;
margin: 1rem 0 1rem 0;
bottom:0;
top:3rem;
color:black;
padding: 5px 2px 4px 13px;
.icon{
    justify-content:center;
    text-align:center;
    align-content:center;
    margin:0.5rem 0 0 0;
    width:18%;

}
`;
const Icon=styled.img`
width:51px;
padding:5px 5px 5px 8px;
`;