import React, {useState} from "react";
import styled from "styled-components";
import About from "./About";
import Skills from "./Skills";
import Solo from "./Solo";

const Body = () => {
    const [AboutActive, setAboutActive] = useState(true);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckMode = () =>{
        setIsChecked(!isChecked);
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
        <ButtonsRow>
            <AboutButton onClick={handleAboutClick}>About</AboutButton>
            <ProjectsButton onClick={handleProjectsClick}>Projects</ProjectsButton>
            <SkillsButton onClick={handleSkillsClick}>Skills</SkillsButton>
        </ButtonsRow>
        <WholeContent>
            <AboutSection>
                {
                    AboutActive &&
                    <About/>
                }
                {
                    ProjectsActive &&
                    <div></div>
                }
                {
                    SkillsActive &&
                    <Skills/>
                }
            </AboutSection>
            <Solo/>
            <CheckModeContainer>
                <CheckModeButton checked={isChecked} onChange={handleCheckMode} />
                <CheckModeSlider>
                    <CheckModeSliderDot />
                </CheckModeSlider>
            </CheckModeContainer>
        </WholeContent>
        </DaBody>
        
    )
}

export default Body;

const DaBody = styled.div`
width:100vw;
height:87vh;
position: fixed;
top:13vh;
//color: ${(props) => (props.isChecked ? "white" : "black")};
//background: ${(props) => (props.isChecked ? "white" : "black")};
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
const CheckModeContainer = styled.div`
position:fixed;
top:2vh;
right:2vw;
display:flex;
align-items: center;
z-index:10;
`
const CheckModeSlider = styled.label`
position: relative;
display: inline-block;
width:5vw;
height:2vh;
background-color: #ccc;
border-radius: 20px;
transition:background-color 0.3s;
cursor:pointer;
z-index:10;
`
const CheckModeSliderDot = styled.span`
z-index:10;
position:absolute;
width:17px;
height:17px;
border-radius: 50%;
background-color:white;
top:1px;
left:1px;
//transition: transform  ease-in-out 0.3s;
`
const CheckModeButton = styled.input.attrs({type:"checkbox"})`
display:none;
z-index:10;

&:checked + ${CheckModeSlider}{
    background-color: #2196f3;
}

&:checked + ${CheckModeSliderDot}{
    top:1px;
    right:1px;
 //transform: translateX(4vw);
 //transition: transform ease-in-out 0.3s;
}
`