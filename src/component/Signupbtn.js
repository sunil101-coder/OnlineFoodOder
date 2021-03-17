import styled from 'styled-components'
const SignupButton =styled.button`
align-self:center;
width:${props=>(props.close?'11%':'100%')};
height:54px;
text-align:center;
margin:${props=>(props.itembtn?'-2rem 0 0 0':'0 0 0 0')};  
color:#fff;
font-size:17.1px;
letter-spacing:2px;
text-transform:uppercase;
transition:0.5s;
border:none;
cursor: pointer;
  background:${props=>(props.google?'var(--main-red)':'green')};
  &:hover{
    background:${props=>(props.itembtn?'#2E8B57':'var(--main-deep-red)')};
    letter-spacing:6px;
  }
  float:${props=>(props.close?'right':null)};
`

export default SignupButton