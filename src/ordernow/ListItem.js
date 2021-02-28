import React ,{useState}from 'react'
import styled from 'styled-components'
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
                <Icon src={Frenchfries} alt='...'/>
            </div>
            <div className="icon">
                <Icon src={Pizza} alt='...'/>
            </div>
            <div className="icon">
                <Icon src={Fastfood} alt='...'/>
            </div>
            <div className="icon">
                <Icon src={Icecream} alt='...'/>
            </div><div className="icon">
                <Icon src={Friedchicken} alt='...'/>
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