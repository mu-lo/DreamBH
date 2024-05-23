import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import styled from 'styled-components';

const Icon = styled.div`
 margin-left: 30px;
`

function Notification() {
  return (
    <Icon>
       <NotificationsNoneIcon />
    </Icon>
     
  )
}

export default Notification