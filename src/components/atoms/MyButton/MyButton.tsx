import { Button, ButtonProps } from '@mui/material'
import React from 'react'
import { ReactNode } from 'react';
interface Bp extends ButtonProps{
 
}
const MyButton=(props:Bp)=> {
  return (
    <>
    <Button color={props.color} variant={props.variant} fullWidth={true} onClick={props.onClick}>{props.children}</Button>
    </>
  )
}

export default MyButton