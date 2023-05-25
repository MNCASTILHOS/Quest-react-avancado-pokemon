import './footer.css'
import React from "react";
import {faArrowUp} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
    
    const backToTop = () =>{
        window.scrollTo({
          top: 0, 
          behavior: 'smooth'      
        });
    }

    return (
        <div className="footer">
            <span className='icon' onClick={backToTop}> <FontAwesomeIcon icon={faArrowUp} />  </span>       

            <div className="informations">
                <h3 className='description'>Powered by PokéApi.co</h3>
                <h3 className='description'> Created by Miriam Castilhos</h3>
            </div>
        </div>
 
    )
}