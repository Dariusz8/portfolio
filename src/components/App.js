import React, { createContext, useState} from "react";
import Body from "./Body";

export const MyStateContext = createContext();

function App() {

  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [nightOn, setNightOn] = useState(false);
  const [sunOn, setSunOn] = useState(true);
  const [menuActive, setMenuActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('english');

  return (
    <MyStateContext.Provider value ={{aboutActive,setAboutActive,projectsActive,setProjectsActive,skillsActive,
      setSkillsActive,nightOn,setNightOn,sunOn,setSunOn,menuActive,setMenuActive,selectedLanguage,setSelectedLanguage}}>
    <Body/>
    </MyStateContext.Provider>
  );
}
export default App;