import {React, useState} from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Container = styled.div`
height: 95vh;
width: 95vw;
display: flex;
align-items: center;
justify-content: center;
`

const Wrapper = styled.div`
`

const Header = styled.div`
line-height: 10px;
`
const MainHeading= styled.h1`
display: flex;
width: 100%;
justify-content: center;
`

const SecondHeading = styled.h5`
display: flex;
width: 100%;
justify-content: center;
`
const InputContainer = styled.form`
width: 600px;
height: 200px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

const Input = styled.input`
margin-top: 10px;
height: 20px;
width: 300px;
`

const ButtonContainer = styled.div`
 margin-top: 35px;
 display: flex;
 flex-direction: column;
`

const Button = styled.button`
width: 150px;
height: 25px;
cursor: pointer;

`

const Register = styled.div`
margin-top: 15px;
font-size: 12px;
`
const Ink = styled.a`
cursor: pointer;
text-decoration: underline;
color: blue;
`


function Login() {
  const[Email, setEmail] = useState('')
  const[Password, setPassword] = useState('')
  const Navigate = useNavigate()

 const handleSubmit = (e) =>{
  e.preventDefault();


 try{
 const userInfo = axios({
    method:'post',
    url:'http://localhost:5000/api/v1/Login',
    data:{
       Email, Password
    }
   }).then((response)=>{
     const {_id, ...Others} = response.data;
     console.log(_id); 
     localStorage.setItem('user_id', _id);
     Navigate('/Home')
     
   })
  
  }catch(error){

  }
 }


  return (
    <Container>
      <Wrapper>
        <Header>
         <MainHeading>Find</MainHeading>
         <SecondHeading>Welcome! See intereting events, chill spots and boarding houses near you </SecondHeading>
        </Header>
        <InputContainer onSubmit={handleSubmit}>
           <Input placeholder='username or email' id='username' onChange={(e)=>setEmail(e.target.value)}/>
           <Input placeholder='password' type="password" id='password' onChange={(e)=>setPassword(e.target.value)}/>
          <ButtonContainer>
             <Button> Login </Button>
             <Register> Do not have an account? <Link to={"/Registration"}>Sign up</Link></Register>
          </ButtonContainer> 
        </InputContainer>
      </Wrapper>
    </Container>
  )
}

export default Login