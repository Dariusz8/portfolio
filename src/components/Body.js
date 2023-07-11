import React from "react";
import styled from "styled-components";
import About from "./About";


const Body = () => {
    return(
        <WholeContent>
            <About/>
        </WholeContent>
    )
}

const WholeContent = styled.div`
width:100vw;
height:87vh;
border: solid 5px purple;
position: fixed;
top:13vh;
display:flex;
align-items: center;
`

export default Body;