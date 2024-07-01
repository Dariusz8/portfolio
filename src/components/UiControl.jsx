import '../UiControl.css';
import React, { useContext } from "react";
import { MyStateContext } from './App';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const UiControl = () => {

    const {nightOn,setNightOn,sunOn,setSunOn,selectedLanguage,setSelectedLanguage
    } = useContext(MyStateContext);

    const handleDarkMode = () => {
        setSunOn(false);
        setNightOn(true);
    }

    const handleSunMode = () => {
        setNightOn(false);
        setSunOn(true);
    }

    const handleLanguageChange = (event) => {
        setSelectedLanguage(event.target.value);
      };

    return(
        <div>
            {sunOn &&
            <div>
            <button className="ModeButton"  onMouseDown={handleDarkMode}>
                <p className="DarkModeButton">
                    <BsFillMoonStarsFill/>
                </p>
            </button>
            <div className='LangButton'>
                    <select className='LangSelect' id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                        <option className='LangOptions' value="En">En</option>
                        <option className='LangOptions' value="Fr">Fr</option>
                        <option className='LangOptions' value="Pl">Pl</option>
                        <option className='LangOptions' value="Esp">Esp</option>                   
                    </select>
            </div>
            </div>
            }
            {nightOn &&
            <div>
                <button className="ModeButton"  onMouseDown={handleSunMode}>
                    <p className="SunModeButton">
                        <BsFillSunFill/>
                    </p>
                </button>
                <div className='DarkLangButton '>
                    <select className=' DarkLangSelect' id="language" value={selectedLanguage} onChange={handleLanguageChange}>
                        <option className='  DarkLangOptions' value="En">En</option>
                        <option className='  DarkLangOptions' value="Fr">Fr</option>
                        <option className='  DarkLangOptions' value="Pl">Pl</option>
                        <option className='  DarkLangOptions' value="Esp">Esp</option>                   
                    </select>
            </div>
            </div>
            }
        </div>
    )
}

export default UiControl;