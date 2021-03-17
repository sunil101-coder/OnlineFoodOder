import React ,{useState,useEffect ,useRef} from 'react'
import styled from 'styled-components';
import { generateMedia } from "styled-media-query" 
import {MdLocationOn} from 'react-icons/md/index'
import { AiOutlineArrowRight } from 'react-icons/ai/index';
import Icontab from '../ordernow/Icontab';

const Locationsearch=()=>{
  const [expand, setexpand] = useState(false);
  const expandit=()=>{
    setexpand({ setexpand: !expand });
        

}
const Clientsecret="_hXpP-1PbdieHnod5ZQn5eFq"
let menuref=useRef()
useEffect(() => {
  document.addEventListener("mousedown",(event)=>{
    if(!menuref.current.contains(event.target))
    {
      setexpand(false);
    }
    
  })
})
    return(
        <Box className={expand?'box':'box1'} ref={menuref}>
            <div className="component">
            <Locationicon>
            <MdLocationOn size="25"/>
            </Locationicon>
             <Search type="text" placeholder="Enter your address" onClick={expandit}/>
            <Button>
            <AiOutlineArrowRight size="25" />
            </Button>
            
            </div>
            {
              expand? 
              <Icontab/>
              :null
            }
            {
              expand? 
              <div>
                lknk
              </div>
              :null
            }
            
            </Box>
    )
}
export default Locationsearch

const customMedia = generateMedia({
    lgdesktop:'1440px',
    mdDesktop:'1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
  });

  const Box= styled.div`
  .box{
    height:5rem;
  
  }
  .box1{
    height:1rem;
  
  }
  width:30rem;
  border:1px solid;
  background:white;
  ${customMedia.lessThan('smMobile')`
      width:14rem;
    `}

    .location-icon{
      margin:1rem 0 0 0;
      }
  .component{   
    height:3rem;
  }
  `;
  const Search=styled.input`
  width:25rem;
  height:3.5rem;
  border:none;
  outline:none;
  position:absolute;
  margin:-2.9rem 0 0 3rem;
  ${customMedia.lessThan('smMobile')`
      width:8rem;
    `}

  `;
  const Locationicon=styled.div`
  color:black;
  height:2rem;
  margin:1.3rem 0 0 1rem;
  text-align:left; 
  

  `;
  const Button =styled.div`
  color:black;
  height:2rem;
  margin:-1.8rem 0 0 0;
  text-align:right;
  `;