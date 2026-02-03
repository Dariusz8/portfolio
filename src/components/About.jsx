import React, { useContext } from "react";
import '../About.css';
import { MyStateContext } from "./App";

const About = () => {

    const {selectedLanguage, moreMe, setMoreMe} = useContext(MyStateContext);

    const handleDotdotdotClick = () => {
        setMoreMe(true);
    }
    const EnAbout = () => 
        <>
        <h2 className="AboutHeader">
            Hello World! 
        </h2>
        <p className="AboutText">
            As a dedicated professional with a B.Sc. in Cell and Molecular Biology and a passion for advancing science, I bring a unique blend of laboratory expertise and technical proficiency to the field of clinical research coordination in biobanking. My experience as a lab technician has refined my attention to detail, multitasking abilities, and teamwork skills, all essential for managing complex sample collections and maintaining high-quality standards in biobanking.
            <p>Recognizing the transformative role of technology in research, I completed a full-stack web development bootcamp, equipping me with the skills to streamline data management processes and enhance operational efficiency. I am excited to leverage this combination of scientific knowledge and technical capability to support the growth of biobanking initiatives, ensuring accurate sample handling, robust data integration, and meaningful contributions to impactful research outcomes.</p>
            <p>I thrive in dynamic environments that encourage continual learning and innovation and look forward to contributing to the RI-MUHC and their 2030 vision.<div className="Dotdotdot" onMouseDown={handleDotdotdotClick}>[...]</div></p>
        </p>
        </>

    const FrAbout = () => 
        <>
        <h2 className="AboutHeader">
            Bonjour le monde!
        </h2>
        <p className="AboutText">
        En tant que professionnel dévoué titulaire d’un B.Sc. en biologie cellulaire et moléculaire et passionné par l’avancement des sciences, j’apporte une combinaison unique d’expertise en laboratoire et de compétences techniques au domaine de la coordination de la recherche clinique en biobanque. Mon expérience en tant que technicien de laboratoire a affiné mon souci du détail, mes capacités à gérer plusieurs tâches simultanément et mes compétences en travail d’équipe, toutes essentielles pour gérer des collections d’échantillons complexes et maintenir des normes de qualité élevées en biobanque.
        </p>
        <p className="AboutText">Reconnaissant le rôle transformateur de la technologie dans la recherche, j’ai complété un bootcamp de développement web full-stack, me dotant des compétences nécessaires pour optimiser les processus de gestion des données et améliorer l’efficacité opérationnelle. Je suis enthousiaste à l’idée de tirer parti de cette combinaison de connaissances scientifiques et de capacités techniques pour soutenir la croissance des initiatives en biobanque, en garantissant une gestion précise des échantillons, une intégration robuste des données et des contributions significatives à des résultats de recherche impactants.
        </p>
        <p className="AboutText">Je m’épanouis dans des environnements dynamiques favorisant l’apprentissage continu et l’innovation, et j’ai hâte de contribuer au CUSM et à leur vision pour 2030. <div className="Dotdotdot" onMouseDown={handleDotdotdotClick}>[...]</div></p>
        </>

    const PlAbout = () => 
        <>
        <h2 className="AboutHeader">
            Witaj, świecie! 
        </h2>
        <p className="AboutText">
            Jako oddany profesjonalista z tytułem licencjata nauk ścisłych (B.Sc.) w dziedzinie biologii komórkowej i molekularnej oraz pasją do rozwoju nauki, wnoszę unikalne połączenie wiedzy laboratoryjnej i umiejętności technicznych do obszaru koordynacji badań klinicznych w biobankowaniu. Moje doświadczenie jako technika laboratoryjnego pozwoliło mi udoskonalić dbałość o szczegóły, zdolności do wielozadaniowości oraz umiejętność pracy zespołowej – cechy kluczowe w zarządzaniu złożonymi kolekcjami próbek i utrzymywaniu wysokich standardów jakości w biobankowaniu.
        </p>
        <p className="AboutText">
            Uznając rolę technologii w badaniach, ukończyłem intensywny kurs programowania full-stack, zdobywając umiejętności pozwalające na optymalizację procesów zarządzania danymi i poprawę efektywności operacyjnej. Z entuzjazmem zamierzam wykorzystać tę kombinację wiedzy naukowej i zdolności technicznych, aby wspierać rozwój inicjatyw biobankowania, zapewniając precyzyjne zarządzanie próbkami, solidną integrację danych i znaczący wkład w osiąganie ważnych wyników badawczych.
        </p>
        <p className="AboutText">
            Dobrze odnajduję się w dynamicznych środowiskach, które sprzyjają ciągłemu uczeniu się i innowacjom, i z niecierpliwością czekam na możliwość wniesienia swojego wkładu w CUSM i ich wizję na rok 2030.<div className="Dotdotdot" onMouseDown={handleDotdotdotClick}>[...]</div>
        </p>
        </>

    const EspAbout = () => 
        <>
        <h2 className="AboutHeader">
            ¡Hola, mundo! 
        </h2>
        <p className="AboutText">
            Como profesional comprometido con un título de B.Sc. en Biología Celular y Molecular y una pasión por el avance de la ciencia, aporto una combinación única de experiencia en laboratorio y competencias técnicas al campo de la coordinación de investigaciones clínicas en biobancos. Mi experiencia como técnico de laboratorio ha perfeccionado mi atención al detalle, mis habilidades para la multitarea y mi capacidad de trabajo en equipo, todas esenciales para gestionar colecciones complejas de muestras y mantener altos estándares de calidad en los biobancos.
        </p>
        <p className="AboutText">
            Reconociendo el papel de la tecnología en la investigación, completé un bootcamp de desarrollo web full-stack, lo que me dotó de las habilidades necesarias para optimizar los procesos de gestión de datos y mejorar la eficiencia operativa. Estoy entusiasmado por aprovechar esta combinación de conocimientos científicos y capacidades técnicas para apoyar el crecimiento de las iniciativas de biobancos, asegurando un manejo preciso de muestras, una integración sólida de datos y contribuciones significativas a resultados de investigación impactantes.
        </p>
        <p className="AboutText">
            Me desenvuelvo en entornos dinámicos que fomentan el aprendizaje continuo y la innovación, y espero con entusiasmo contribuir al CUSM y a su visión para 2030.<div className="Dotdotdot" onMouseDown={handleDotdotdotClick}>[...]</div>
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