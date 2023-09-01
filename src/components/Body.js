import React, {useState, useContext} from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Solo from "./Solo";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {RiMenuUnfoldLine} from "react-icons/ri";
import {RiMenuFoldLine} from "react-icons/ri";
import  ThemeContext  from "./ThemeContext";


const Body = () => {
    const [AboutActive, setAboutActive] = useState(true);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);
    const [MenuActive, setMenuActive] = useState(false);
    //const { nightOn, setNightOn, sunOn, setSunOn } = useContext(ThemeContext);

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
                <HeadName>Dariusz Czeczuk</HeadName>
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
                <div>
            <HeadName className="NightMode">Dariusz Czeczuk</HeadName>
            <HeadLinks className="NightMode">
                <MenuButton onClick={toggleMenu}><RiMenuUnfoldLine/></MenuButton>
                <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
                <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
                <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
            </HeadLinks>
                </div>
                {
                    MenuActive &&
                    <ButtonsRow className="NightMode">
                        <AboutButton onClick={handleAboutClick} className="NightMode">About</AboutButton>
                        <ProjectsButton onClick={handleProjectsClick} className="NightMode">Projects</ProjectsButton>
                        <SkillsButton onClick={handleSkillsClick} className="NightMode">Skills</SkillsButton>
                    </ButtonsRow>
                }
                

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
    top:2vh;
    right:2vw;
    border:none;
    z-index: 10;
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
height:100vh;
position: fixed;
.NightMode{
        color:white;
        background-color: black;
    }
//background: radial-gradient(circle, rgba(255,255,255,1) 90%, rgba(29,80,148,1) 100%);
`
const WholeContent = styled.div`
width:100vw;
height:100vh;
position: fixed;
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

const HeadName = styled.h1`
font-size: 42px;
font-style: italic;
position: fixed;
left:40vw;
top: 2vh;
z-index: 1000;
//text-shadow: 1vh 1vw;
.NightMode{
        background-color: black;
        color:white;
    }
`
const HeadLinks = styled.div`
display:flex;
flex-direction:column;
column-gap:7vw;
position: fixed;
left:2vw;
top:25vh; 
z-index: 1;
color: rgb(0,155,0);
//border:solid 5px red;
.NightMode{
        background-color: black;
        //color:white;
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
const MenuButton = styled.button`
background-color: transparent;
border: none;
font-size:22px;
color: rgb(0,155,0);
&:hover{
    cursor: pointer;
    scale:2;
}
`