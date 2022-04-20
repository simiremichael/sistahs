import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const StyledBox = styled(Box)`
width: 100%;
height: 170px;
`
const StyledContainer = styled(Container)`

`
const StyledCard = styled(Card)`
justify-content: start;
margin:  10px 16% 0;
padding: 20px 3% 20px 6%;
border-radius: 15px;
z-index: 1px;
position: absolute;
`
const ImgContainer = styled.div`
display: flex;
justify-content: start;
`
const Svg = styled.svg`
width: 35px;
fill: #af8451;
`
const P = styled.p`
text-align: start;
font-family:  monospace;
font-size: 1rem;
`
const Div = styled.div`
display: flex;
`
const Img = styled.img`
width: 70px;
height: 70px;
border-radius: 50%;
`
const LeftContainer = styled.div`
margin-top: 0;
`
const H6 = styled.h6`
margin-top: 10px;
text-align: start;
font-family: serif;
font-size: 1rem;
`
const Pi = styled.p`
text-align: start;
margin-top: -30px;
font-size: 0.7rem;
`

const BottomCard = () => {
  return (
    <StyledBox>
     <StyledContainer>
    <StyledCard>
    <ImgContainer>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M96 224C84.72 224 74.05 226.3 64 229.9V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32S145.7 96 128 96C57.42 96 0 153.4 0 224v96c0 53.02 42.98 96 96 96s96-42.98 96-96S149 224 96 224zM352 224c-11.28 0-21.95 2.305-32 5.879V224c0-35.3 28.7-64 64-64c17.67 0 32-14.33 32-32s-14.33-32-32-32c-70.58 0-128 57.42-128 128v96c0 53.02 42.98 96 96 96s96-42.98 96-96S405 224 352 224z"/></Svg>
    </ImgContainer>
    <P>Success is liking yourself, liking what you do, and liking how you do it. "</P>
    <Div>
    <Img src="../images/img3.jpg" />
    <LeftContainer>
      <H6>Mata Angela</H6>
      <Pi>American poet, civil rights activist</Pi>  
    </LeftContainer>
    </Div>
    </StyledCard>
    </StyledContainer>   
    </StyledBox>
  )
}

export default BottomCard