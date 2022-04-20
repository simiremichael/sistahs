import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import styled from '@emotion/styled';
import Card from '@mui/material/Card';

const StyledBox = styled(Box)`
width: 100%;
height: auto;
padding: 30px 0;
`
const StyledContainer = styled(Container)`
margin-top: 25px;
display: flex;
flex-direction: column;
justify-content: center;
`
const H1 = styled.h1`
font-family: serif;
font-size: 3vmax;
`
const StyledDiv = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const Options = styled.div`
border: 1px solid #af8451;
color: #af8451;
padding: 7.5px 15px;
font-size: 0.7rem;
border-radius: 25px;
margin: 5px;
`
const CardContainer = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
`
const StyledCard = styled(Card)`
width: 400px;
height: 120px;
box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
display: flex;
margin: 20px 12px 0;
`
const LeftContainer = styled.div`
width: 100px; 
background: #fff7f7;
`
const Svg = styled.svg`
width: 40px;
fill: #af8451;
margin-top: 50px;
`
const RightContainer = styled.div`

`
const H4 = styled.h4`
text-align: start;
margin-left: 20px;
background: #ee589d;
width: 40px;
font-family: serif;
color: #ffffff;
font-size: 0.9rem;
padding: 1px 1px 1px  10px;
border-radius: 40px;
`
const H3 = styled.h3`
text-align: start;
margin-top: -8px;
margin-left: 20px;
`
const P = styled.p`
text-align: start;
font-size: 0.9rem;
margin-left: 20px;
margin-top: -20px;
`
const ShowMoreContainer = styled(Container)`
display: flex;
justify-content: center;
cursor: pointer;
margin-bottom: 0;
width: 200px;
`
const SvgIcon = styled.svg`
width: 10px;
margin-left: 10px;
margin-bottom: 0;
align-self: end;
`
const Join = styled.h6`
text-align: center;
color: #af8451;
margin-bottom: 0;
align-self: end;
`

const Resources = () => {
  return (
    <StyledBox>
     <StyledContainer>
      <H1>Check Out These Resources From <br/> The Digital Library</H1> 
      <StyledDiv>
      <Options>For you</Options>
      <Options>New</Options>
      <Options>Acounting</Options>
      <Options>Sales</Options>
      <Options>Strategy</Options>
      <Options>Marketing</Options>
      </StyledDiv> 
      <CardContainer>
      <StyledCard>
      <LeftContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/></Svg>
      </LeftContainer>
      <RightContainer>
        <H4>Sales</H4> 
        <H3>Salesforce Funnel</H3> 
        <P>PDF</P>
      </RightContainer>
     </StyledCard> 
     <StyledCard>
      <LeftContainer>
      <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M184 88C184 118.9 158.9 144 128 144C97.07 144 72 118.9 72 88C72 57.07 97.07 32 128 32C158.9 32 184 57.07 184 88zM208.4 196.3C178.7 222.7 160 261.2 160 304C160 338.3 171.1 369.8 192 394.5V416C192 433.7 177.7 448 160 448H96C78.33 448 64 433.7 64 416V389.2C26.16 371.2 0 332.7 0 288C0 226.1 50.14 176 112 176H144C167.1 176 190.2 183.5 208.4 196.3V196.3zM64 245.7C54.04 256.9 48 271.8 48 288C48 304.2 54.04 319.1 64 330.3V245.7zM448 416V394.5C468 369.8 480 338.3 480 304C480 261.2 461.3 222.7 431.6 196.3C449.8 183.5 472 176 496 176H528C589.9 176 640 226.1 640 288C640 332.7 613.8 371.2 576 389.2V416C576 433.7 561.7 448 544 448H480C462.3 448 448 433.7 448 416zM576 330.3C585.1 319.1 592 304.2 592 288C592 271.8 585.1 256.9 576 245.7V330.3zM568 88C568 118.9 542.9 144 512 144C481.1 144 456 118.9 456 88C456 57.07 481.1 32 512 32C542.9 32 568 57.07 568 88zM256 96C256 60.65 284.7 32 320 32C355.3 32 384 60.65 384 96C384 131.3 355.3 160 320 160C284.7 160 256 131.3 256 96zM448 304C448 348.7 421.8 387.2 384 405.2V448C384 465.7 369.7 480 352 480H288C270.3 480 256 465.7 256 448V405.2C218.2 387.2 192 348.7 192 304C192 242.1 242.1 192 304 192H336C397.9 192 448 242.1 448 304zM256 346.3V261.7C246 272.9 240 287.8 240 304C240 320.2 246 335.1 256 346.3zM384 261.7V346.3C393.1 335 400 320.2 400 304C400 287.8 393.1 272.9 384 261.7z"/></Svg>
      </LeftContainer>
      <RightContainer>
        <H4>Sales</H4> 
        <H3>Salesforce Funnel</H3> 
        <P>PDF</P>
      </RightContainer>
     </StyledCard>
     </CardContainer>
     <ShowMoreContainer> 
    <Join>DIGITAL LIBRARY</Join>
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM406.6 278.6l-103.1 103.1c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L306.8 288H128C110.3 288 96 273.7 96 256s14.31-32 32-32h178.8l-49.38-49.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l103.1 103.1C414.6 241.3 416 251.1 416 256C416 260.9 414.6 270.7 406.6 278.6z"/></SvgIcon>
  </ShowMoreContainer>
    </StyledContainer>   
    </StyledBox>
  )
}

export default Resources