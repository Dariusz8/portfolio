import React from "react";
import styled from "styled-components";

const About = () => {
    return(
        <AllAboutContent>
            <AboutHeader>Hello World!</AboutHeader>
            <AboutText>
            As a passionate and versatile professional with a B.Sc in Cell and Molecular Biology and recent successful completion of a bootcamp in full-stack web development, I am excited to transition into a field that offers constant new tasks, challenges and opportunities for growth. Through my recent work as a lab technician, I honed my attention to detail, multitasking and working effectively in a team-based environment. Seeing the potential of emerging technology in various industries, I pursued a bootcamp in web development. This allowed me to acquire proficiency in various skills for both front-end and back-end development. I look forward to contributing my diverse skill set and passion for science and technology to a team that values continual learning and the pursuit of helpful outcomes for others.
            </AboutText>
        </AllAboutContent>
    )
}

const AboutHeader = styled.h2`
min-width: 0;
`
const AllAboutContent = styled.div`
width:48%;
height:66%;
position: fixed;
left:30vw;
top:37vh;
overflow-y: scroll;
`

const AboutText = styled.p`
text-indent: 3vw;
font-size: 1.25em;
min-width: 0;
`

export default About