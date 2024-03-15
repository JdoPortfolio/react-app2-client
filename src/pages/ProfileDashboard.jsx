import React, { useEffect, useState, useMemo, useContext } from "react";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useLocation, useParams } from "react-router-dom";
import DogCard from "../components/DogCard.jsx";
import ProfileDogCard from "../components/ProfileDogCard.jsx";
import { useSharedVariables } from "../context/SharedVariableContextFile.jsx";
import Slider from "react-slick";

const ProfileDashboard = ({ showButton }) => {
  const location = useLocation();
  const { userCreatedProfiles, dogsData } = useSharedVariables();

  const { myDog, matchedDog } = useParams();

  const [yourDog, setYourDog] = useState(null);
  const [theirDog, setTheirDog] = useState(null);

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search]
  );
  const matchedPaws = useMemo(
    () =>
      JSON.parse(decodeURIComponent(queryParams.get("matchedPaws") || "[]")),
    [queryParams]
  );

  console.log("matchedPaws:", matchedPaws);

  const [matchedDogs, setMatchedDogs] = useState([]);
  const [message, setMessage] = useState("");
  const [messagesSent, setMessageSent] = useState([]);

  const handleMessageSubmit = () => {
    if (message.trim() !== "") {
      setMessageSent((prevMessages) => [...prevMessages, message]);
      setMessage("");
    }
  };

  useEffect(() => {
    if (dogsData.length > 0 && userCreatedProfiles.length > 0) {
      let firstDog = userCreatedProfiles.find((dog) => dog.id == myDog);
      let secondDogString = matchedDog.split("%20").join(" ");
      let secondDog = dogsData.find((dog) => dog.name == matchedDog);
      setYourDog(firstDog);
      setTheirDog(secondDog);
    }
  }, [dogsData, userCreatedProfiles]);

  return (
    <div>
      <Navbar />
      <section
        class="h-[640px] bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50  tails-selected-element"
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
            >
              <div class="flex h-full w-full bg-pink-100 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full overflow-hidden">
                <ProfileDogCard dog={yourDog} showButton={showButton} />
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
              
            >
              <div class="flex h-full w-full bg-pink-100 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">
                <DogCard dog={theirDog} showThrowBoneButton={false} />
              </div>
            </div>
          </div>
            <div className="border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] mb-3 w-[50vw] p-2 flex-3 ">
              <h2 className="ml-11">Messages Sent:</h2>
              <ul className="ml-11 mr-11 overflow-y-scroll h-20 dog-chat">
                {messagesSent.map((msg, index) => 
                  <li style={{scrollSnapAlign: "end"}} key={index}>{msg}</li>
                )}
              </ul>
              
            </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProfileDashboard;

