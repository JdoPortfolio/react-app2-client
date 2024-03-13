import React from 'react';
import { useSharedVariables } from '../context/SharedVariableContextFile';
import DogCard from '../components/DogCard';
import ProfileDogCard from '../components/ProfileDogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';

// Custom arrow components
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

const MatchDogsPage = () => {
  const { userCreatedProfiles, dogsData } = useSharedVariables();

  const findMatches = (profile, allDogs) => {
    // Your matching logic here
    return allDogs.filter(dog => {
      return Math.abs(dog.good_with_children - profile.good_with_children) <= 1
             && Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1;
      // Add more conditions as necessary
    });
  };

  const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];
  const matchedDogs = lastProfile ? findMatches(lastProfile, dogsData) : [];
  console.log(matchedDogs);
  
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div>
      <Navbar />
      <div className="matches-container py-20">
        {/* Directly display the last ProfileDogCard without a slider */}
        {lastProfile && <ProfileDogCard dog={lastProfile} />}
        
        {/* Slider for matched DogCards */}
        <div className="dog-cards-carousel-container my-10">
          <Slider {...carouselSettings}>
            {matchedDogs.map((dog) => (
              <DogCard key={dog.name} dog={dog} />
            ))}
          </Slider>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MatchDogsPage;

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
