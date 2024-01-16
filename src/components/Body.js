import React, {useState} from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {RiMenuUnfoldLine} from "react-icons/ri";

const Body = () => {
    const [AboutActive, setAboutActive] = useState(false);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);
    const [MenuActive, setMenuActive] = useState(false);

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

    const toggleMenu = () => {
        setMenuActive(!MenuActive);
      };

    return(
        <DaBody>
            {
                sunOn &&
                <WholeScreen>
                    <div>
                <HeadLinks>
                    <MenuButton onClick={toggleMenu}><RiMenuUnfoldLine/></MenuButton>
                    <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
                    <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
                    <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
                </HeadLinks>
                    </div>
                    {
                        MenuActive &&
                <ButtonsRow>
                    <AboutButton onClick={handleAboutClick}>About</AboutButton>
                    <ProjectsButton onClick={handleProjectsClick}>Projects</ProjectsButton>
                    <SkillsButton onClick={handleSkillsClick}>Skills</SkillsButton>
                </ButtonsRow>
                    }
                
                <ModeButton onClick={handleDarkMode}>
                    <DarkModeButton><BsFillMoonStarsFill/></DarkModeButton>
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
        </WholeContent>
                </WholeScreen>
            }

            {nightOn &&
            <NightWholeScreen >
                <div>
            <NightHeadLinks>
                <NightMenuButton onClick={toggleMenu}><RiMenuUnfoldLine/></NightMenuButton>
                <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
                <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
                <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
            </NightHeadLinks>
                </div>
                {
                    MenuActive &&
                    <ButtonsRow >
                        <NightAboutButton onClick={handleAboutClick} >About</NightAboutButton>
                        <NightProjectsButton onClick={handleProjectsClick} >Projects</NightProjectsButton>
                        <NightSkillsButton onClick={handleSkillsClick} >Skills</NightSkillsButton>
                    </ButtonsRow>
                }
                

                <ModeButton onClick={handleSunMode}>
                <SunModeButton><BsFillSunFill /></SunModeButton>
                </ModeButton>

                <WholeContent className="NightMode">
            <AboutSection >
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
        </WholeContent>
            </NightWholeScreen>}
        </DaBody>
        
    )
}

export default Body;

const WholeScreen = styled.div`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    width:100%;
    height:100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZ3cTIxbjRicWNwdmZ6aXRtZjcwOHlqb2Y3d3lzemxhd2t6dWpkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YrTJKOe0FhQJAUXTyp/giphy.gif');
    
    `
const NightWholeScreen = styled.div`
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: repeat(6, 1fr);
    color:white;
    width:100%;
    height:100%;
    background-size : cover ;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjkxYmtsczVzd2VwbjJ3dGJnYWlldmh1bnRkdno4emN5d2s4cHVjbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ODcgqrqIeNuewjiqow/giphy.gif');
`
const ModeButton = styled.button`
    grid-column: 1 / 2;
    grid-row: 1 / 2;
    background-color: transparent;
    width:3%;
    height:3%;
    position: fixed;
    top:4vh;
    left:2vw;
    border:none;
    z-index: 10;
    font-size:2em;
    min-width: 0;

    &:hover{
        cursor:pointer;
    }
`
const SunModeButton = styled.p`
    color: white;
    min-width: 0;
`
const DarkModeButton = styled.p`
    color: black;
    min-width: 0;
`
const DaBody = styled.div`
width:100%;
height:100%;
position: fixed;
.NightMode{
        color:white;
    }
`
const WholeContent = styled.div`
grid-column: 2 / 7;
grid-row: 3 / 7;
.NightMode{
    color:white;
    background-color: transparent;
    min-width: 0;
}
`
const ButtonsRow = styled.div`
grid-column: 1 / 7;
grid-row: 2 / 3;
position:fixed;
background-color: transparent;
top:21vh;
left:20vw;
width:60%;
display: flex;
justify-content: space-evenly;
z-index: 1;
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
const nightUnderlineAnimation = `
position: relative;
&:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease-in-out;
}
&:hover {
    &:after {
    transform: scaleX(1);
    }
}
`
const NightAboutButton = styled.button`
background-color:transparent;
font-size:2em;
border:none;
color:white;
${nightUnderlineAnimation}

&:hover{
    cursor:pointer;
}
`
const AboutButton = styled.button`
background-color:transparent;
font-size:2em;
border:none;
color:black;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`
const AboutSection = styled.div`
grid-column: 2 / 7;
grid-row: 3 / 7;
width:48%;
height:87%;
position: fixed;
top:13vh;
left:50vw;
display:flex;
align-items: center;
min-width: 0;
`
const NightProjectsButton = styled.button`
background-color:transparent;
font-size:2em;
border:none;
color:white;
background-color: transparent;
${nightUnderlineAnimation}

&:hover{
    cursor:pointer;
}
`
const ProjectsButton = styled.button`
background-color:transparent;
font-size:2em;
color:black;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`
const NightSkillsButton = styled.button`
background-color:transparent;
font-size:2em;
border:none;
color:white;
${nightUnderlineAnimation}
`
const SkillsButton = styled.button`
background-color:transparent;
font-size:2em;
color:black;
border:none;
${underlineAnimation}

&:hover{
    cursor:pointer;
}
`
const HeadLinks = styled.div`
grid-column: 1 / 2;
grid-row: 3 / 7;
display:flex;
flex-direction:column;
column-gap:7vw;
background-color: transparent;
border: none;
position: fixed;
left:2vw;
top:25vh; 
z-index: 1;
color: black;
`
const NightHeadLinks = styled.div`
grid-column: 1 / 2;
grid-row: 3 / 7;
display:flex;
flex-direction:column;
column-gap:7vw;
background-color: transparent;
border: none;
position: fixed;
left:2vw;
top:25vh; 
z-index: 1;
color: white;
`
const Linkedin = styled.p`
background-color: transparent;
font-size:2em;

&:hover{
    scale:2;
}
`
const Github = styled.p`
background-color: transparent;
font-size:2em;

&:hover{
    scale:2;
}
`
const Email = styled.p`
background-color: transparent;
font-size:2em;

&:hover{
    scale:2;
}
`
const HeadLink = styled.a`
color:inherit;
text-decoration: none;
min-width: 0;
`
const MenuButton = styled.button`
background-color: transparent;
border: none;
font-size:2em;
&:hover{
    cursor: pointer;
    scale:2;
}
`
const NightMenuButton = styled.button`
background-color: transparent;
border: none;
font-size:2em;
color:white;
&:hover{
    cursor: pointer;
    scale:2;
}
`