// src/context/SharedVariablesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

const SharedVariablesContext = createContext();

export const useSharedVariables = () => useContext(SharedVariablesContext);

export const SharedVariablesProvider = ({ children }) => {
  const [dogsData, setDogsData] = useState([]);
  const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        // Replace '/path/to/your/db.json' with the actual path or URL to your db.json
        // If db.json is served locally or through a server, adjust the URL accordingly.
        const response = await axios.get('react-app2/json-server-backend/db.json');
        setDogsData(response.data); // Axios wraps the response data inside a `data` object
      } catch (error) {
        console.error("Failed to fetch dog data:", error);
      }
    };

    fetchDogData();
  }, []);

  const addUserCreatedProfile = (profile) => {
    setUserCreatedProfiles((currentProfiles) => [...currentProfiles, profile]);
  };

  return (
    <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile }}>
      {children}
    </SharedVariablesContext.Provider>
  );
};









// // src/context/SharedVariablesContext.js
// import React, { createContext, useContext, useState } from 'react';

// const SharedVariablesContext = createContext();

// export const useSharedVariables = () => useContext(SharedVariablesContext);

// export const SharedVariablesProvider = ({ children }) => {
//   const [sharedVariable, setSharedVariable] = useState('initialValue'); // Example variable

//   // Define other variables and functions to manipulate them as needed

//   const changeSharedVariable = (newValue) => {
//     setSharedVariable(newValue);
//   };

//   return (
//     <SharedVariablesContext.Provider value={{ sharedVariable, changeSharedVariable }}>
//       {children}
//     </SharedVariablesContext.Provider>
//   );
// };
