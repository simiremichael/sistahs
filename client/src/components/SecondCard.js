import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const StyledBox = styled(Box)`
height: auto;
width: 100%;
background: #fef9f2;
padding-top: 20px;
margin-top: 30px;
@media only screen and (max-width: 980px) {
    height: auto;
    }
`
const StyledContainer = styled(Container)`
display: flex;
justify-content: center;
flex-wrap: wrap;
@media only screen and (max-width: 980px) {
    justify-content: start;
    }
    @media only screen and (max-width: 680px) {
        justify-content: center;
        }
`
const TopContainer = styled(Container)`

`
const H1 = styled.h1`
color: #af8451;
font-family: Serif;
font-size: 3vmax;
`
const H4 = styled.p`
color: #545454;
font-family: Serif;
font-size: 2vmin;
`
const StyledCard = styled(Card)`
width: 300px;
height: 200px;
margin: 15px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
`
const Div = styled.div`
display: flex;
margin: 0 3%;
`
const GoalContainer = styled.div`
background: #6dcb90;
height: 16px;
padding: 0 6px;
margin: 10px 5px 5px 10px;
`
const Goal = styled.p`
font-size: 0.55rem;
margin-top: 3px;
color: #ffff;
`
const WebContainer = styled.div`
background: #ee589d;
height: 16px;
margin: 10px 5px 5px 0;
padding: 0 6px;
border-radius: 50px;
`
const Web = styled.p`
margin-top: 3px;
font-size: 0.55rem;
color: #ffff;
`
const H3 = styled.h3`
margin: 10px 5% 5px;
text-align: start;
font-size: 1.2rem;
`
const SubContainer = styled.div`
display: flex;
align-items: center;
margin: 5px 6%;
`
const Img = styled.img`
width: 15px;
height: 15px;
border-radius: 50%; 
margin-left: -3px;
`
const P = styled.p`
font-size: 10px;
margin-left: 10px;
color: gray;
`
const BottomContainer = styled.div`
display: flex;
margin: 10px 5%;
`
const Button1 = styled.div`
border: 1px solid #af8451;

border-radius: 25px;
font-size: 0.7rem;
color: #af8451;
width: 60px;
align-content: center;
padding: 13px;
`
const Button2 = styled.div`
border: 1px solid #af8451;
padding: 13px;
margin-left: 10px;
border-radius: 25px;
font-size: 0.7rem;
color: #af8451;
width: 120px;
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
const H6 = styled.h6`
text-align: start;
color: #af8451;
margin-left: 20px;
`


const SecondCard = () => {
  return (
    <StyledBox>
        <TopContainer>
            <H1>How's your progress on thid goal?</H1>
            <H4>TARGET COMPLETION: AUG 9</H4>
        </TopContainer>
      <StyledContainer>
    <StyledCard>
        <Div>
    <GoalContainer><Goal>GOAL</Goal></GoalContainer> 
      <WebContainer><Web>WEB</Web></WebContainer>
      </Div>
      <H3>Add new products to the website.</H3>
    <SubContainer>
       <Img src="../images/img3.avif" alt='sub' /> 
       <Img src="../images/img4.avif" alt='sub' /> 
       <Img src="../images/img2.jpg" alt='sub' /> 
       <P>3 others working on the same goal</P>
    </SubContainer>
    <BottomContainer>
      <Button1>Done!</Button1>  
      <Button2>Set new target date</Button2>
    </BottomContainer>
    </StyledCard>
    <StyledCard>
        <Div>
    <GoalContainer><Goal>GOAL</Goal></GoalContainer> 
      <WebContainer><Web>WEB</Web></WebContainer>
      </Div>
      <H3>Add new products to the website.</H3>
    <SubContainer>
       <Img src="../images/img3.avif" alt='sub' /> 
       <Img src="../images/img4.avif" alt='sub' /> 
       <Img src="../images/img2.jpg" alt='sub' /> 
       <P>3 others working on the same goal</P>
    </SubContainer>
    <BottomContainer>
      <Button1>Done!</Button1>  
      <Button2>Set new target date</Button2>
    </BottomContainer>
    </StyledCard>
    <StyledCard>
        <Div>
    <GoalContainer><Goal>GOAL</Goal></GoalContainer> 
      <WebContainer><Web>WEB</Web></WebContainer>
      </Div>
      <H3>Add new products to the website.</H3>
    <SubContainer>
       <Img src="../images/img3.avif" alt='sub' /> 
       <Img src="../images/img4.avif" alt='sub' /> 
       <Img src="../images/img2.jpg" alt='sub' /> 
       <P>3 others working on the same goal</P>
    </SubContainer>
    <BottomContainer>
      <Button1>Done!</Button1>  
      <Button2>Set new target date</Button2>
    </BottomContainer>
    </StyledCard>
    </StyledContainer> 
    <ShowMoreContainer> 
    <H6>GOALS & ACTIVITIES</H6>
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></SvgIcon>
  </ShowMoreContainer>
    </StyledBox>
  )
}

export default SecondCard