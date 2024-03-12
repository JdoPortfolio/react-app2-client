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
        const response = await axios.get('http://localhost:4000/dogs');
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


