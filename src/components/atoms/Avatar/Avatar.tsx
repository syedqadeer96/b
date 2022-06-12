import React from 'react'
import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { blue } from '@mui/material/colors';

interface Ap extends AvatarProps{
    children?:React.ReactNode
}
const MyAvatar = (props:Ap) => {
  return (
    <Avatar  sx={{ bgcolor: 'blue' }}>A</Avatar>
  )
}

export default MyAvatar