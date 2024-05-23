import React from 'react'
import {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

//components
import Profile from '../components/Profile'
import Message from '../components/Message'
import Notification from '../components/Notification'
import Description from '../components/Description'


//icons
import SearchIcon from '@mui/icons-material/Search';
import Picture from '../components/Image'



const Container = styled.div`
width: 95vw;
display: flex;
margin-top: 40px;
justify-content: center;
`
const Wrapper = styled.div`
width: 100%;
`
const Navigation = styled.div`
display:flex;
justify-content: space-evenly;
z-index: 1000;
`

const SearchInput = styled.form`
width: 300px;
height: 20px;
border: 1px solid black;
border-radius: 15px;
padding: 5px;
font-size: 15px;
display: flex;
align-items: center;
margin-top: 20px;
`

const Submit = styled.button`
background: transparent;
 display: flex;
 justify-content: center;
 align-items: center;
 border: none;
 cursor: pointer;
`

const Input = styled.input`
width: 90%;
height: 20px;
margin-left:15px;
border: none;
:&active{
  border: none;
}
`

const MessageAndNotification = styled.div`
margin-top: 25px;
display: flex;
`

const FilterContainer = styled.div`
line-height: 10px;
`

const FilterHeader = styled.h4`
`
const List = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: center;
`

const Item = styled.button`
background: transparent;
padding: 5px 3px;
margin-top: 10px;
border-radius: 11px;
cursor: pointer;
&:hover{
  background: black;
  color: white;
}
`

const Feed = styled.div`
display: flex;
flex-direction:column;
margin: -140px;
width: 100%;
`

const FeedPost = styled.div`
 display: flex;
 justify-content: center;
 margin-top: 20px;
 margin-left: 80px;
 flex-direction: row;
 align-items: center;
`
const FeedPostInfo = styled.div`
margin-left: 15px;
`


function Home() {

  const [Posts, setPosts] = useState([])
  const [Search, setSearch] = useState('')
  const [Filter, setFilter] = useState('')

  console.log(Posts)
 
  useEffect(()=>{
     axios({
      method: 'get',
      url:'http://www.localhost:5000/api/v1/getposts',
    }).then((res)=>{setPosts(res.data)})},
    [])

  return (
    <Container>
      <Wrapper>
        <Navigation>
         <Profile/>

          <SearchInput>
             <Submit><SearchIcon/></Submit> 
             <Input/>
          </SearchInput> 

          <MessageAndNotification>
            <Message/>
            <Notification/>
          </MessageAndNotification>

          <FilterContainer>
             <FilterHeader>Categories filter</FilterHeader>
             <List>
               <Item>Boarding house</Item>
               <Item>Upcoming events</Item>
               <Item>Chill spots</Item>
               <Item>Promotions</Item>
             </List>
          </FilterContainer>
        </Navigation>

        <Feed>
            {Posts.map((Post, index)=>{
            return(
              <FeedPost>
                 <Picture/>
                 <FeedPostInfo>
                     <Profile/>
                     <Description Post={Post}/>
                  </FeedPostInfo>
              </FeedPost>)}) 
          } 
        </Feed>
         
      </Wrapper>
    </Container>
  )
}

export default Home