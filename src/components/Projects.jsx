import React from "react";
import '../Projects.css';
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

const Projects = () => {

    const cld = new Cloudinary({
        cloud:{
            cloudName: 'dly85se71'
        }
    })

    const starpathScreenShot = cld.image('starpath_screenshot');

    const redirectToExternalURL = (url) =>{
        window.open(url, "_blank");
    }
    
    return(
        <div className="ProjectsContainer" >
            <AdvancedImage className="StarWarsProject" cldImg={starpathScreenShot} onClick={() => redirectToExternalURL("https://share.vidyard.com/watch/Vb8SfnwqnrtSNL93ZNeyiV?")}/>
            <div className="BootGroup" onClick={() => redirectToExternalURL("https://github.com/Dariusz8/groupProjectECommerce")} >Group Project</div>
        </div>
    )
}

export default Projects