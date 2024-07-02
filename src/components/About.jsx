import React, { useContext } from "react";
import '../About.css';
import { MyStateContext } from "./App";

const About = () => {

    const {selectedLanguage} = useContext(MyStateContext);

    const EnAbout = () => 
        <>
        <h2 className="AboutHeader">
            Hello World! 
        </h2>
        <p className="AboutText">
            As a passionate and versatile professional with a B.Sc. in Cell and Molecular Biology and a bootcamp in full-stack web development, I am excited to transition into a field that offers constant new tasks, challenges, and opportunities for growth. Through my work as a lab technician, I honed my attention to detail, multitasking abilities, and effectiveness in a team-based environment. Recognizing the potential of emerging technology in various industries, I pursued web development, gaining proficiency in both front-end and back-end development. I look forward to contributing my diverse skill set and passion for science and technology to a team that values continual learning and the pursuit of impactful outcomes for others.
        </p>
        </>

    const FrAbout = () => 
        <>
        <h2 className="AboutHeader">
            Bonjour le monde!
        </h2>
        <p className="AboutText">
        En tant que professionnel passionné et polyvalent avec une licence en biologie cellulaire et moléculaire et une formation en développement web full-stack, je suis enthousiaste à l'idée de me lancer dans un domaine offrant des tâches nouvelles, des défis et des opportunités de croissance constants. Grâce à mon travail de technicien de laboratoire, j'ai affiné mon attention aux détails, ma capacité à multitâcher et mon efficacité dans un environnement de travail en équipe. Reconnaissant le potentiel des technologies émergentes dans divers secteurs, j'ai poursuivi le développement web, acquérant une expertise en développement front-end et back-end. Je suis impatient de contribuer à une équipe valorisant l'apprentissage continu et la recherche de résultats impactants pour les autres grâce à mon ensemble de compétences diversifiées et ma passion pour la science et la technologie.
        </p>
        </>

    const PlAbout = () => 
        <>
        <h2 className="AboutHeader">
            Witaj, świecie! 
        </h2>
        <p className="AboutText">
        Jako pasjonat i wszechstronny profesjonalista z tytułem licencjata w dziedzinie biologii komórkowej i molekularnej oraz po bootcampie z pełnego stosu rozwoju webowego, jestem podekscytowany możliwością przejścia do dziedziny, która oferuje ciągłe nowe zadania, wyzwania i możliwości rozwoju. Pracując jako technik laboratoryjny, udoskonaliłem swoją dbałość o szczegóły, zdolność do multitaskingu oraz skuteczność w pracy zespołowej. Dostrzegając potencjał technologii w różnych branżach, postanowiłem rozwijać się w kierunku web developmentu, zdobywając biegłość zarówno w front-endzie, jak i back-endzie. Z niecierpliwością czekam na możliwość wniesienia mojego zróżnicowanego zestawu umiejętności oraz pasji do nauki i technologii do zespołu, który ceni ciągłe uczenie się i dążenie do osiągania pomocnych wyników dla innych.
        </p>
        </>

    const EspAbout = () => 
        <>
        <h2 className="AboutHeader">
            ¡Hola, mundo! 
        </h2>
        <p className="AboutText">
            Como profesional apasionado y versátil con una licenciatura en Biología Celular y Molecular y un bootcamp en desarrollo web full-stack, estoy emocionado de hacer la transición a un campo que ofrece nuevas tareas, desafíos y oportunidades de crecimiento constantes. A través de mi trabajo como técnico de laboratorio, perfeccioné mi atención al detalle, la multitarea y la eficacia en un entorno de trabajo en equipo. Reconociendo el potencial de las tecnologías emergentes en diversas industrias, me dediqué al desarrollo web, adquiriendo competencia tanto en el desarrollo front-end como back-end. Espero contribuir con mi diverso conjunto de habilidades y mi pasión por la ciencia y la tecnología a un equipo que valore el aprendizaje continuo y la búsqueda de resultados impactantes para los demás.
        </p>
        </>

    return(
        <div className="AllAboutContent">
            {selectedLanguage === 'En' && <EnAbout/>}
            {selectedLanguage === 'Fr' && <FrAbout/>}
            {selectedLanguage === 'Pl' && <PlAbout/>}
            {selectedLanguage === 'Esp' && <EspAbout/>}
        </div>
    )
}

export default About