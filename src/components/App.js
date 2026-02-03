import React, { createContext, useState} from "react";
import Body from "./Body";

export const MyStateContext = createContext();

function App() {

  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [skillsActive, setSkillsActive] = useState(false);
  const [nightOn, setNightOn] = useState(false);
  const [sunOn, setSunOn] = useState(true);
  const [selectedLanguage, setSelectedLanguage] = useState('En');
  const [moreMe, setMoreMe] = useState(false);
  const [biobanking, setBiobanking] = useState(false);
  const [sop, setSop] = useState(false);
  const [viability, setViability] = useState(false);

  return (
    <MyStateContext.Provider value ={{aboutActive,setAboutActive,projectsActive,setProjectsActive,skillsActive,
      setSkillsActive,nightOn,setNightOn,sunOn,setSunOn,selectedLanguage,setSelectedLanguage,
      moreMe, setMoreMe, biobanking, setBiobanking, sop, setSop, viability, setViability}}>
    <Body/>
    </MyStateContext.Provider>
  );
}
export default App;