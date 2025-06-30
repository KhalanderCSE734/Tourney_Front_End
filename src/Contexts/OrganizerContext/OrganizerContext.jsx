import React from 'react'
import { useState, createContext } from 'react';

import { useNavigate } from'react-router-dom';

import { toast } from 'react-toastify';

const OrganizerContext = createContext();







const OrganizerContextProvider = (props)=>{
    
    
    const value = {
    
    };
    
    
    return (
        <OrganizerContext.Provider value={value}>
            {props.children}
        </OrganizerContext.Provider>
    )
    
    
    
}


export { OrganizerContext };

export default OrganizerContextProvider