import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const StyledBox = styled(Box)`
width: 100%;
height: auto;
`
const StyledContainer = styled(Container)`

`
const TopContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 10px 8.5%;
@media only screen and (max-width: 980px) {
    flex-direction: column;
    justify-content: center;
    margin: 5%;
    }
`
const H1 = styled.h1`
text-align: start;
margin-bottom: 0;
font-size: 2.8vmax;
font-family: serif;
@media only screen and (max-width: 980px) {
    text-align:  center;
    margin: 5%;
    }
`
const LeftContainer = styled.div`
display: flex;
align-items: end;
font-size: 3vmax;
@media only screen and (max-width: 980px) {
    justify-content: center;
    }
`
const Group1 = styled.div`
background: #000000;
color: #ffffff;
width: 120px;
padding: 8px;
border-radius: 25px;
font-size: 0.8rem;
margin-right: 8px;
`
const Group2 = styled.div`
border: 1px solid #af8451;
color:  #af8451;
width: 120px;
padding: 8px;
margin-left: 8px;
border-radius: 25px;
font-size: 0.8rem;
`
const StyledCard = styled(Card)`
width: 300px;
height: 210px;
margin: 15px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
`
const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const TopCardContainer = styled.div`

`
const Img = styled.img`
width: 25%;
height: 4rem;
`
const H3 = styled.h3`
text-align: start;
font-size: 1.1rem;
margin-top: 8px;
margin: 10px 15px;
`
const Svg = styled.svg`
width:7px;
fill: #98e6f6;
margin-right: 5px;
`
const H6 = styled.h6`
text-align: start;
color: #98e6f6;
margin-top: -10px;
margin: 10px 15px;
`
const P = styled.p`
text-align: start;
color: gray;
font-size: 0.7rem;
margin: 10px 15px;
`
const ShowMoreContainer = styled(Container)`
display: flex;
   justify-content: center;
cursor: pointer;
`
const SvgIcon = styled.svg`
width: 10px;
margin-left: 10px;
`
const Join = styled.h6`
text-align: start;
color: #af8451;
margin-left: 20px;
`

const ThirdCard = () => {
  return (
    <StyledBox>
     <StyledContainer>
      <TopContainer>
      <H1>Boost Your Business <br/> With Collaboration Groups</H1>
      <LeftContainer>
          <Group1>your groups</Group1>
          <Group2>Starting soon</Group2>
      </LeftContainer>
      </TopContainer> 
      <CardContainer>
      <StyledCard>
      <TopCardContainer>
       <Img src='../images/img1.jpg' />   
       <Img src='../images/img2.jpg' />  
       <Img src='../images/img3.jpg' />  
       <Img src='../images/img4.jpg' />  
      </TopCardContainer>
      <H3>Lead Generation</H3>
      
      <H6><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></Svg>Virtual</H6>
      <P>Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a spacific area related to your goalss.</P> 
      </StyledCard>
      <StyledCard>
      <TopCardContainer>
       <Img src='../images/img1.jpg' />   
       <Img src='../images/img2.jpg' />  
       <Img src='../images/img3.jpg' />  
       <Img src='../images/img4.jpg' />  
      </TopCardContainer>
      <H3>Lead Generation</H3>
      
      <H6><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></Svg>Virtual</H6>
      <P>Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a spacific area related to your goalss.</P> 
      </StyledCard>
      <StyledCard>
      <TopCardContainer>
       <Img src='../images/img1.jpg' />   
       <Img src='../images/img2.jpg' />  
       <Img src='../images/img3.jpg' />  
       <Img src='../images/img4.jpg' />  
      </TopCardContainer>
      <H3>Lead Generation</H3>
      <H6><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2H168.3zM192 256C227.3 256 256 227.3 256 192C256 156.7 227.3 128 192 128C156.7 128 128 156.7 128 192C128 227.3 156.7 256 192 256z"/></Svg>Virtual</H6>
      <P>Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a spacific area related to your goalss.</P> 
      </StyledCard>
      </CardContainer>
     </StyledContainer>
     <ShowMoreContainer> 
    <Join>JOIN A GROUP</Join>
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></SvgIcon>
  </ShowMoreContainer>
    </StyledBox>
  )
}

export default ThirdCard