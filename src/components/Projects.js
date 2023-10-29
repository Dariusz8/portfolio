import React from "react";
import styled from "styled-components";
import {Image} from 'cloudinary-react';

const Projects = () => {
    const redirectToExternalURL = (url) =>{
        window.open(url, "_blank");
    }
    return(
        <ProjectsContainer>
            <StarWarsProject cloudName="dly85se71" publicId="https://res.cloudinary.com/dly85se71/image/upload/v1698009048/Screen_Shot_2023-10-22_at_5.08.55_PM_asxlim.png" onClick={() => redirectToExternalURL("https://github.com/Dariusz8/FinalProject")}/>
            <BootGroup onClick={() => redirectToExternalURL("https://github.com/Dariusz8/groupProjectECommerce")} >Group Project</BootGroup>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
width:49%;
height:42%;
overflow-y:scroll;
scroll-behavior: smooth;
position: fixed;
left:27vw;
top:40vh;
border-radius: 10%;
`
const StarWarsProject = styled(Image)`
height: 100%;
width: 100%;
margin-bottom: 10%;
&:hover{
    cursor: pointer;
    transform: scale(1.1);
}
`
const BootGroup = styled.div`
text-align: center;
background-position-y: 29%;
background-position-x: 270%;
height: 100%;
width: 100%;
font-size: 10rem;
font-weight: bold;
background-clip: text;
color:transparent;
-webkit-background-clip: text;
background-image: url('https://www.concordia.ca/etc/designs/concordia/clientlibs/img/news-default.jpg');

&:hover{
    cursor: pointer;
    transform: scale(1.2);
}
`

export default Projects