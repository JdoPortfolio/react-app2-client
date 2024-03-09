// src/context/SharedVariablesContext.js
import React, { createContext, useContext, useState } from 'react';

const SharedVariablesContext = createContext();

export const useSharedVariables = () => useContext(SharedVariablesContext);

export const SharedVariablesProvider = ({ children }) => {
  const [sharedVariable, setSharedVariable] = useState('initialValue'); // Example variable

  // Define other variables and functions to manipulate them as needed

  const changeSharedVariable = (newValue) => {
    setSharedVariable(newValue);
  };

  return (
    <SharedVariablesContext.Provider value={{ sharedVariable, changeSharedVariable }}>
      {children}
    </SharedVariablesContext.Provider>
  );
};
