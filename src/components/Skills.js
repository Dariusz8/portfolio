import React from "react";
import styled from "styled-components";

const Skills = () =>{
    return(
        <AllSkillsContent>
            <SkillsText>
                React
            </SkillsText>
        </AllSkillsContent>
    )
}

const AllSkillsContent = styled.div`
width:48vw;
height:87vh;
//border: solid 5px purple;
position: fixed;
left:50vw;
top:27vh;
`
const SkillsText = styled.p`
`

export default Skills;