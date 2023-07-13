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
`
const WholeContent = styled.div`
width:100vw;
height:87vh;
//border: solid 5px purple;
position: fixed;
top:13vh;
display:flex;
align-items: center;
`
const ButtonsRow = styled.div`
position:fixed;
top:21vh;
width:100vw;
display: flex;
justify-content: space-evenly;
//border: solid 5px orange;
`
const AboutButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
`
const AboutSection = styled.div`
width:50vw;
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
`
const SkillsButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
`

export default Body;