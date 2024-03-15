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
    <div class="flex h-max w-full bg-pink-200 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full tails-selected-element" contenteditable="true">
        <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-center xl:m-5 xl:text-xl xl:w-72 xl:self-center">
        {dog.name}
        </h2>
        <img src={dog.image_link} alt={`The ${dog.name}`} class="object-cover mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference xl:mt-3 xl:self-center xl:h-36 xl:w-56"/>
        <div class="flex-row h-full w-full bg-pink-200 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-96 xl:h-32 xl:self-center xl:items-center xl:mt-3.5">
        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50">
          <FaChildren />
          Good with children: {dog.good_with_children}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900">
          <FaBone /> Playfulness: {dog.playfulness}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50">
          <LiaDogSolid /> Good with other dogs: {dog.good_with_other_dogs}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1  mr-3 mb-2 rounded-full  text-gray-900">
          <AiFillSound /> Barking level: {dog.barking}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50">
          <MdEmojiPeople /> Good with strangers: {dog.good_with_strangers}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900">
          <AiFillSafetyCertificate /> Protectiveness: {dog.protectiveness}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50">
          <TbSchoolBell />
          Trainability: {dog.trainability}
        </p>

        <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900">
          <SlEnergy /> Energy level: {dog.energy}
        </p>
        </div>

    </div>
    // <div
    //   class="flex h-full w-full bg-pink-200 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full tails-selected-element"
    //   contenteditable="true"
    // >
    //   <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-center xl:m-5 xl:text-xl xl:w-72 xl:self-center">
    //     {dog.name}
    //   </h2>
    //   <img
    //     src={dog.image_link}
    //     alt={`The ${dog.name}`}
    //     class="object-cover mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference xl:mt-3 xl:self-center xl:h-36 xl:w-56"
    //   />
    //   <div class="flex h-full w-full bg-pink-200 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-96 xl:h-32 xl:self-center xl:items-center xl:mt-3.5">
        // <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
        //   <FaChildren /> Good with children: {dog.good_with_children}
        // </p>

        // <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
        //   <FaBone />
        //   Playfulness: {dog.playfulness}
        // </p>

        // <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
        //   <LiaDogSolid /> Good with other dogs: {dog.good_with_other_dogs}
        // </p>

        // <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
        //   <AiFillSound /> Barking level: {dog.barking}
        // </p>

        // <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
        //   <MdEmojiPeople /> Good with strangers: {dog.good_with_strangers}
        // </p>

        // <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
        //   <AiFillSafetyCertificate /> Protectiveness: {dog.protectiveness}
        // </p>

        // <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2  mr-3 mb-2 rounded-full  text-gray-50 border ">
        //   <TbSchoolBell /> Trainability: {dog.trainability}
        // </p>

        // <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
        //   <SlEnergy /> Energy level: {dog.energy}
        // </p>
    //   </div>
    // </div>
    // <div className="dog-card">
    //   <h2 class="text-3xl font-bold pb-5 text-center pt-3">{dog.name}</h2>
    //   <img src={dog.image_link} alt={`The ${dog.name}`} className="dog-image" />
    //   <div className="dog-attributes">
    //   <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
    //   <FaChildren /> Good with children: {dog.good_with_children}</p>

    //   <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
    //   <FaBone/>Playfulness: {dog.playfulness}</p>

    //   <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
    //   <LiaDogSolid/> Good with other dogs: {dog.good_with_other_dogs}</p>

    //   <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
    //   <AiFillSound /> Barking level: {dog.barking}</p>

    //   <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50 border ">
    //   <MdEmojiPeople/> Good with strangers: {dog.good_with_strangers}</p>

    //   <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
    //   <AiFillSafetyCertificate/> Protectiveness: {dog.protectiveness}</p>

    //   <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2  mr-3 mb-2 rounded-full  text-gray-50 border ">
    //   <TbSchoolBell/> Trainability: {dog.trainability}</p>

    //   <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900 border ">
    //   <SlEnergy/> Energy level: {dog.energy}</p>
    
    //   {showThrowBoneButton && (
    //     <button onClick={handleSelect}>Throw a bone</button>
    //   )}
    //   </div>
    // </div>
  );
};

export default DogCard;





