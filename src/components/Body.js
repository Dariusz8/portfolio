import React, {useState, useContext} from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import {Image} from 'cloudinary-react';
//import Solo from "./Solo";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {RiMenuUnfoldLine} from "react-icons/ri";
import {RiMenuFoldLine} from "react-icons/ri";
//import  ThemeContext  from "./ThemeContext";


const Body = () => {
    const [AboutActive, setAboutActive] = useState(false);
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
        </WholeContent>
                </WholeScreen>
            }

            {nightOn &&
            <WholeScreen >
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
            </WholeScreen>}
        </DaBody>
        
    )
}

export default Body;

const WholeScreen = styled.div`
    width:100%;
    height:100%;
    background-size : cover ;
    background-repeat: no-repeat;
    background-position: center;
    background-position-y: 40%;
    background-position-x: 110%;
    //https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExb2k5NjRhazgweWQybHI5MW16dThjcGlxemVtcnYxdG5pcTg5dnJxdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ccKEsBDAAQTrutQ9LA/giphy.gif
    //https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZ3cTIxbjRicWNwdmZ6aXRtZjcwOHlqb2Y3d3lzemxhd2t6dWpkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YrTJKOe0FhQJAUXTyp/giphy.gif
    background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExenZ3cTIxbjRicWNwdmZ6aXRtZjcwOHlqb2Y3d3lzemxhd2t6dWpkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/YrTJKOe0FhQJAUXTyp/giphy.gif');
    .NightMode{
        color:white;
        width:100%;
        height:100%;
        background-size : cover ;
        background-repeat: no-repeat;
        background-position: center;
        //https://wallpaperaccess.com/full/2825704.gif
        //https://wallpaperaccess.com/full/8642932.gif
        //https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3Z1eWhmazhpNGF0Z2h5MjZsMWRxbnl1ZHhwZWZhMGMyMTF0YTQwcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/6vemFHst2MWMrbGgfr/giphy.gif
        background-image: url('https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjkxYmtsczVzd2VwbjJ3dGJnYWlldmh1bnRkdno4emN5d2s4cHVjbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ODcgqrqIeNuewjiqow/giphy.gif');

    }
    `

const ModeButton = styled.button`
    background-color: transparent;
    color: black;
    width:3%;
    height:3%;
    position: fixed;
    top:4vh;
    left:2vw;
    border:none;
    z-index: 10;
    font-size:2em;

    &:hover{
        cursor:pointer;
    }

    .NightMode{
        color:white;
        background-color: transparent;
        border: none;
        
    }
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
width:100%;
height:100%;
display:flex;
align-items: center;

.NightMode{
    color:white;
    background-color: transparent;
}
`
const ButtonsRow = styled.div`
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
width:48%;
height:87%;
position: fixed;
top:13vh;
left:50vw;
display:flex;
align-items: center;

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
const SunModeButton = styled.p`
background-color: transparent;
color: white;
`
const HeadLink = styled.a`
color:inherit;
text-decoration: none;
`
const MenuButton = styled.button`
background-color: transparent;
border: none;
font-size:2em;
color: white;
&:hover{
    cursor: pointer;
    scale:2;
}
`