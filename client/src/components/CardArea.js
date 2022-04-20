import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const StyledBox = styled(Box)`
widht: 100%;
height: 400px;
@media only screen and (max-width: 980px) {
    height: auto;
    }
`
const StyledContainer = styled(Container)`
display: flex;
justify-content: space-around;
flex-wrap: wrap;
padding-top: 50px;

`
const StyledCard1 = styled(Card)`
max-width: 250px;
display: flex;
flex-direction: column;
height: 300px;
justify-content: space-between;
background-image: url("../images/img1.jpg");
background-position: center; 
box-shadow: rgba(195,193,193) 0px 5px 20px;
@media only screen and (max-width: 980px) {
    margin: 15px 0;
    }
`
const StyledCard2 = styled(Card)`
max-width: 250px;
display: flex;
flex-direction: column;
height: 300px;
justify-content: space-between;
background-image: url("../images/img2.jpg");
background-position: center; 
box-shadow: rgba(195,193,193) 0px 2px 20px;
@media only screen and (max-width: 980px) {
    margin: 15px 0;
    }
`
const StyledCard3 = styled(Card)`
width: 250px;
display: flex;
flex-direction: column;
height: 300px;
justify-content: space-between;
background-image: url("../images/img3.jpg");
background-position: center; 
box-shadow: rgba(195,193,193) 0px 2px 20px;
@media only screen and (max-width: 780px) {
    margin: 15px 0;
    }
    @media only screen and (max-width: 980px) {
        margin: 15px 0;
        }
`
const StyledCard4 = styled(Card)`
max-width: 250px;
display: flex;
flex-direction: column;
height: 300px;
justify-content: space-between;
box-shadow: rgba(195,193,193) 0px 10px 20px 2px;
background-image: url("../images/img4.jpg");
background-position: center; 
@media only screen and (max-width: 980px) {
    margin: 15px 0;
    }
`
const H3 = styled.h3`
font-size: 0.5rem;
text-align: start;
background-color: #ddd9d9;
padding: 4px 5px;
width: 27%;
margin: 10px 10px;
border-radius: 50px;
`
const H3i = styled.h3`
font-size: 0.5rem;
text-align: start;
background-color: #ddd9d9;
padding: 4px 5px;
width: 43%;
margin: 10px 10px;
border-radius: 50px;
`
const Div = styled.div`
align-self: end;
margin-bottom: 0;
align-items: end;
height: 50%;
background: #ddd9d9;
opacity: 0.9;
padding: 0 18px;
`
const H4 = styled.h4`
font-size: 0.7rem;
text-align: start;
`
const H1 = styled.h1`
text-align: start;
font-size: 3.8vmin;
font-family: serif;
`
const P = styled.p`
font-size: 0.7rem;
text-align: start;
margin-top: -10px;
color: #545454;
`
const ShowMoreContainer = styled(Container)`
display: flex;
@media only screen and (max-width: 980px) {
   justify-content: center;
}
cursor: pointer;
`
const SvgIcon = styled.svg`
width: 10px;
margin-left: 10px;
`
const H6 = styled.h6`
text-align: start;
color: #af8451;
margin-left: 20px;
`
const CardArea = () => {
  return (
    <StyledBox>
     <StyledContainer>
       <StyledCard1>
      <H3>SAME INDUSTRY</H3>
      <Div>
       <H1>Shequita Hall</H1>
       <H4>Your Soul Sistah</H4>
       <P>She has things common with you. You live in the same city, run a business in the same industry, have similar goals or be at the same business stage.</P>
      </Div>
      </StyledCard1> 
      <StyledCard2>
      <H3i>6 YRS BUSINESS EXPERIENCE</H3i>
      <Div>
       <H1>Ebony Lewis</H1>
       <H4>Your Big Sistah</H4>
       <P>Someone who can share her wisdom, life advice, and resources based on her expertise. She might be your mentor in a spacific area related to your goalss.</P>
      </Div>
      </StyledCard2>
      <StyledCard3>
      <H3>1 YR IN BUSINESS</H3>
      <Div>
       <H1>Jasmine Walker</H1>
       <H4>Your Little Sis</H4>
       <P>Someone who remind you how much you've learned by giving you the opportunity to mentor them.</P>
      </Div>
      </StyledCard3>
      <StyledCard4>
      <H3>LIVES IN BERLIN</H3>
      <Div>
       <H1>Tiana King</H1>
       <H4>Your Wild Card</H4>
       <P>Someone who has a business or bakground that is wildly different from your own, but she can provide a fresh perspective to your challenges.</P>
      </Div>
      </StyledCard4> 
     </StyledContainer>
     <ShowMoreContainer> 
    <H6>VIEW ALL MEMBERS</H6>
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></SvgIcon>
  </ShowMoreContainer>
    </StyledBox>
  )
}

export default CardArea