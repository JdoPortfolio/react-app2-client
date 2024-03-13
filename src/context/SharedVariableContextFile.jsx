
// src/context/SharedVariablesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is installed and imported

const SharedVariablesContext = createContext();

export const useSharedVariables = () => useContext(SharedVariablesContext);

export const SharedVariablesProvider = ({ children }) => {
  const [dogsData, setDogsData] = useState([]);
  const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);

  // Function to fetch existing dogs data
  const fetchDogData = async () => {
    try {
      const response = await axios.get('http://localhost:4000/dogs');
      setDogsData(response.data); // Assuming the response.data directly contains the array of dogs
    } catch (error) {
      console.error("Failed to fetch dog data:", error);
    }
  };

  // Function to fetch user-created profiles
  const fetchUserCreatedProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:4000/mydogs');
      setUserCreatedProfiles(response.data); // Assuming the response.data directly contains the array of user-created profiles
    } catch (error) {
      console.error("Failed to fetch user-created profiles:", error);
    }
  };

  // useEffect hook to fetch data on component mount
  useEffect(() => {
    fetchDogData();
    fetchUserCreatedProfiles();
  }, []);

  // Function to add a new user-created profile
  const addUserCreatedProfile = async (profile) => {
    try {
      await axios.post('http://localhost:4000/mydogs', profile);
      fetchUserCreatedProfiles(); // Re-fetch user-created profiles to update the local state after adding a new profile
    } catch (error) {
      console.error("Failed to add user-created profile:", error);
    }
  };

  return (
    <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile }}>
      {children}
    </SharedVariablesContext.Provider>
  );
};


// // src/context/SharedVariablesContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const SharedVariablesContext = createContext();

// export const useSharedVariables = () => useContext(SharedVariablesContext);

// export const SharedVariablesProvider = ({ children }) => {
//   const [dogsData, setDogsData] = useState([]);
//   const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);

//   useEffect(() => {
//     const fetchDogData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/dogs');
//         setDogsData(response.data); // Assuming the response.data directly contains the array of dogs
//       } catch (error) {
//         console.error("Failed to fetch dog data:", error);
//       }
//     };

//     const fetchUserCreatedProfiles = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/mydogs');
//         setUserCreatedProfiles(response.data); // Assuming the response.data directly contains the array of user-created profiles
//       } catch (error) {
//         console.error("Failed to fetch user-created profiles:", error);
//       }
//     };

//     fetchDogData();
//     fetchUserCreatedProfiles();
//   }, []);

//   const addUserCreatedProfile = async (profile) => {
//     try {
//       await axios.post('http://localhost:4000/mydogs', profile);
//       fetchUserCreatedProfiles(); // Re-fetch user-created profiles to update the local state
//     } catch (error) {
//       console.error("Failed to add user-created profile:", error);
//     }
//   };

//   return (
//     <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile }}>
//       {children}
//     </SharedVariablesContext.Provider>
//   );
// };


// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios

// const SharedVariablesContext = createContext();

// export const useSharedVariables = () => useContext(SharedVariablesContext);

// export const SharedVariablesProvider = ({ children }) => {
//   const [dogsData, setDogsData] = useState([]);
//   const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);

//   useEffect(() => {
//     const fetchDogData = async () => {
//       try {
//         const response = await axios.get('http://localhost:4000/dogs');
//         setDogsData(response.data); 
//       } catch (error) {
//         console.error("Failed to fetch dog data:", error);
//       }
//     };

//     fetchDogData();
//   }, []);


//   const addUserCreatedProfile = async (profile) => {
//     try {
//       const response = await axios.post('http://localhost:4000/mydogs', profile);
//       setUserCreatedProfiles((currentProfiles) => [...currentProfiles, response.data]);
//     } catch (error) {
//       console.error("Failed to add user-created profile:", error);
//     }
//   };
//   // const addUserCreatedProfile = (profile) => {
//   //   setUserCreatedProfiles((currentProfiles) => [...currentProfiles, profile]);
//   // };

//   return (
//     <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile }}>
//       {children}
//     </SharedVariablesContext.Provider>
//   );
// };



