import React, {useState} from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Solo from "./Solo";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const Body = () => {
    const [AboutActive, setAboutActive] = useState(true);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);
 
    const handleDarkMode = () => {
        setNightOn(true);
        setSunOn(false);
    }

    const handleSunMode = () => {
        setSunOn(true);
        setNightOn(false);
    }

    const handleAboutClick = () => {
        setAboutActive(true);
        setProjectsActive(false);
        setSkillsActive(false);
    };
    
    const handleProjectsClick = () => {
        setAboutActive(false);
        setProjectsActive(true);
        setSkillsActive(false);
    };
    
    const handleSkillsClick = () => {
        setAboutActive(false);
        setProjectsActive(false);
        setSkillsActive(true);
    };

    return(
        <DaBody>
            {
                sunOn &&
                <WholeScreen>
                <ButtonsRow>
                    <AboutButton onClick={handleAboutClick}>About</AboutButton>
                    <ProjectsButton onClick={handleProjectsClick}>Projects</ProjectsButton>
                    <SkillsButton onClick={handleSkillsClick}>Skills</SkillsButton>
                </ButtonsRow>

                <ModeButton onClick={handleDarkMode}>
                <BsFillMoonStarsFill/>
                </ModeButton>

                <WholeContent>
            <AboutSection>
                {
                    AboutActive &&
                    <About/>
                }
                {
                    ProjectsActive &&
                    <Projects/>
                }
                {
                    SkillsActive &&
                    <Skills/>
                }
            </AboutSection>
            <Solo/>
        </WholeContent>
                </WholeScreen>
            }

            {nightOn &&
            <WholeScreen>
                <ButtonsRow className="NightMode">
                    <AboutButton onClick={handleAboutClick} className="NightMode">About</AboutButton>
                    <ProjectsButton onClick={handleProjectsClick} className="NightMode">Projects</ProjectsButton>
                    <SkillsButton onClick={handleSkillsClick} className="NightMode">Skills</SkillsButton>
                </ButtonsRow>

                <ModeButton onClick={handleSunMode} className="NightMode">
                <BsFillSunFill/>
                </ModeButton>

                <WholeContent className="NightMode">
            <AboutSection className="NightMode">
                {
                    AboutActive &&
                    <About/>
                }
                {
                    ProjectsActive &&
                    <Projects/>
                }
                {
                    SkillsActive &&
                    <Skills/>
                }
            </AboutSection>
            <Solo/>
        </WholeContent>
            </WholeScreen>}
        </DaBody>
        
    )
}

export default Body;

const WholeScreen = styled.div`
    width:100vw;
    height:100vh; 
    .NightMode{
        color:white;
        background-color: black;
    }
    `

const ModeButton = styled.button`
    background-color: transparent;
    color: black;
    width:3vw;
    height:3vh;
    position: fixed;
    top:1vh;
    right:1vw;
    border:none;
    font-size:2em;

    &:hover{
        cursor:pointer;
    }

    .NightMode{
        color:white;
        background-color: black;
    }
`

const DaBody = styled.div`
width:100vw;
height:87vh;
position: fixed;
top:13vh;
background: radial-gradient(circle, rgba(255,255,255,1) 90%, rgba(29,80,148,1) 100%);
`
const WholeContent = styled.div`
width:100vw;
height:75vh;
//border: solid 5px purple;
position: fixed;
top:25vh;
display:flex;
align-items: center;

.NightMode{
    color:white;
    background-color: black;
}
`
const ButtonsRow = styled.div`
position:fixed;
top:21vh;
width:100vw;
display: flex;
justify-content: space-evenly;
z-index: 1;
//border: solid 5px orange;
.NightMode{
    color:white;
    background-color: black;
}
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
.NightMode{
        color:white;
        background-color: black;
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
.NightMode{
        color:white;
        background-color: black;
    }
`
const ProjectsButton = styled.button`
background-color:transparent;
font-size:28px;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
.NightMode{
        color:white;
        background-color: black;
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
.NightMode{
        color:white;
        background-color: black;
    }
`