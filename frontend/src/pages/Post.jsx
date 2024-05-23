import React from 'react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
width: 95vw;
height: 95vh;
display flex;
justify-content: center;
`
const Wrapper = styled.div``

const TopNavi = styled.div`
width: 50vw;
display:flex;
justify-content: space-between;
align-items: center;
`

const Heading = styled.h3`
`

const ButtonWrapper=styled.div``

const BackButton = styled.a`
padding: 3px 15px;
border: 2px solid black;
display: flex;
align-items: center;
border-radius: 11px;
cursor: pointer;
font-weight: bold;
font-size: 13px;
`

const InputContainer = styled.form`
width: 100%;
display:flex;
justify-content: center;
flex-direction: column;
`

const Input = styled.input`
width: 400px;
height: 20px;
margin-top: 15px;
border: 1px solid black;
`

const FileInput = styled.input`
width: 350px;
height: 50px;
padding: 10px;
margin-top: 15px;
border: 1px solid black;

`

const Text = styled.textarea`
width: 400px;
height: 200px;
margin-top: 15px;
border: 1px solid black;
font-family: san serif
`

const Button = styled.button`
width: 100px;
padding: 5px 5px;
margin: 30px 50px;
background: transparent;
border-radius: 13px;
font-weight: bolder;
cursor: pointer;
`


function Post() {
   
const handleSubmit = async(e)=>{
  e.preventDefault()
  axios({
    method:'post',
    url:'http://localhost:5000/api/v1/createpost',
    data:{
      Name, Description, Location, Contact, Image, user_id
    }
  })
}

  const [Name, setName] = useState('')
  const [Description, setDescription] = useState('')
  const [Location, setLocation] = useState('')
  const [Contact, setContact] = useState('')
  const [Image, setImage] = useState('')
  const user_id = localStorage.getItem('user_id')


  return (
    <Container>
      <Wrapper>
         <TopNavi>
          <Heading>Creat post</Heading>
          <ButtonWrapper>
            <BackButton>back</BackButton>
          </ButtonWrapper>
         </TopNavi>

         <InputContainer onSubmit={handleSubmit}>
           <Input placeholder='Name' onChange={(e)=>setName(e.target.value)}></Input>
           <Text placeholder='Description' onChange={(e)=>setDescription(e.target.value)}/>
           <Input placeholder='Location' onChange={(e)=>setLocation(e.target.value)}></Input>
           <Input placeholder='Contact'onChange={(e)=>setContact(e.target.value)}></Input>
           <FileInput placeholder='Images' type="file"  accept="image/png, image/jpeg" onChange={(e)=>setImage(e.target.value)}></FileInput>
           <Button>Post</Button>
         </InputContainer>
      </Wrapper>
    </Container>
  )
}

export default Post