import React from 'react'
import styled from 'styled-components'

const ProfileWrapper = styled.div``


const Container = styled.div`
display: flex;
flex-direction: row;
align-items: center;
cursor: pointer;
`
const UserImage = styled.div`
background-color: #bbb;
 height: 60px;
 width: 60px;
 border-radius: 50%;
`

const UserName = styled.div`
background-color: #bbb;
 height: 20px;
 width: 120px;
 margin-left: 15px;
`

function Profile() {
  return (
    <ProfileWrapper>
      <Container>
       <UserImage/>
       <UserName />
      </Container>
    </ProfileWrapper>
  )
}

export default Profile