import React from "react";
import styled, { keyframes } from "styled-components";


const Solo = () =>{
    return(
       <Container>
        <TopLeft/>
        <TopRight/>
        <BottomLeft/>
        <BottomRight/>
       </Container>
    )
}

const topLeftAnimation = keyframes`
    0% {
        transform: translate(-20px, -20px) rotate(0deg);
    }
    100% {
        transform: translate(0, 0) rotate(360deg);
    }
`;
const topRightAnimation = keyframes`
    0% {
        transform: translate(20px, -20px) rotate(0deg);
    }
    100% {
        transform: translate(0, 0) rotate(-360deg);
    }
`;
const bottomLeftAnimation = keyframes`
    0% {
        transform: translate(-20px, 20px) rotate(0deg);
    }
    100% {
        transform: translate(0, 0) rotate(360deg);
    }
`;
const bottomRightAnimation = keyframes`
    0% {
        transform: translate(20px, 20px) rotate(0deg);
    }
    100% {
        transform: translate(0, 0) rotate(-360deg);
    }
`;

const Container = styled.div`
position: fixed;
top:28vh;
left:1vw;
//width:48vw;
//height:70vh;
//background-color: transparent;
//border: solid red 5px;
`
const TopLeft = styled.div`
position: fixed;
top:45%;
left:17%;
width:100px;
height:100px;
border-radius: 50% 0 0 0;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-clip: content-box;
background-position-x: 30%;
background-position-y: 17%;
animation: ${topLeftAnimation} 3s alternate-reverse infinite;
`
const TopRight = styled.div`
position: fixed;
top:45%;
left:23.9%;
width:100px;
height:100px;
border-radius: 0 50% 0 0;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-clip: content-box;
background-position-x: 57%;
background-position-y: 17%;
animation: ${topRightAnimation} 3s alternate-reverse infinite;
`
const BottomLeft = styled.div`
position: fixed;
top: 57.3%;
left:17%;
width:100px;
height:100px;
border-radius: 0 0 0 50% ;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-clip: content-box;
background-position-x: 30%;
background-position-y: 45%;
animation: ${bottomLeftAnimation} 3s alternate-reverse infinite;
`
const BottomRight = styled.div`
position: fixed;
top:57.3%;
left:23.9%;
width:100px;
height:100px;
border-radius: 0 0 50% 0;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-clip: content-box;
background-position-x: 57%;
background-position-y: 45%;
animation: ${bottomRightAnimation} 3s alternate-reverse infinite;
`

export default Solo;