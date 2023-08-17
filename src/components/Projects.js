import React from "react";
import styled from "styled-components";

const Projects = () => {
    const redirectToExternalURL = (url) =>{
        window.open(url, "_blank");
    }
    return(
        <ProjectsContainer>
            <StarWarsProject onClick={() => redirectToExternalURL("https://github.com/Dariusz8/FinalProject")}/>
            <BootGroup onClick={() => redirectToExternalURL("https://github.com/Dariusz8/groupProjectECommerce")} >Group Project</BootGroup>
        </ProjectsContainer>
    )
}

const ProjectsContainer = styled.div`
width:49vw;
height:42vh;
//border: solid 5px purple;
overflow-y:scroll;
scroll-behavior: smooth;
position: fixed;
left:50vw;
top:40vh;
border-radius: 23px;
`
const StarWarsProject = styled.div`
background-image: url('https://media.licdn.com/dms/image/D4E2DAQEE5eZhMfQIoQ/profile-treasury-image-shrink_800_800/0/1686964493212?e=1692478800&v=beta&t=wDaVRGchsrQZg9fBenA2i3_EjXAHcdlazEPpuNUjqKM');
height: 100%;
width: 100%;
background-clip: content-box;

&:hover{
    cursor: pointer;
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
}
`

export default Projects