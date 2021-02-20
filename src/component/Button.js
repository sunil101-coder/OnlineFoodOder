import styled from 'styled-components'
const Button =styled.button`
align-self:center;
width:200px;
height:54px;
text-align:center;
margin:${props=>(props.itembtn?'-2rem 0 0 0':'50px 0 0 0')};  
color:#fff;
font-size:17.1px;
letter-spacing:2px;
text-transform:uppercase;
transition:0.5s;
border:none;
cursor: pointer;
  background:var(--main-red);
  &:hover{
    background:${props=>(props.itembtn?'#2E8B57':'var(--main-deep-red)')};
    letter-spacing:6px;
  }`
export default Button