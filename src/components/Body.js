import React from "react";
import styled from "styled-components";
import About from "./About";
import { useState } from "react";


const Body = () => {
    const [AboutActive, setAboutActive] = useState(true);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    return(
        <DaBody>
        <ButtonsRow>
            <AboutButton>About</AboutButton>
            <ProjectsButton>Projects</ProjectsButton>
            <SkillsButton>Skills</SkillsButton>
        </ButtonsRow>
        <WholeContent>
            <AboutSection>
                <About/>
            </AboutSection>
        </WholeContent>
        </DaBody>
    )
}

const DaBody = styled.div`
width:100vw;
height:87vh;
position: fixed;
top:13vh;
//border: solid 6px yellowgreen;
`
const WholeContent = styled.div`
width:100vw;
height:75vh;
//border: solid 5px purple;
position: fixed;
top:25vh;
display:flex;
align-items: center;
`
const ButtonsRow = styled.div`
position:fixed;
top:21vh;
width:100vw;
display: flex;
justify-content: space-evenly;
z-index: 1;
//border: solid 5px orange;
`
const underlineAnimation = `
position: relative;
&:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: black;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}
&:hover {
    &:after {
    transform: scaleX(1);
    }
}
`
const AboutButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`
const AboutSection = styled.div`
width:48vw;
height:87vh;
//border: solid 5px purple;
position: fixed;
top:13vh;
left:50vw;
display:flex;
align-items: center;
`
const ProjectsButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`
const SkillsButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`

export default Body;