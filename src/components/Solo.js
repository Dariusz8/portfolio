import React from "react";
import styled, { keyframes } from "styled-components";


const Solo = () =>{
    return(
       <Container>
       </Container>
    )
}

const Container = styled.div`
width: 12%;
height: 20%;
top:2vh;
left:6vw;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
border-radius: 25%;
background-position-x: 40%;
background-position-y: 28%;
// `
// const topLeftAnimation = keyframes`
//     0% {
//         transform: translate(-20px, -20px) rotate(0deg);
//     }
//     100% {
//         transform: translate(0, 0) rotate(360deg);
//     }
// `;
// const topRightAnimation = keyframes`
//     0% {
//         transform: translate(20px, -20px) rotate(0deg);
//     }
//     100% {
//         transform: translate(0, 0) rotate(-360deg);
//     }
// `;
// const bottomLeftAnimation = keyframes`
//     0% {
//         transform: translate(-20px, 20px) rotate(0deg);
//     }
//     100% {
//         transform: translate(0, 0) rotate(360deg);
//     }
// `;
// const bottomRightAnimation = keyframes`
//     0% {
//         transform: translate(20px, 20px) rotate(0deg);
//     }
//     100% {
//         transform: translate(0, 0) rotate(-360deg);
//     }
// `;

// const TopLeft = styled.div`
// position: fixed;
// top:2%;
// left:6%;
// width:80px;
// height:80px;
// border-radius: 50% 0 0 0;
// background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
// background-clip: content-box;
// background-position-x: 30%;
// background-position-y: 24%;
// //animation: ${topLeftAnimation} 3s alternate-reverse infinite;
// `
// const TopRight = styled.div`
// position: fixed;
// top:2%;
// left:11.6%;
// width:81px;
// height:80px;
// border-radius: 0 50% 0 0;
// background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
// background-clip: content-box;
// background-position-x: 51%;
// background-position-y: 24%;
// //animation: ${topRightAnimation} 3s alternate-reverse infinite;
// `
// const BottomLeft = styled.div`
// position: fixed;
// top: 11.9%;
// left:6%;
// width:80px;
// height:80px;
// border-radius: 0 0 0 50% ;
// background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
// background-clip: content-box;
// background-position-x: 30%;
// background-position-y: 45%;
// //animation: ${bottomLeftAnimation} 3s alternate-reverse infinite;
// `
// const BottomRight = styled.div`
// position: fixed;
// top:11.9%;
// left:11.6%;
// width:80px;
// height:80px;
// border-radius: 0 0 50% 0;
// background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
// background-clip: content-box;
// background-position-x: 51%;
// background-position-y: 45%;
// //animation: ${bottomRightAnimation} 3s alternate-reverse infinite;
// `

export default Solo;