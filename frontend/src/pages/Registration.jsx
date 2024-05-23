import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useEffect, useState,useRef } from 'react'
import axios from 'axios'

const Container= styled.div`
 width: 95vw;
 height: 95vh;
 display: flex;
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
display: flex;
flex-direction: column;
padding: 15px;
`
const Input = styled.input`
width: 300px;
height: 20px;
margin-top: 20px;
`

const Button = styled.button`
padding: 5px;
margin-top: 35px;
`

const Message = styled.div`
 font-size: 12px;
`
const Ink = styled.a`
 cursor: pointer;
 text-decoration: underline;
 color: blue;
`

function Registration() {

const [Name, setName] = useState('')
const [Username, setUsername] = useState('')
const [Phone, setPhone] = useState('')
const [Email, setEmail] = useState('')
const [Password, setPassword] = useState('')

useEffect(()=>{
 
},[])

const handleSubmit = async(e) =>{
  e.preventDefault();
  console.log(Name)
   axios({
    method:'post',
    url:'http://localhost:5000/api/v1/register',
    data:{
      Name, Username, Email, Phone, Password
    }
   })
}

  return (
    <Container>
      <Wrapper>
        <Header>
         <MainHeading>Find</MainHeading>
         <SecondHeading>Welcome, create your account to get started </SecondHeading>
        </Header>

        <InputContainer onSubmit={handleSubmit}>
          <Input placeholder='Name' onChange={(e)=>setName(e.target.value)}></Input>
          <Input placeholder='Username' onChange={(e)=>setUsername(e.target.value)}></Input>
          <Input placeholder='Phone number' onChange={(e)=>setPhone(e.target.value)}></Input>
          <Input placeholder='Email' onChange={(e)=>setEmail(e.target.value)}></Input>
            <Input placeholder='password' type="password" onChange={(e)=>setPassword(e.target.value)}></Input>
          <Input placeholder='confirm password' type="password"></Input>
          <Button>Register</Button>
        </InputContainer>

        <Message>Already have an account <Link to={"/"}>Sign in</Link></Message>
      </Wrapper>
    </Container>
  )
}

export default Registration