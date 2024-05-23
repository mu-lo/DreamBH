import React from 'react'
import styled from 'styled-components'

const DescriptionContainer = styled.div`
margin-left: 10px;
`

const Details = styled.p`
background-color: #bbb;
 height: 200px;
 width: 350px;
`

const Location = styled.div`
background-color: #bbb;
 height: 30px;
 width: 350px;
`

const Contact = styled.div``

function Description({Post}) {
  return (
    <DescriptionContainer key={Post.id}>
        <Details>{Post.Description}</Details>
        <Location>{Post.Location}</Location>
        <Contact>{Post.Contact}</Contact>
    </DescriptionContainer>
  )
}

export default Description
