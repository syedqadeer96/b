import React, { useEffect, useState } from 'react'
import { Button, Container, Grid, Stack, Typography } from '@mui/material';

import axios from 'axios';
import { Box } from '@mui/system';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import { useLocation,useNavigate } from "react-router-dom";

import CardProps from '../../CardProps';
import Footer from "../molecules/Footer/Footer";
import LibTab from '../organisms/LibTab/LibTab';
const BookDetailViewPage = () => {

  const location = useLocation();
  const index: any = location.state;
  const navigate = useNavigate()
  const [APIData, setApiData] = useState<CardProps>({})
  const getData = async () => {
    const cards = await axios.get(` http://localhost:8007/books/${index.id}`);
    setApiData(cards.data);

    console.log(cards.data)

  }
  useEffect(() => { getData() });

  const finishedHandleClick = async (_clickedCard: CardProps) => {
    //console.log(cards.id)
    await axios.patch(`http://localhost:8007/books/${index.id}`, { state: 'Finished' })
    navigate('/')
  }
  const readNowHandleClick = async (_clickedCard: CardProps) => {
    //console.log(cards.id)
    await axios.patch(`http://localhost:8007/books/${index.id}`, { state: 'added to lib' })
    navigate('/')
  }
  
return (
    <Container>

      <Grid container spacing={2} key={APIData.id}>
        <Grid item xs={8}>
          <Stack spacing={2}>
            <Typography variant='h4'>
              {APIData.title}
            </Typography>
            <Typography variant='subtitle1'>
              Turning Your Business into an Enduring Great Company
            </Typography>
            <Typography variant='body1'>
              {APIData.author}
            </Typography>
            <Stack direction="row" spacing={1}>
              <AccessTimeOutlinedIcon></AccessTimeOutlinedIcon>
              <Typography variant='body2'>
                {APIData.time}
              </Typography>
            </Stack>
          </Stack>
          <Stack spacing={7} direction="row" sx={{ marginTop: 12 }}>
            <Button variant="outlined" sx={{ color: '#22C870' }} 
            onClick={(_event) => readNowHandleClick(APIData)}>
              Read Now
            </Button>
            <Button variant="contained"
              sx={{ backgroundColor: '#2CE080', color: '#03314B', ":hover": { bgcolor: "#00C263"}}}
              onClick={(_event) => finishedHandleClick(APIData)}
            >
              Finished Reading
            </Button>
            <Button variant="text" sx={{ color: '#6D787E' }} endIcon={<ArrowRightAltIcon />}>
              Send to Kindle
            </Button>

          </Stack>

          <Box sx={{ marginTop: 6 }}>
          <LibTab></LibTab>
            </Box>
        </Grid>
        <Grid item xs={4}>
          <Box>
            <img src={APIData.image} alt="" height='304' width='304' />
          </Box>
        </Grid>
     
      </Grid>
<Footer/>
    </Container >
   
  )}

export default BookDetailViewPage