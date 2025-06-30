import React from 'react'
import { useState, createContext } from 'react';

import { useNavigate } from'react-router-dom';

import { toast } from 'react-toastify';

const OrganizerContext = createContext();







const OrganizerContextProvider = (props)=>{
    

    const [isSidebarOpen, setSidebarOpen] = useState(false);
      const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
      };


    
    const value = {
        isSidebarOpen, setSidebarOpen, toggleSidebar
    };
    
    
    return (
        <OrganizerContext.Provider value={value}>
            {props.children}
        </OrganizerContext.Provider>
    )
    
    
    
}


export { OrganizerContext };

export default OrganizerContextProvider