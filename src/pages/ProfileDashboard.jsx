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
      <section
        class="h-[640px] bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 tails-selected-element"
        contenteditable="true"
      >
        <div class="max-w-7xl px-5 py-20 flex flex-col space-y-5 w-full h-full items-center justify-center mx-auto">
          <div class="flex h-full w-full bg-pink rounded-md xl:w-5/12 xl:h-20">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-2xl xl:w-full xl:text-center xl:align-middle xl:m-3.5">
              Your Matches
            </h2>
          </div>
          <div class="flex space-x-5 w-full h-full">
            <div
              class="flex h-full w-full bg-rose-500 rounded-md xl:p-3.5 tails-selected-element"
              contenteditable="true"
            >
              <div class="flex h-full w-full bg-pink-100 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">
              </div>
              </div>

            <div class="flex h-full w-full bg-pink rounded-md xl:h-full xl:w-2/3">
              <div
                class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-pink-300 rounded-lg shadow-2xl px-7 xl:w-80 xl:h-64 xl:mt-16"
                data-rounded="rounded-lg"
                data-rounded-max="rounded-full"
              >
                <h3 class="mb-6 text-2xl font-medium text-center">
                  {" "}
                  Bark At Them! 💕{" "}
                </h3>
                <input
                  type="text"
                  name="email"
                  id="email"
                  class="block w-full px-4 py-3 mb-4  border-2 border-transparent border-pink-200 rounded-lg focus:ring focus:ring-pink-500 focus:outline-none"
                  data-rounded="rounded-lg"
                  data-primary="blue-500"
                  placeholder="Bark..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <div class="block">
                  <button
                    class="w-full px-3 py-4 font-medium text-white bg-rose-500 rounded-lg"
                    data-primary="blue-600"
                    data-rounded="rounded-lg"
                    onClick={handleMessageSubmit}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
            <div
              class="flex h-full w-full bg-rose-500 rounded-md xl:p-3.5 tails-selected-element"
              contenteditable="true"
            >
              <div class="flex h-full w-full bg-pink-100 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">
                {/* Import match */}
              </div>
            </div>
            <div className="border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] mb-3">
        <h2>Messages Sent:</h2>
        <ul>
          {messagesSent.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div> 
          </div>
        </div>
      </section>
      {/* <div className="matches-container py-20 flex justify-between">
        <div className="profile-dog-card-container">
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
      </div> */}
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