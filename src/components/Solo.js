import React from "react";
import styled, { keyframes } from "styled-components";

const divideAnimation = keyframes`
0%{
    transform: scale(1);
}
25%{
    transform: scale(0.5) translate(-50%, -50%);
}
50%{
    transform: scale(0.5) translate(0, -50%);
}
75%{
    transform: scale(0.5) translateY(-50%, 0);
}
100%{
    transform: scale(1);
}`

const Solo = () =>{
    return(
            <Circle>
                <TopLeft/>
                <TopRight/>
                <BottomLeft/>
                <BottomRight/>
            </Circle>
    )
}


const Circle = styled.div`
top:0;
left:10vw;
width:500px;
height:500px;
//border: red 5px solid;
background-color: transparent;
position:relative;
animation: ${divideAnimation} 4s infinite;
`
const Piece = styled.div`
position:absolute;
width:50%;
height:50%;
clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
`
const TopLeft = styled(Piece)`
top:0;
left:0;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-size: 200% 200%;
background-position: top left;
transform-origin: top left;
`
const TopRight = styled(Piece)`
top:0;
left:50%;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-size: 200% 200%;
background-position: top right;
transform-origin: top right;
`
const BottomLeft = styled(Piece)`
top:50%;
left:0;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-size: 200% 200%;
background-position: bottom left;
transform-origin: bottom left;
`
const BottomRight = styled(Piece)`
top:50%;
left:50%;
background-image: url('https://avatars.githubusercontent.com/u/108949953?v=4');
background-size: 200% 200%;
background-position: bottom right;
transform-origin: bottom right;
`


export default Solo;