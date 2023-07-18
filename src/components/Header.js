import React, {useState} from "react";
import styled  from "styled-components";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import { Navigate } from "react-router-dom";



const Header = () =>{
    const [Linked, setLinked] = useState(false);
    const [Gitted, setGitted] = useState(false);
    const [Emailed, setEmailed] = useState(false);
    return(
        <HeadTopContainer>
            <HeadName>Dariusz Czeczuk</HeadName>
            <HeadLinks>
                <Linkedin><FiLinkedin/></Linkedin>
                <Github><FiGithub/></Github>
                <Email><TfiEmail/></Email>
            </HeadLinks>
        </HeadTopContainer>
    )
}

const HeadTopContainer = styled.div`
width:100vw;
height:13vh;
//border:solid 1px red;
position:fixed;
left:0px;
top:0px;
background-color: transparent;
color:rgb(0,150,0);
`
const HeadName = styled.h1`
font-size: 36px;
font-style: italic;
margin-left:5vw;
`
const HeadLinks = styled.div`
display:flex;
flex-direction:row;
column-gap:7vw;
position: fixed;
right:5vw;
top:5vh;
//border:solid 5px red;
`
const Linkedin = styled.p`
font-size:22px;

&:hover{
    font-size:28px;
}
`
const Github = styled.p`
font-size:22px;

&:hover{
    font-size:28px;
}
`
const Email = styled.p`
font-size:22px;

&:hover{
    font-size:28px;
}
`

export default Header