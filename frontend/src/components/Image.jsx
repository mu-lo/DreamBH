import React from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
background-color: #bbb;
 height: 400px;
 width: 500px;
 margin-left: 25px;
`

const Pictures = styled.image`

`

function Picture() {
  return (
    <ImageContainer>
        <Pictures>2</Pictures>
    </ImageContainer>
  )
}

export default Picture