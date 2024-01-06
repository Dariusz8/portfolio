import React from "react";
import styled from "styled-components";

const Skills = () =>{
    return(
        <AllSkillsContent>
            <SkillsList>
                <SkillsText>JavaScript</SkillsText>
                <SkillsText>React</SkillsText>
                <SkillsText>CSS</SkillsText>
                <SkillsText>HTML</SkillsText>
                <SkillsText>Node.js</SkillsText>
                <SkillsText>MongoDB</SkillsText>
                <SkillsText>Python</SkillsText>
                <SkillsText>R</SkillsText>
                <SkillsText>MySQL</SkillsText>
            </SkillsList>
        </AllSkillsContent>
    )
}

const AllSkillsContent = styled.div`
width:48%;
height:30%;
overflow-y:scroll;
scroll-behavior: smooth;
position: fixed;
left:25vw;
top:40vh;
text-align: center;
transform-style: preserve-3d;
z-index: 100;
`
const SkillsList = styled.div`
padding:0px;
margin:0px;
transform-style: preserve-3d;
transform-origin: 50% 50%;
transition: transform 0.5 ease;
transform: rotateX(-20deg) translateZ(-100px);
`
const SkillsText = styled.p`
margin: 5vh 0 5vh 0;
font-size:2em;
transform: rotateX(20deg);
`

export default Skills;