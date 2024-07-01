import React, { useContext } from "react";
import '../Sidebar.css';
import { MyStateContext } from "./App";
import {RiMenuUnfoldLine} from "react-icons/ri";
import {FiLinkedin} from "react-icons/fi";
import {FiGithub} from "react-icons/fi";
import {TfiEmail} from "react-icons/tfi";

const Sidebar = () => {

    const {menuActive,setMenuActive,nightOn,
        sunOn} = useContext(MyStateContext);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return(
        <div>
            {sunOn &&
                <div className="HeadLinks" >
                    <button className="MenuButton"  onMouseDown={toggleMenu}>
                        <RiMenuUnfoldLine/>
                    </button>
                    <p className="HeadLink"  href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer">
                        <p className="Linkedin">
                            <FiLinkedin/> 
                        </p>
                    </p>
                    <p className="HeadLink" href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer">
                        <p className="Github" >
                            <FiGithub/>
                        </p>
                    </p>
                    <p className="HeadLink" href="mailto:dariusz.czeczuk@hotmail.com">
                        <p className="Email" >
                            <TfiEmail/>
                        </p>
                    </p>
                </div>
            }
            {nightOn &&
                <div className="NightHeadLinks" >
                    <div className="NightMenuButton"  onMouseDown={toggleMenu}>
                        <RiMenuUnfoldLine/>
                    </div>
                    <p className="HeadLink" href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer">
                        <p className="Linkedin">
                            <FiLinkedin/>
                        </p>
                    </p>
                    <p className="HeadLink" href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer">
                        <p className="Github" >
                            <FiGithub/>
                        </p>
                    </p>
                    <p className="HeadLink" href="mailto:dariusz.czeczuk@hotmail.com">
                        <p className="Email">
                            <TfiEmail/>
                        </p>
                    </p>
                </div>
            }
        </div>
    )
}
export default Sidebar;