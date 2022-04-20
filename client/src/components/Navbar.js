import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';

const StyledBox = styled(Box)`
background: rgb(255,255,255);
background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,228,228,1) 17%, rgba(249,179,179,1) 80%); 
height: auto;
width: 100%;
display: flex;
@media only screen and (max-width: 780px) {
  flex-direction: column;
  }
`
const StyledContainer = styled(Container)`
width: 100%;

`
const LogoContainer = styled.div`
background-color: #000000;
max-width: 35px;
height: 35px;
border-radius: 50%;
padding: 6px 16px 9px;
margin: 20px  0  0 35px ;
cursor: pointer;
@media only screen and (max-width: 780px) {
  padding: 4px 7px 7px;
  }
`
const Logo = styled.h2`
color:#ffffff;
margin-top: 0;
font-size:35px;
font-family: segoe-print;
`
const StyledUl = styled.ul`
display: flex;
list-style: none;
justify-content: space-around;
@media only screen and (max-width: 980px) {
 display: none;
 }
`
const StyledLi = styled.li`
font-size: 1.7vmin;
color: #F9629F;
margin-top: 20px;
cursor: pointer;
`
const Button = styled.button`
margin: -38px 30px 3px auto;
border: none;
width: 31px;
height: 32px;
border-radius: 3px;
cursor: pointer;
background: none;
:hover {
background: #ddd9d9;
@media only screen and (min-width: 981px) {
  display: none;
  }
`
const Svg = styled.svg`
width: 12px;
fill: #F9629F;
`
const StyledP = styled.p`
font-family: 'Updock', cursive;
text-align: start;
color: #F9629F;
font-size: 4.5vmin;
margin-left: 55px;
font-weight: thin;
@media only screen and (max-width: 781px) {
  margin-left: 15%;
  }
`
const StyledH1 = styled.h1`
text-align: start;
color: #F9629F;
font-family: serif;
font-weight: bold;
font-size: 3.2vmax;
margin-left: 55px;
@media only screen and (max-width: 980px) {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  }
`
const ItemContainer = styled.div`
display: flex;
@media only screen and (max-width: 780px) {
 flex-direction: column;
  justify-content: center;
 }
`
const Img = styled.img`
width: 6rem;
height: 6rem;
margin-left: 35%;
border-radius: 50%;
@media only screen and (max-width: 780px) {
  align-self: center;
  margin-left: 0;
 }
`

const Navbar = () => {
  return (
    <StyledBox>
    <LogoContainer>
    <Logo>S</Logo>
    </LogoContainer>
    <Button type="menu"><Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></Svg></Button>
    <StyledContainer>
    <StyledUl>
    <StyledLi>Home</StyledLi>
    <StyledLi>Goals and activities</StyledLi>
    <StyledLi>Groups</StyledLi>
    <StyledLi>Digital Library</StyledLi>
    <StyledLi>Members</StyledLi>
    <StyledLi>Coaches</StyledLi>
    <StyledLi>Pink table</StyledLi>
    <StyledLi>FAQ</StyledLi>
    <StyledLi>Providers</StyledLi>
    <StyledLi>Funding</StyledLi>
    <StyledLi>My Account</StyledLi>
    </StyledUl>
    <StyledP>Hey Sis!</StyledP>
    <ItemContainer>
    <StyledH1>Connect with your <br/> August Sistahs</StyledH1>
    <Img src="../images/adimg.jpg" />
    </ItemContainer>
    </StyledContainer> 
    </StyledBox>
  )
}

export default Navbar