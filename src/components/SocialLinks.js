import React from "react";
import styled from "styled-components";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";

const SocialLinks = () => {
    return(
        <div>
            <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
            <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
            <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
        </div>

    )
}

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
`

export default SocialLinks