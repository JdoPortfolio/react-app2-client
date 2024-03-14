
// src/context/SharedVariablesContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { JSON_SERVER } from '../services/JSON_SERVER';

const SharedVariablesContext = createContext();

export const useSharedVariables = () => useContext(SharedVariablesContext);

export const SharedVariablesProvider = ({ children }) => {
  const [dogsData, setDogsData] = useState([]);
  const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);



  const fetchDogData = async () => {
    try {
      const response = await axios.get(JSON_SERVER + '/dogs');
      setDogsData(response.data); 
    } catch (error) {
      console.error("Failed to fetch dog data:", error);
    }
  };


  const fetchUserCreatedProfiles = async () => {
    try {
      const response = await axios.get(JSON_SERVER + '/mydogs');
      setUserCreatedProfiles(response.data); 
    } catch (error) {
      console.error("Failed to fetch user-created profiles:", error);
    }
  };

  useEffect(() => {
    fetchDogData();
    fetchUserCreatedProfiles();
  }, []);




  const addUserCreatedProfile = async (profile) => {
    try {
      const response = await axios.post(JSON_SERVER + '/mydogs', profile);
      setUserCreatedProfiles(prevProfiles => [...prevProfiles, response.data]);
      return response
    } catch (error) {
      console.error("Failed to add user-created profile:", error);
    }
  };

  return (
    <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile, fetchUserCreatedProfiles }}>
      {children}
    </SharedVariablesContext.Provider>
  );
};




























// src/context/SharedVariablesContext.js
// import React, { createContext, useContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const SharedVariablesContext = createContext();


// export const useSharedVariables = () => useContext(SharedVariablesContext);

// export const SharedVariablesProvider = ({ children }) => {
//   const [dogsData, setDogsData] = useState([]);
//   const [userCreatedProfiles, setUserCreatedProfiles] = useState([]);

//   // Removed userUpdatedProfiles as it seems redundant with the current implementation.
//   // If userUpdatedProfiles serve a different purpose, consider adding it back with clear distinction.

//   const fetchDogData = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/dogs');
//       setDogsData(response.data);
//     } catch (error) {
//       console.error("Failed to fetch dog data:", error);
//     }
//   };

//   const fetchUserCreatedProfiles = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/mydogs');
//       setUserCreatedProfiles(response.data);
//     } catch (error) {
//       console.error("Failed to fetch user-created profiles:", error);
//     }
//   };

//   useEffect(() => {
//     fetchDogData();
//     fetchUserCreatedProfiles();
//     // Removed fetchUserUpdatedProfiles due to the missing dogId parameter.
//   }, []);

//   const addUserCreatedProfile = async (profile) => {
//     try {
//       const response = await axios.post('http://localhost:4000/mydogs', profile);
//       // Optimistically update the local state without refetching all profiles
//       setUserCreatedProfiles(prevProfiles => [...prevProfiles, response.data]);
//     } catch (error) {
//       console.error("Failed to add user-created profile:", error);
//     }
//   };

//   // If addUserUpdatedProfile is meant for updates, use axios.put/patch and optimistically update the state
//   // This is an example assuming addUserUpdatedProfile is meant for updating existing profiles.
//   const updateUserProfile = async (profileId, updatedProfile) => {
//     try {
//       await axios.put(`http://localhost:4000/mydogs/${profileId}`, updatedProfile);
//       // Optimistically update the profile in the state
//       setUserCreatedProfiles(prevProfiles =>
//         prevProfiles.map(profile => profile.id === profileId ? { ...profile, ...updatedProfile } : profile)
//       );
//     } catch (error) {
//       console.error("Failed to update profile:", error);
//     }
//   };

//   return (
//     <SharedVariablesContext.Provider value={{ dogsData, userCreatedProfiles, addUserCreatedProfile, updateUserProfile }}>
//       {children}
//     </SharedVariablesContext.Provider>
//   );
// };








































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



