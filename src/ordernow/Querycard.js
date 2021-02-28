import React,{useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import '../css/Listitem.css'
import { Link } from 'react-router-dom'
import { generateMedia } from "styled-media-query"
import {AiOutlineMinusCircle,AiOutlinePlusCircle} from 'react-icons/ai/index'


const Querycard = ({ search ,id}) => {
        const [cart, setcart] = useState(false);
    const myRef = useRef();
    const [count, setcount] = useState(1);
    const [cartitem, setcartitem] = useState({id:'',label:'',image:''})
    
    const handleClickOutside = e => {
        if (!myRef.current.contains(e.target)) {
          setcart(false);
          
  
          setcount(1);
        }
      };
      useEffect(() => {
          document.addEventListener("mousedown", handleClickOutside);
          return () => document.removeEventListener("mousedown", handleClickOutside);
          
        }
        );
      
     const cartdisplay=()=>{
     setcart ({ setcart: !cart });
     console.log(id);
     console.log(search.recipe.label);
     console.log(search.recipe.image);
     if(cart)
     {
         setcart(false);
         
     }
     }

    const decrement = () => {
        setcount(count - 1)
        console.log("clicked");

    };
    const incrment = () => {
        setcount(count + 1)
        console.log("clicked");

    };

    const addcartitem=()=>{
        setcartitem(cartitem.id);
        console.log()

    }
    
    return (

        <Querycontainer ref={myRef}>


            <Queryimg src={search.recipe.image} className="card-img" alt="..." onClick={cartdisplay} key={id} />
            <div className="card-body">
                <QueryTitle className="card-title" >{search.recipe.label}</QueryTitle>



            </div>
             {cart?
            <div>
                <div className="cartbtn">
                <AiOutlineMinusCircle className="minus" size={30} onClick={decrement}/>
                <span className="count">{count}</span>
                <AiOutlinePlusCircle className="add"size={30}onClick={incrment}/>
                </div>
               <div className="Cart">
               <button className="addcart" onClick={addcartitem} >Add to Cart</button>

               </div>
                <br/>
                           </div>
                :null
                }
           


        </Querycontainer>




    )
}

export default Querycard
const customMedia = generateMedia({
    lgdesktop: '1440px',
    mdDesktop: '1150px',
    tablet: "960px",
    mobile: "740px",
    smMobile: "600px"
});


const Querycontainer = styled.div`

    margin:1rem 1rem 2rem 0rem;
line-height:2;
width:250px;
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
height:330px;
margin:0rem 0 1rem 1rem;

`
    }
.cartbtn{
    color:black;
    text-align:center;

}
.addcart{
    border:none;
    outline:none;
    background:transparent;
    cursor:pointer;
}
.addcart:hover{
    letter-spacing: 3px;
}

.count{
    vertical-align:text-bottom;
    padding:10px;
}
`;


const Queryimg = styled.img`
height:200px;
width:100%;
object-fit:fill;
border-radius:50%;


${customMedia.lessThan('tablet')`
  height:200px
  `}

${customMedia.lessThan('smMobile')`
  height:200px
 `}

`;
const QueryTitle = styled.h1`
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
