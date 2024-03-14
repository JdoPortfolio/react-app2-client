
import React from 'react';
import '../DogCard.css';
import { FaChildren } from "react-icons/fa6";
import { LiaDogSolid } from "react-icons/lia";
import { FaBone } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdEmojiPeople } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbSchoolBell } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";

const DogCard = ({ dog, onSelect, showThrowBoneButton = true, navigateToDashboard }) => {
  if (!dog) {
    return null;
  }

  const handleSelect = () => {
    if (onSelect) onSelect(dog);

    // Navigate after selection if navigateToDashboard function is provided
    if (navigateToDashboard) {
      // This example assumes you want to navigate immediately after selecting a dog.
      // Modify the path as needed. For example, you may want to dynamically generate
      // the path based on selected dogs or other criteria.
      const matchedPaws = encodeURIComponent(JSON.stringify([dog])); // Assuming you want to navigate with just this selected dog
      navigateToDashboard(`/profile?matchedPaws=${matchedPaws}`);
    }
  };

  return (
    <div className="dog-card">
      <h2 class="text-3xl font-bold pb-5 text-center pt-3">{dog.name}</h2>
      <img src={dog.image_link} alt={`The ${dog.name}`} className="dog-image" />
      <div className="dog-attributes">
      <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
      <FaChildren /> Good with children: {dog.good_with_children}</p>

      <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
      <FaBone/>Playfulness: {dog.playfulness}</p>

      <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
      <LiaDogSolid/> Good with other dogs: {dog.good_with_other_dogs}</p>

      <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
      <AiFillSound /> Barking level: {dog.barking}</p>

      <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
      <MdEmojiPeople/> Good with strangers: {dog.good_with_strangers}</p>

      <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
      <AiFillSafetyCertificate/> Protectiveness: {dog.protectiveness}</p>

      <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2  mr-3 mb-2 rounded-full  text-gray-50 border ">
      <TbSchoolBell/> Trainability: {dog.trainability}</p>

      <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border "> 
      <SlEnergy/> Energy level: {dog.energy}</p>
      {showThrowBoneButton && (
        <button onClick={handleSelect}>Throw a bone</button>
      )}
      </div>
    </div>
  );
};

export default DogCard;




{/* import React from 'react';
import '../DogCard.css';

const DogCard = ({ dog, onSelect, showThrowBoneButton = true }) => {
  if (!dog) {
    return null;
  }

  const handleSelect = () => {
    if (onSelect) onSelect(dog);
  }
  return (
    <div className="dog-card">
      <h2>{dog.name}</h2>
      <img src={dog.image_link} alt={`The ${dog.name}`} className="dog-image" />
      <div className="dog-attributes">
        <p>Good with children: {dog.good_with_children}</p>
        <p>Playfulness: {dog.playfulness}</p>
        <p>Good with other dogs: {dog.good_with_other_dogs}</p>
        <p>Barking level: {dog.barking}</p>
        <p>Good with strangers: {dog.good_with_strangers}</p>
        <p>Protectiveness: {dog.protectiveness}</p>
        <p>Trainability: {dog.trainability}</p>
        <p>Energy level: {dog.energy}</p>
        {/* You can add more attributes from the dog object as needed */}
      {/* </div>
      {showThrowBoneButton && (
        <button onClick={handleSelect}>Throw a bone</button>
      )}
      {/* <button onClick={handleSelect}>Throw a bone</button>  */}
    {/* </div>
  );
};

{/* export default DogCard;  */} 

{/* // DogCard.jsx
// import React from 'react';
// import '../DogCard.css';

// const DogCard = ({ dog, onSelect, showThrowBoneButton = true }) => { */}
{/* <p>Good with children: {dog.good_with_children}</p>
        <p>Playfulness: {dog.playfulness}</p>
        <p>Good with other dogs: {dog.good_with_other_dogs}</p>
        <p>Barking level: {dog.barking}</p>
        <p>Good with strangers: {dog.good_with_strangers}</p>
        <p>Protectiveness: {dog.protectiveness}</p>
        <p>Trainability: {dog.trainability}</p>
        <p>Energy level: {dog.energy}</p>
//     if (onSelect) onSelect(dog);
//   }

//   return (
//     <div className="dog-card">
 <p>Good with children: {dog.good_with_children}</p>
        <p>Playfulness: {dog.playfulness}</p>
        <p>Good with other dogs: {dog.good_with_other_dogs}</p>
        <p>Barking level: {dog.barking}</p>
        <p>Good with strangers: {dog.good_with_strangers}</p>
        <p>Protectiveness: {dog.protectiveness}</p>
        <p>Trainability: {dog.trainability}</p>
        <p>Energy level: {dog.energy}</p>
//     </div>
//   );
// };

// export default DogCard; */}

