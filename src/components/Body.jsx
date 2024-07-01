import React, { useContext } from "react";
import '../Body.css';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { MyStateContext } from "./App";
import UiControl from "./UiControl";
import Sidebar from "./Sidebar";

const Body = () => {

    const {aboutActive,setAboutActive,projectsActive,setProjectsActive,skillsActive, setSkillsActive,
        nightOn,sunOn,menuActive} = useContext(MyStateContext);

    const handleAboutClick = () => {
        setProjectsActive(false);
        setSkillsActive(false);
        setAboutActive(true);
    };
    
    const handleProjectsClick = () => {
        setAboutActive(false);
        setSkillsActive(false);
        setProjectsActive(true);
    };
    
    const handleSkillsClick = () => {
        setAboutActive(false);
        setProjectsActive(false);
        setSkillsActive(true);
    };

    return(
        <div className="DaBody" >
            <UiControl/>
            <Sidebar/>
            {
            sunOn &&
                <div className="WholeScreen" >
                    {
                    menuActive &&
                <div className="ButtonsRow" >
                    <div className="AboutButton"  onMouseDown={handleAboutClick}>About</div>
                    <div className="ProjectsButton" onMouseDown={handleProjectsClick}>Projects</div>
                    <div className="SkillsButton"  onMouseDown={handleSkillsClick}>Skills</div>
                </div>
                    }
                <div className="WholeContent" >
                <div className="AboutSection" >
                    {
                        aboutActive &&
                        <About/>
                    }
                    {
                        projectsActive &&
                        <Projects/>
                    }
                    {
                        skillsActive &&
                        <Skills/>
                    }
                </div>
                </div>
            </div>
            }
            {nightOn &&
            <div className="NightWholeScreen"  >
                <div>
                </div>
                {
                    menuActive &&
                    <div className="ButtonsRow" >
                        <div className="NightAboutButton"  onMouseDown={handleAboutClick} >About</div>
                        <div className="NightProjectsButton"  onMouseDown={handleProjectsClick} >Projects</div>
                        <div className="NightSkillsButton"  onMouseDown={handleSkillsClick} >Skills</div>
                    </div>
                }
                <div className="NightMode WholeContent">
            <div className="AboutSection"  >
                {
                    aboutActive &&
                    <About/>
                }
                {
                    projectsActive &&
                    <Projects/>
                }
                {
                    skillsActive &&
                    <Skills/>
                }
            </div>
        </div>
            </div>}
        </div>
        
    )
}

export default Body;