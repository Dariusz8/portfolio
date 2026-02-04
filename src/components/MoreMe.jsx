import React from "react";
import '../MoreMe.css';

const MoreMe = () => {

    const handleBiobankingClick = () =>{
        
    }

    const handleSOPClick = () =>{
        
    }

    const handleViabilityClick = () =>{
        
    }
    return(
        <>
        <h2>Articles of interest</h2>
        <div className="ArticleCategory">
            <h3 className="CategoryOption" onMouseDown={handleBiobankingClick}>
                Biobanking
            </h3>
            <h3 className="CategoryOption" onMouseDown={handleSOPClick}>
                SOP
            </h3>
            <h3 className="CategoryOption" onMouseDown={handleViabilityClick}>
                Viability
            </h3>
        </div>
        </>
    )
}

export default MoreMe