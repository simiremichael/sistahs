import React from 'react';
import Box from '@mui/material/Box';
import styled from '@emotion/styled'
import Navbar from '../components/Navbar';
import CardArea from '../components/CardArea';
import SecondCard from '../components/SecondCard';
import ThirdCard from '../components/ThirdCard';
import FourthCard from '../components/FourtCard';
import EventCard from '../components/EventCard';
import Resources from '../components/Resources';
import BottomCard from '../components/BottomCard';
import Footer from '../components/Footer';

const StyledBox = styled(Box)`

`

const Homepage = () => {
  return (
    <StyledBox>
        <Navbar />
        <CardArea />
        <SecondCard />
        <ThirdCard />
        <EventCard />
        <FourthCard />
        <Resources />
        <BottomCard />
        <Footer />
    </StyledBox>
  )
}

export default Homepage