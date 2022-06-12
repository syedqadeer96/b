
  
import React from 'react';
import MyButton from './MyButton';


export default{
    title: 'components/atoms/ButtonComponent',
    component: MyButton
}

export const Primary = ()=><MyButton variant="text" color='primary'>Finished</MyButton>
export const Secondary = ()=><MyButton variant='contained' color='primary'>AddToLibrary</MyButton>
export const Success = ()=><MyButton variant='contained' color='success'>success</MyButton>