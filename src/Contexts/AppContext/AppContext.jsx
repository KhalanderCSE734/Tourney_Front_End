import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [selectedLocation, setSelectedLocation] = useState('all');

  return (
    <AppContext.Provider value={{ selectedLocation, setSelectedLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;