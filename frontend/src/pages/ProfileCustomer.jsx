import React from 'react'
import styled from 'styled-components'

//components
import Profile from '../components/Profile'
import Message from '../components/Message'
import Notification from '../components/Notification'

const Container = styled.div`
width: 95vw;
display: flex;
margin-top: 40px;
justify-content: center;
`
const Wrapper = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`
const Navigation = styled.div`
display:flex;
justify-content: space-evenly;
z-index: 1000;
`

const MessageAndNotification = styled.div`
margin-top: 25px;
display: flex;
`
const CreatePostButton = styled.p`
border: 1px solid black;
background: transparent;
border-radius: 10px;
padding: 5px;
width: 10%;
margin-top:20px;
margin-left: 400px;

`



function ProfileCustomer() {
  return (
    <Container>
    <Wrapper>
      <Navigation>
       <Profile/>
        <MessageAndNotification>
          <Message/>
          <Notification/>
        </MessageAndNotification>
      </Navigation>
  
    </Wrapper> 
    
   </Container>    

  )
}

export default ProfileCustomer