// import React, { useContext, useState } from "react";
// import styled  from "styled-components";
// import {FiLinkedin} from "react-icons/fi";
// import {FiGithub} from "react-icons/fi";
// import {TfiEmail} from "react-icons/tfi";
// import {RiMenuUnfoldLine} from "react-icons/ri";
// import {RiMenuFoldLine} from "react-icons/ri";
// import  ThemeContext  from "./ThemeContext";

// const Header = () =>{
//     const { nightOn, setNightOn, sunOn, setSunOn } = useContext(ThemeContext);
//     const [MenuActive, setMenuActive] = useState(false);

//     const toggleMenu = () => {
//         setMenuActive(!MenuActive);
//       };

//     return(
//         <div>
//         {
//             sunOn &&
//         <div>
//             <HeadName>Dariusz Czeczuk</HeadName>
//             <HeadLinks>
//                 <MenuButton onClick={toggleMenu}><RiMenuUnfoldLine/></MenuButton>
//                 <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
//                 <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
//                 <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
//             </HeadLinks>
//         </div>
//         }
//         {
//             nightOn &&
//         <div>
//             <HeadName className="NightMode">Dariusz Czeczuk</HeadName>
//             <HeadLinks className="NightMode">
//                 <MenuButton onClick={toggleMenu}><RiMenuUnfoldLine/></MenuButton>
//                 <HeadLink href="https://www.linkedin.com/in/dariusz-czeczuk/" target="_blank" rel="noopener noreferrer"><Linkedin><FiLinkedin/></Linkedin></HeadLink>
//                 <HeadLink href="https://github.com/dariusz8" target="_blank" rel="noopener noreferrer"><Github><FiGithub/></Github></HeadLink>
//                 <HeadLink href="mailto:dariusz.czeczuk@hotmail.com"><Email><TfiEmail/></Email></HeadLink>
//             </HeadLinks>
//         </div>
//         }
//         </div>
//     )
// }

// const HeadName = styled.h1`
// font-size: 42px;
// font-style: italic;
// margin-left:40vw;
// //text-shadow: 1vh 1vw;
// .NightMode{
//         background-color: black;
//     }
// `
// const HeadLinks = styled.div`
// display:flex;
// flex-direction:column;
// column-gap:7vw;
// position: fixed;
// left:2vw;
// top:25vh; 
// z-index: 1;
// color: rgb(0,155,0);
// //border:solid 5px red;
// .NightMode{
//         background-color: black;
//         //color:white;
//     }
// `
// const Linkedin = styled.p`
// font-size:22px;

// &:hover{
//     scale:2;
// }
// `
// const Github = styled.p`
// font-size:22px;

// &:hover{
//     scale:2;
// }
// `
// const Email = styled.p`
// font-size:22px;

// &:hover{
//     scale:2;
// }
// `
// const HeadLink = styled.a`
// color:inherit;
// text-decoration: none;
// `
// const MenuButton = styled.button`
// background-color: transparent;
// border: none;
// font-size:22px;
// color: rgb(0,155,0);
// &:hover{
//     cursor: pointer;
//     scale:2;
// }
// `

// export default Header