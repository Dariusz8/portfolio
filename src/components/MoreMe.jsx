import React, { useContext} from "react";
import '../MoreMe.css';
import { MyStateContext } from "./App";

const MoreMe = () => {

    const {selectedLanguage, biobanking, setBiobanking, sop, setSop, viability, setViability} = useContext(MyStateContext);

    const handleBiobankingClick = () =>{
        setSop(false);
        setViability(false);
        setBiobanking(true);
    }

    const handleSOPClick = () =>{
        setBiobanking(false);
        setViability(false);
        setSop(true);
    }

    const handleViabilityClick = () =>{
        setBiobanking(false);
        setSop(false);
        setViability(true);
    }

    const EnCategories = () =>
        <>
        <h3 className="CategoryOption" onMouseDown={handleBiobankingClick}>
            Biobanking
        </h3>
        <h3 className="CategoryOption" onMouseDown={handleSOPClick}>
            SOP
        </h3>
        <h3 className="CategoryOption" onMouseDown={handleViabilityClick}>
            Viability
        </h3>
        </>

    const FrCategories = () =>
    <>
    <h3 className="CategoryOption" onMouseDown={handleBiobankingClick}>
        Biobanque
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleSOPClick}>
        Procédure Opérationnelle Standard
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleViabilityClick}>
        Viabilité
    </h3>
    </>

    const PlCategories = () =>
    <>
    <h3 className="CategoryOption" onMouseDown={handleBiobankingClick}>
        Biobankowanie
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleSOPClick}>
        Standardowe Procedury Operacyjne
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleViabilityClick}>
        Żywotność
    </h3>
    </>

    const EsCategories = () =>
    <>
    <h3 className="CategoryOption" onMouseDown={handleBiobankingClick}>
        Biobancos
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleSOPClick}>
        Procedimiento Operativo Estándar
    </h3>
    <h3 className="CategoryOption" onMouseDown={handleViabilityClick}>
        Viabilidad
    </h3>
    </>
    return(
        <>
        <h2>Articles of interest</h2>
        <div className="ArticleCategory">
            {selectedLanguage === 'En' && <EnCategories/>}
            {selectedLanguage === 'Fr' && <FrCategories/>}
            {selectedLanguage === 'Pl' && <PlCategories/>}
            {selectedLanguage === 'Esp' && <EsCategories/>}
        </div>
        </>
    )
}

export default MoreMe