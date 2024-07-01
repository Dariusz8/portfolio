import '../UiControl.css';
import React, { useContext } from "react";
import { MyStateContext } from './App';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";

const UiControl = () => {

    const {nightOn,setNightOn,sunOn,setSunOn
    } = useContext(MyStateContext);

    const handleDarkMode = () => {
        setSunOn(false);
        setNightOn(true);
    }

    const handleSunMode = () => {
        setNightOn(false);
        setSunOn(true);
    }

    return(
        <div>
            {sunOn &&
            <button className="ModeButton"  onClick={handleDarkMode}>
                <p className="DarkModeButton">
                    <BsFillMoonStarsFill/>
                </p>
            </button>
            }
            {nightOn &&
            <button className="ModeButton"  onClick={handleSunMode}>
                <p className="SunModeButton">
                    <BsFillSunFill/>
                </p>
            </button>
            }
        </div>
    )
}

export default UiControl