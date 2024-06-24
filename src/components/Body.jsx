import React, {useState} from "react";
import '../Body.css';
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";
import {RiMenuUnfoldLine} from "react-icons/ri";

const Body = () => {
    const [AboutActive, setAboutActive] = useState(false);
    const [ProjectsActive, setProjectsActive] = useState(false);
    const [SkillsActive, setSkillsActive] = useState(false);
    const [nightOn, setNightOn] = useState(false);
    const [sunOn, setSunOn] = useState(true);
    const [MenuActive, setMenuActive] = useState(false);

    const handleDarkMode = () => {
        setSunOn(false);
        setNightOn(true);
    }

    const handleSunMode = () => {
        setNightOn(false);
        setSunOn(true);
    }

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

    const toggleMenu = () => {
        setMenuActive(!MenuActive);
      };

    return(
        <div className="DaBody" >
            {
                sunOn &&
                <div className="WholeScreen" >
                    <div className="HeadLinks" >
                        <button className="MenuButton"  onClick={toggleMenu}>
                            <RiMenuUnfoldLine/>
                        </button>
                        <p className="HeadLink"  href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer">
                            <p className="Linkedin"> <FiLinkedin/> </p>
                        </p>
                        <p className="HeadLink" href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer">
                            <p className="Github" > <FiGithub/> </p>
                        </p>
                        <p className="HeadLink" href="mailto:dariusz.czeczuk@hotmail.com">
                            <p className="Email" ><TfiEmail/></p>
                        </p>
                    </div>
                    {
                        MenuActive &&
                <div className="ButtonsRow" >
                    <div className="AboutButton"  onClick={handleAboutClick}>About</div>
                    <div className="ProjectsButton"  onClick={handleProjectsClick}>Projects</div>
                    <div className="SkillsButton"  onClick={handleSkillsClick}>Skills</div>
                </div>
                    }
                
                <button className="ModeButton"  onClick={handleDarkMode}>
                    <p className="DarkModeButton">
                        <BsFillMoonStarsFill/>
                    </p>
                </button>

                <div className="WholeContent" >
                <div className="AboutSection" >
                    {
                        AboutActive &&
                        <About/>
                    }
                    {
                        ProjectsActive &&
                        <Projects/>
                    }
                    {
                        SkillsActive &&
                        <Skills/>
                    }
                </div>
                </div>
            </div>
            }

            {nightOn &&
            <div className="NightWholeScreen"  >
                <div>
            <div className="NightHeadLinks" >
                <div className="NightMenuButton"  onClick={toggleMenu}>
                    <RiMenuUnfoldLine/>
                </div>
                <p className="HeadLink" href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer">
                    <p className="Linkedin" ><FiLinkedin/></p>
                </p>
                <p className="HeadLink" href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer">
                    <p className="Github" ><FiGithub/></p>
                </p>
                <p className="HeadLink" href="mailto:dariusz.czeczuk@hotmail.com">
                    <p className="Email" ><TfiEmail/></p>
                </p>
            </div>
                </div>
                {
                    MenuActive &&
                    <div className="ButtonsRow" >
                        <div className="NightAboutButton"  onClick={handleAboutClick} >About</div>
                        <div className="NightProjectsButton"  onClick={handleProjectsClick} >Projects</div>
                        <div className="NightSkillsButton"  onClick={handleSkillsClick} >Skills</div>
                    </div>
                }
                

                <button className="ModeButton" onClick={handleSunMode}>
                <p className="SunModeButton" ><BsFillSunFill /></p>
                </button>

                <div className="NightMode WholeContent">
            <div className="AboutSection"  >
                {
                    AboutActive &&
                    <About/>
                }
                {
                    ProjectsActive &&
                    <Projects/>
                }
                {
                    SkillsActive &&
                    <Skills/>
                }
            </div>
        </div>
            </div>}
        </div>
        
    )
}

export default Body;