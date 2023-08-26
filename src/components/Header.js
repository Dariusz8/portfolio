import React, { useContext } from "react";
import styled  from "styled-components";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import { ThemeContext } from "./ThemeContext";

const Header = () =>{
    const { nightOn, setNightOn, sunOn, setSunOn } = useContext(ThemeContext);

    return(
        <div>
        {
            sunOn &&
        <HeadTopContainer>
            <HeadName>Dariusz Czeczuk</HeadName>
            <HeadLinks>
                <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
                <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
                <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
            </HeadLinks>
        </HeadTopContainer>
        }
        {
            nightOn &&
        <HeadTopContainer className="NightMode">
            <HeadName className="NightMode">Dariusz Czeczuk</HeadName>
            <HeadLinks className="NightMode">
                <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
                <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
                <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
            </HeadLinks>
        </HeadTopContainer>
        }
        </div>
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
.NightMode{
        background-color: black;
    }
`
const HeadName = styled.h1`
font-size: 42px;
font-style: italic;
margin-left:5vw;
//text-shadow: 1vh 1vw;
.NightMode{
        background-color: black;
    }
`
const HeadLinks = styled.div`
display:flex;
flex-direction:row;
column-gap:7vw;
position: fixed;
right:5vw;
top:5vh; 
//border:solid 5px red;
.NightMode{
        background-color: black;
    }
`
const Linkedin = styled.p`
font-size:22px;

&:hover{
    scale:2;
}
`
const Github = styled.p`
font-size:22px;

&:hover{
    scale:2;
}
`
const Email = styled.p`
font-size:22px;

&:hover{
    scale:2;
}
`
const HeadLink = styled.a`
color:inherit;
text-decoration: none;
`

export default Header