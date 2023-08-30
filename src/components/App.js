import React from "react";
//import Header from "./Header";
import Body from "./Body";
import {ThemeContextProvider} from "./ThemeContext";

function App() {
  return (
    <ThemeContextProvider >
  
    <Body/>
    </ThemeContextProvider>
  );
}
export default App;