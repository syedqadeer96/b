import React, { useState, useEffect } from "react";
import axios from "axios";
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, TextField } from "@mui/material";
import Grid from '@mui/material/Grid';
import CardProps from "../../../CardProps";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';


import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { buffer } from "stream/consumers";



const MyCard = ({...props}:CardProps) => {
  
         return(
          <Card  sx={{ height:466,width:284 }}>
            
              <CardMedia
                component="img"
                height="
                  294.1px"
                width='100%'
                image={props.image}
                alt="green iguana"
    
              />
    
<CardContent>

<Typography variant="subtitle1"> {props.title}</Typography>
            
              <Typography variant="body1" sx={{marginBottom:2}}>{props.author}</Typography>
              <Stack direction='row'>
              <AccessTimeIcon sx={{fontSize:'1rem'}}></AccessTimeIcon>
         
              <Typography variant="caption" display="block" gutterBottom>{props.time}</Typography>
              
             {(  () => {
                 if (props.reads){
                     return(
                         <>
                        <PersonOutlineOutlinedIcon  sx={{fontSize:'1rem',marginLeft:9}}></PersonOutlineOutlinedIcon>
                        <Typography variant="caption" display="block" gutterBottom>{props.reads}</Typography>
                        </>
                     )
                 }
             }

             )()

             } 
         </Stack>
          
 </CardContent>
            
       {props.bu} 
       {props.bo} 
        
      </Card>
  );
};
export default MyCard;
