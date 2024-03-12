import React, { useState, useEffect } from 'react';
import { useSharedVariables } from '../context/SharedVariableContextFile';
import DogCard from '../components/DogCard'; // Assume DogCard is in the same directory
import ProfileDogCard from '../components/ProfileDogCard';

const MatchDogsPage = () => {
  const { userCreatedProfiles, dogsData } = useSharedVariables();
  const userDogProfile = userCreatedProfiles[userCreatedProfiles.length - 1]; // Get the last created dog profile

  useEffect(() => {
    console.log('Current user created profiles:', userCreatedProfiles);
  }, [userCreatedProfiles]);

  const findMatches = (userDogProfile, allDogs) => {
    return allDogs.map(dog => {
      let score = 0;
      Object.keys(userDogProfile).forEach(key => {
        if (['photo', 'name', 'image_link'].includes(key) || typeof userDogProfile[key] !== 'number') {
          return; // Skip non-numeric and irrelevant properties
        }
        const value = userDogProfile[key];
        const dogValue = dog[key];
        // Increase tolerance or implement a scoring system
        if (dogValue >= value - 1 && dogValue <= value + 1) {
          score += 1; // Each match within tolerance adds 1 to the score
        }
      });
      return { ...dog, score }; // Return the dog data with the computed score
    })
    .filter(dog => dog.score > 5) // Only include dogs with a score greater than 0
    .sort((a, b) => b.score - a.score); // Sort by score in descending order
  };
  
  
  console.log(dogsData);
  const matchedDogs = findMatches(userDogProfile, dogsData);
  console.log("This is the matchedDog length:",matchedDogs.length);

  return (
    
    <div className="matches-container">
    <div className="my-dog-container">
        <ProfileDogCard  key={userDogProfile.name} dog={userDogProfile}/>
    </div>
      {matchedDogs.map(dog => (
        <DogCard key={dog.name} dog={dog} />
      ))}
    </div>
  );
};

export default MatchDogsPage;

// const findMatches = (userDogProfile, allDogs) => {
//     return allDogs.filter(dog => {
//       return Object.keys(userDogProfile).every(key => {
//         // Ignore non-numeric and photo properties
//         if (key === 'photo' || key === 'name' || key === 'image_link' || typeof userDogProfile[key] !== 'number') {
//             console.log("nothing happens")
//             return true;
//         }
//         const value = userDogProfile[key];
//         const dogValue = dog[key];
//         console.log(value)
//         console.log(dogValue)
//         // Check if the dog's attribute is within ±1 of the user's dog profile
//         return dogValue >= value - 1 && dogValue <= value + 1;
//       });
//     });
//   };
