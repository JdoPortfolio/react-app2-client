import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation } from "react-router-dom";
import DogCard from "../components/DogCard.jsx";
import ProfileDogCard from "../components/ProfileDogCard.jsx";
import { useSharedVariables } from "../context/SharedVariableContextFile.jsx";

const ProfileDashboard = () => {
  const location = useLocation();
  const { userCreatedProfiles, dogsData } = useSharedVariables();

  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const matchedPaws = useMemo(() => JSON.parse(decodeURIComponent(queryParams.get('matchedPaws') || '[]')), [queryParams]);

  console.log("matchedPaws:", matchedPaws);

  const [matchedDogs, setMatchedDogs] = useState([]);
  const [message, setMessage] = useState('');
  const [messagesSent, setMessageSent] = useState([]);

  useEffect(() => {
    const getMatchedDogs = () => {
      return dogsData.filter(dog => matchedPaws.some(matchedPaw => matchedPaw.name === dog.name));
    };

    setMatchedDogs(getMatchedDogs());
  }, [matchedPaws, dogsData]);

  const handleMessageSubmit = () => {
    if (message.trim() !== '') {
      setMessageSent(prevMessages => [...prevMessages, message])
      setMessage('')
    }
  }

  return (
    <div>
      <Navbar />
      <div className="matches-container py-20 flex justify-between">
        <div className="profile-dog-card-container">
          {/* Set showButton to false when you are in ProfileDashboard */}
          <ProfileDogCard dog={userCreatedProfiles[0]} showButton={false} />
        </div>

        <div className="text-box-container">
          <input 
          className="border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] mb-3"
          type="text" 
          placeholder="Send bark!"
          value={message}
          onChange={(e) => setMessage(e.target.value)} 
          />
          <button className="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-sm rounded-full text-xl px-12 py-4 text-center me-2 mb-2 ml-9 mt-8 justify-center items-center" onClick={handleMessageSubmit}>Ool to the moon!</button>
        </div>

        <div className="profile-dog-card-container">
          <h2>Matched Paws:</h2>
          {matchedDogs.map((dog) => (
            <DogCard
              key={dog.name}
              dog={dog}
              showThrowBoneButton={false}
            />
          ))}
        </div>
      </div>
      <div className="messages-container">
        <h2>Messages Sent:</h2>
        <ul>
          {messagesSent.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileDashboard;


// ProfileDashboard.jsx
// import React, { useEffect, useState, useMemo } from "react";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import { useLocation } from "react-router-dom";
// import DogCard from "../components/DogCard.jsx";
// import ProfileDogCard from "../components/ProfileDogCard.jsx";
// import { useSharedVariables } from "../context/SharedVariableContextFile.jsx";

// const ProfileDashboard = () => {
//   // ...existing code

//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20 flex justify-between">
//         {/* ...existing code */}
//         <div className="profile-dog-card-container">
//           <h2>Matched Paws:</h2>
//           {matchedDogs.map((dog) => (
//             <DogCard
//               key={dog.name}
//               dog={dog}
//               showThrowBoneButton={false}
//             />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;


// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar.jsx";
// import Footer from "../components/Footer.jsx";
// import { useLocation } from "react-router-dom";
// import DogCard from "../components/DogCard.jsx";
// import ProfileDogCard from "../components/ProfileDogCard.jsx";
// import { useSharedVariables } from "../context/SharedVariableContextFile.jsx";

// const ProfileDashboard = () => {
//   const location = useLocation();
//   const queryParams = new URLSearchParams(location.search);
//   const matchedPaws = JSON.parse(decodeURIComponent(queryParams.get('matchedPaws')));

//   console.log("matchedPaws:", matchedPaws);

//   const { userCreatedProfiles, dogsData } = useSharedVariables();

//   const [matchedDogs, setMatchedDogs] = useState([]);

//   useEffect(() => {
//     // Assuming you have a function to filter dogsData based on matchedPaws
//     const getMatchedDogs = () => {
//       return dogsData.filter(dog => matchedPaws.some(matchedPaw => matchedPaw.name === dog.name));
//     };

//     setMatchedDogs(getMatchedDogs());
//   }, [matchedPaws, dogsData]);

//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20 flex justify-between">
//         <div className="profile-dog-card-container">
//           {/* Assuming you have a dog profile from userCreatedProfiles */}
//           <ProfileDogCard dog={userCreatedProfiles[0]} />
//         </div>

//         <div className="profile-dog-card-container">
//           <h2>Matched Paws:</h2>
//           {matchedDogs.map((dog) => (
//             <DogCard key={dog.name} dog={dog} />
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProfileDashboard;