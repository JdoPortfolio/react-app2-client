import React, { useEffect, useState } from "react";
import { useSharedVariables } from "../context/SharedVariableContextFile";
import DogCard from "../components/DogCard";
import ProfileDogCard from "../components/ProfileDogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import BoneIcon from "../assets/boneicon.png";
const MatchDogsPage = () => {
  const { userCreatedProfiles, dogsData } = useSharedVariables();
  const [selectedDogs, setSelectedDogs] = useState([]);
  const navigate = useNavigate();
  const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];
  useEffect(() => {
    if (lastProfile) {
      const initialMatches = findMatches(lastProfile, dogsData);
      setSelectedDogs(initialMatches);
    }
  }, [lastProfile, dogsData]);
  const handleDogSelect = (selectedDog) => {
    const matchedPaws = encodeURIComponent(JSON.stringify([selectedDog]));
    navigate(`/profile?matchedPaws=${matchedPaws}`);
  };
  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  const findMatches = (profile, allDogs) => {
    
    return allDogs.filter((dog) => {
      return (
        Math.abs(dog.good_with_children - profile.good_with_children) <= 1 &&
        Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1
      );
    });
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 h-screen w-screen">
        <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100">
          <section
            class="h-[640px] bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 tails-selected-element"
            contenteditable="true"
          >
            <div class="max-w-7xl px-5 py-20 flex space-x-5 w-full h-full items-center justify-center mx-auto">
              <div class="flex h-full w-full bg-pink-100 rounded-2xl xl:p-12 ">
                <div class="flex h-full w-full bg-pink-1oo rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">
                  <ProfileDogCard dog={lastProfile} />
                </div>
              </div>
              <div class="flex h-full w-full bg-pink-200 rounded-md xl:w-60">
                <span class="w-full text-transparent bg-clip-text  xl:h-24 xl:mt-44 xl:text-center xl:align-middle">
               <img src={BoneIcon} alt="Throw Bone" onClick={() => selectedDogs.length && handleDogSelect(selectedDogs[0])} style={{ cursor: 'pointer' }} />
               </span>
            </div>
            <div class="flex h-full w-full bg-pink-100 rounded-2xl xl:p-12">
            <div class="flex h-full w-full bg-pink-200 rounded-2xl border-2 border-rose-400xl:text-center xl:text-sm xl:flex-col xl:w-full">
            <div className="dog-cards-carousel-container">
                <Slider {...carouselSettings}>
                {selectedDogs.map((dog) => (
                  <DogCard
                key={dog.name}
                dog={dog}
                  onSelect={handleDogSelect}
                  />
                  ))}
             </Slider>
                 </div>
               </div>             
                </div>
            </div>
           </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MatchDogsPage;





















// import React, { useEffect, useState } from 'react';
// import { useSharedVariables } from '../context/SharedVariableContextFile';
// import DogCard from '../components/DogCard';
// import ProfileDogCard from '../components/ProfileDogCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css';
// import { useNavigate } from 'react-router-dom'


// // Custom arrow components
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow next-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow prev-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// const findMatches = (profile, allDogs) => {
//   // Define your matching logic here
//   // This is a placeholder logic; adjust it according to your actual matching criteria
//   return allDogs.filter(dog => {
//     return Math.abs(dog.good_with_children - profile.good_with_children) <= 1
//     && Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1;
//     // Add more conditions as necessary
//   });
// };

// const MatchDogsPage = () => {
//   const { userCreatedProfiles, dogsData } = useSharedVariables();
//   const [selectedDogs, setSelectedDogs] = useState([]);
//   const [matchedDogs, setMatchedDogs] = useState([]);
  
//   const navigate = useNavigate();

//   // Use the last userCreatedProfile for matching if available
//   const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];

//   useEffect(() => {
//     if (lastProfile) {
//       setMatchedDogs(findMatches(lastProfile, dogsData));
//     }
//   }, [lastProfile, dogsData]); // Only re-run the effect if lastProfile or dogsData changes


//   const handleDogSelect = (selectedDog) => {
//     setSelectedDogs((prevSelectedDogs) => [...prevSelectedDogs, selectedDog])

//     setMatchedDogs((prevMatchedDogs) => 
//     prevMatchedDogs.filter((dog) => dog.name !== selectedDog.name)
//     )
//   };

  
//   const handleViewMatches = () => {
//     const matchedPaws = encodeURIComponent(JSON.stringify(selectedDogs));
//     navigate(`/profile?matchedPaws=${matchedPaws}`);
//   };
//   // const matchedDogs = lastProfile ? findMatches(lastProfile, dogsData) : [];
//   // console.log(matchedDogs);
//   const carouselSettings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };


//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20 flex justify-between">
//         <div className="profile-dog-card-container">
//           <ProfileDogCard /*key={lastProfile.id}*/ dog={lastProfile} />
//         </div>
        
//         {/* Slider for matched DogCards */}
//         <div className="dog-cards-carousel-container" >
//           <Slider {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} onSelect={handleDogSelect} />
//             ))}
//           </Slider>
//         </div>
//         <div>
//           <button onClick={handleViewMatches}> View Matches </button>
//         </div>
//         </div>
//       <Footer />
//     </div>
//   );
// };

// export default MatchDogsPage;


















































//Jonathan Diaz Code

// import React from 'react';
// import { useSharedVariables } from '../context/SharedVariableContextFile';
// import DogCard from '../components/DogCard';
// import ProfileDogCard from '../components/ProfileDogCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css';

// // Custom arrow components
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow next-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow prev-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// const MatchDogsPage = () => {
//   const { userCreatedProfiles, dogsData } = useSharedVariables();

 
//  const findMatches = (profile, allDogs) => {
 
//       return allDogs.filter(dog => {
//         return Math.abs(dog.good_with_children - profile.good_with_children) <= 1 &&
//                Math.abs(dog.playfulness - profile.playfulness) <= 1 &&
//                Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1 &&
//                Math.abs(dog.barking - profile.barking) <= 1 &&
//                Math.abs(dog.protectiveness - profile.protectiveness) <= 1 &&
//                Math.abs(dog.good_with_strangers - profile.good_with_strangers) <= 1 &&
//                Math.abs(dog.trainability - profile.trainability) <= 1 &&
//                Math.abs(dog.energy - profile.energy) <= 1;
   
//       });
//   };

  

//   const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];
//   const matchedDogs = lastProfile ? findMatches(lastProfile, dogsData) : [];
//   console.log(matchedDogs);
  
//   const carouselSettings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20">
//         {/* Pass false to showButtons to hide the buttons */}
//         {lastProfile && <ProfileDogCard dog={lastProfile} showButtons={false} />}
        
//         {/* Slider for matched DogCards */}
//         <div className="dog-cards-carousel-container my-10">
//           <Slider {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MatchDogsPage;

// import React from 'react';
// import { useSharedVariables } from '../context/SharedVariableContextFile';
// import DogCard from '../components/DogCard';
// import ProfileDogCard from '../components/ProfileDogCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css';

// // Custom arrow components
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow next-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow prev-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// const MatchDogsPage = () => {
//   const { userCreatedProfiles, dogsData } = useSharedVariables();

//   // Example findMatches function definition
//   const findMatches = (profile, allDogs) => {
//     // Define your matching logic here
//     // This is a placeholder logic; adjust it according to your actual matching criteria
//     return allDogs.filter(dog => {
//       return Math.abs(dog.good_with_children - profile.good_with_children) <= 1
//              && Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1;
//       // Add more conditions as necessary
//     });
//   };

//   // Use the last userCreatedProfile for matching if available
//   const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];
//   const matchedDogs = lastProfile ? findMatches(lastProfile, dogsData) : [];
//   console.log(matchedDogs);
//   const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };


//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20">
//         {/* Slider for ProfileDogCards */}
//         <div className="dog-cards-carousel-container ">
//           <Slider {...carouselSettings}>
//             {userCreatedProfiles.map((profile) => (
//               <ProfileDogCard key={profile.name} dog={profile} />
//             ))}
//           </Slider>
//         </div>
        
//         {/* Slider for matched DogCards */}
//         <div className="dog-cards-carousel-container ">
//           <Slider {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MatchDogsPage;


// import React, { useState, useEffect } from 'react';
// import { useSharedVariables } from '../context/SharedVariableContextFile';
// import DogCard from '../components/DogCard'; // Adjust the path as necessary
// import ProfileDogCard from '../components/ProfileDogCard'; // Adjust the path as necessary
// import Navbar from '../components/Navbar'; // Adjust the path as necessary
// import Footer from '../components/Footer'; // Adjust the path as necessary
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
// import '../App.css'; // Ensure this contains the required styles

// // Custom arrow components
// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow next-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={`${className} custom-arrow prev-arrow`}
//       style={{ ...style, display: "block" }}
//       onClick={onClick}
//     />
//   );
// }

// const MatchDogsPage = () => {
//   const { userCreatedProfiles, dogsData } = useSharedVariables();
//   const userDogProfile = userCreatedProfiles[userCreatedProfiles.length - 1]; // Get the last created dog profile

//   const carouselSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//     dotsClass: "slick-dots custom-dots", // Custom class for dots
//   };

 

//   useEffect(() => {
//     console.log('Current user created profiles:', userCreatedProfiles);
//   }, [userCreatedProfiles]);

//   // Function that finds matches (already implemented by you)
//   const findMatches = (userDogProfile, allDogs) => {
//     // Your matching logic...
//     return allDogs.map(dog => {
//               let score = 0;
//               Object.keys(userDogProfile).forEach(key => {
//                 if (['photo', 'name', 'image_link'].includes(key) || typeof userDogProfile[key] !== 'number') {
//                   return; // Skip non-numeric and irrelevant properties
//                 }
//                 const value = userDogProfile[key];
//                 const dogValue = dog[key];
//                 // Increase tolerance or implement a scoring system
//                 if (dogValue >= value - 1 && dogValue <= value + 1) {
//                   score += 1; // Each match within tolerance adds 1 to the score
//                 }
//               });
//               return { ...dog, score }; // Return the dog data with the computed score
//             })
//             .filter(dog => dog.score > 5) // Only include dogs with a score greater than 0
//             .sort((a, b) => b.score - a.score); // Sort by score in descending order
//   };
//   const matchedDogs = findMatches(userDogProfile, dogsData);
//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20 flex">
//       <div className="dog-cards-carousel-container ">
//           <Slider  {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} />
//             ))}
//           </Slider>
//         </div>
//         {/* <div className="profile-dog-card-container">
//           <ProfileDogCard key={userDogProfile.name} dog={userDogProfile} />
//         </div> */}
//         <div className="dog-cards-carousel-container ">
//           <Slider  {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} />
//             ))}
//           </Slider>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default MatchDogsPage;







// import React, { useState, useEffect } from 'react';
// import { useSharedVariables } from '../context/SharedVariableContextFile';
// import DogCard from '../components/DogCard'; // Assume DogCard is in the same directory
// import ProfileDogCard from '../components/ProfileDogCard';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import 
// //Slider
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";


// const MatchDogsPage = () => {
//   const { userCreatedProfiles, dogsData } = useSharedVariables();
//   const userDogProfile = userCreatedProfiles[userCreatedProfiles.length - 1]; // Get the last created dog profile

// // const [selectedMatches, setSelectedMatches] = useState([]);
// // const [rejectedMatches, setRejectedMatches] = useState([]);

//   useEffect(() => {
//     console.log('Current user created profiles:', userCreatedProfiles);
//   }, [userCreatedProfiles]);

//   const findMatches = (userDogProfile, allDogs) => {
//     return allDogs.map(dog => {
//       let score = 0;
//       Object.keys(userDogProfile).forEach(key => {
//         if (['photo', 'name', 'image_link'].includes(key) || typeof userDogProfile[key] !== 'number') {
//           return; // Skip non-numeric and irrelevant properties
//         }
//         const value = userDogProfile[key];
//         const dogValue = dog[key];
//         // Increase tolerance or implement a scoring system
//         if (dogValue >= value - 1 && dogValue <= value + 1) {
//           score += 1; // Each match within tolerance adds 1 to the score
//         }
//       });
//       return { ...dog, score }; // Return the dog data with the computed score
//     })
//     .filter(dog => dog.score > 5) // Only include dogs with a score greater than 0
//     .sort((a, b) => b.score - a.score); // Sort by score in descending order
//   };
  
// // const handleSelect = (dog) => {
//   // setSelectedMatches ((prevSelectedMatches) => [...prevSelectedMatches, dog])
//   // };
// 
// // const handleReject = (dog) => {
  // // setRejectedMatches ((prevRejectedMatches) => [...prevRejectedMatches, dog])
//   // };

//   const carouselSettings = {
//     dots: true, // Enable dot indicators for navigation
//     infinite: true, // Enable infinite looping
//     speed: 500, // Slide transition speed
//     slidesToShow: 1, // Show only one slide at a time
//     slidesToScroll: 1, // Scroll one slide at a time
//     nextArrow: <SampleNextArrow />, // Custom next arrow component
//     prevArrow: <SamplePrevArrow />, // Custom prev arrow component
//     dotsClass: "slick-dots custom-dots", // Custom class for dots
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 2,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   console.log(dogsData);
//   const matchedDogs = findMatches(userDogProfile, dogsData);
//   console.log("This is the matchedDog length:",matchedDogs.length);

// const matchedDogs = findMatches(userDogProfile, dogsData)

//   return (
//     <div>
//       <Navbar />
//       <div className="matches-container py-20 flex">
//         <div className="profile-dog-card-container">
//           <ProfileDogCard key={userDogProfile.name} dog={userDogProfile} />
//         </div>
//         <div className="dog-cards-carousel-container">
//           <Slider {...carouselSettings}>
//             {matchedDogs.map((dog) => (
//               <DogCard key={dog.name} dog={dog} onSelect={() => handleSelect(dog)} onReject={() => handleReject(dog)}/>
//             ))}
//           </Slider>
//         </div>
//        <MatchSelectedPage selectedMatches={selectedMatches} rejectedMatches={rejectedMatches} />
//       </div>
//       {/* <Footer /> */}
//     </div>
//   );
// };

// export default MatchDogsPage;
