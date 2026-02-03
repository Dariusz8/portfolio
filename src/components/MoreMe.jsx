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
        <div>
            <div onMouseDown={handleBiobankingClick}>
                Biobanking
            </div>
            <div onMouseDown={handleSOPClick}>
                SOP
            </div>
            <div onMouseDown={handleViabilityClick}>
                Viability
            </div>
        </div>
        </>
    )
}

export default MoreMe