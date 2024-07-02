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
        nightOn,sunOn,selectedLanguage} = useContext(MyStateContext);

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

    const EngHeadings = () => 
        <div className="ButtonsRow" >
            <div className="AboutButton"  onMouseDown={handleAboutClick}>
                About
            </div>
            <div className="ProjectsButton" onMouseDown={handleProjectsClick}>
                Projects
            </div>
            <div className="SkillsButton"  onMouseDown={handleSkillsClick}>
                Skills
            </div>
        </div>

    const FrHeadings = () => 
        <div className="ButtonsRow" >
            <div className="AboutButton"  onMouseDown={handleAboutClick}>
                À propos
            </div>
            <div className="ProjectsButton" onMouseDown={handleProjectsClick}>
                Projets
            </div>
            <div className="SkillsButton"  onMouseDown={handleSkillsClick}>
                Compétences
            </div>
        </div>

    const PlHeadings = () => 
        <div className="ButtonsRow" >
            <div className="AboutButton"  onMouseDown={handleAboutClick}>
                O mnie
            </div>
            <div className="ProjectsButton" onMouseDown={handleProjectsClick}>
                Projekty
            </div>
            <div className="SkillsButton"  onMouseDown={handleSkillsClick}>
                Umiejętności
            </div>
        </div>

    const EspHeadings = () => 
        <div className="ButtonsRow" >
            <div className="AboutButton"  onMouseDown={handleAboutClick}>
                Acerca de
            </div>
            <div className="ProjectsButton" onMouseDown={handleProjectsClick}>
                Proyectos
            </div>
            <div className="SkillsButton"  onMouseDown={handleSkillsClick}>
                Habilidades
            </div>
        </div>

    return(
        <div className="DaBody" >
            <UiControl/>
            <Sidebar/>
            {
            sunOn &&
                <div className="WholeScreen" >
                {selectedLanguage === 'En' && <EngHeadings/>}
                {selectedLanguage === 'Fr' && <FrHeadings/>}
                {selectedLanguage === 'Pl' && <PlHeadings/>}
                {selectedLanguage === 'Esp' && <EspHeadings/>}
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
            {selectedLanguage === 'En' && <EngHeadings/>}
            {selectedLanguage === 'Fr' && <FrHeadings/>}
            {selectedLanguage === 'Pl' && <PlHeadings/>}
            {selectedLanguage === 'Esp' && <EspHeadings/>}
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