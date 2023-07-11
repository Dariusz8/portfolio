import React from "react";
import styled from "styled-components";
import About from "./About";


const Body = () => {
    return(
        <DaBody>
        <ButtonsRow>
            <AboutButton>About</AboutButton>
            <ProjectsButton>Projects</ProjectsButton>
            <SkillsButton>Skills</SkillsButton>
        </ButtonsRow>
        <WholeContent>
            <About/>
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
border:none;
`
const ProjectsButton = styled.button`
border:none;

`
const SkillsButton = styled.button`
border:none;

`

export default Body;