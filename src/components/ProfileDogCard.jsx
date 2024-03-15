

import React, { useState, useEffect } from "react";
import "../DogCard.css";
import { FaChildren } from "react-icons/fa6";
import { LiaDogSolid } from "react-icons/lia";
import { FaBone } from "react-icons/fa";
import { AiFillSound } from "react-icons/ai";
import { MdEmojiPeople } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { TbSchoolBell } from "react-icons/tb";
import { SlEnergy } from "react-icons/sl";
import { useNavigate, useParams } from "react-router-dom";

const ProfileDogCard = ({ dog, showButton = false, onDelete, onUpdate }) => {
  const [newName, setNewName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [visibility, setVisibility] = useState("none");
  const navigate = useNavigate();

  const params = useParams();

  useEffect(() => {
    console.log("Params from Dog car", params);
    if (dog?.photo instanceof File) {
      const url = URL.createObjectURL(dog.photo);
      setPhotoURL(url);


      return () => URL.revokeObjectURL(url);
    } else if (dog?.photo) {
   
      setPhotoURL(dog.photo);
    }

    if (Object.keys(params).length < 1) {
      console.log("length is none");
      setVisibility("block");
    }

    console.log("these are keys", Object.keys(params));
  }, [dog?.photo]);

  if (!dog) {
    return null;
  }

  const handleUpdateClick = () => {
    onUpdate(dog.id, newName); 
    setNewName(""); 
  };

  return (
    <div
      class="flex h-full w-full bg-pink-200 border-4 border-red-500 rounded-xl xl:text-center xl:text-sm xl:flex-col xl:w-full tails-selected-element"
    
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-center xl:m-5 xl:text-xl xl:w-72 xl:self-center">
        {dog.name}
      </h2>
      <img
        src={photoURL}
        alt={`The ${dog.name}`}
        class="rounded-lg border-4 border-red-500 object-cover mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference xl:mt-3 xl:self-center xl:h-36 xl:w-56"
      />
      <div class="flex-row h-full bg-pink-200 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-70 xl:h-32 xl:self-center xl:items-center xl:mt-3.5">
        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full text-gray-50 m-0">
          <FaChildren />
          Good with children: {dog.good_with_children}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900 m-0">
          <FaBone /> Playfulness: {dog.playfulness}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50 m-0">
          <LiaDogSolid /> Good with other dogs: {dog.good_with_other_dogs}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1  mr-3 mb-2 rounded-full  text-gray-900 m-0">
          <AiFillSound /> Barking level: {dog.barking}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50 m-0">
          <MdEmojiPeople /> Good with strangers: {dog.good_with_strangers}
        </p>

        <p class="bg-gray-50 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900 m-0">
          <AiFillSafetyCertificate /> Protectiveness: {dog.protectiveness}
        </p>

        <p class="bg-rose-500 text-xs font-xm inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-50 m-0">
          <TbSchoolBell />
          Trainability: {dog.trainability}
        </p>

        <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-1 py-1 mr-3 mb-2 rounded-full  text-gray-900 m-0">
          <SlEnergy /> Energy level: {dog.energy}
        </p>
      </div>

      <div className="h-fit w-full" style={{ display: `${visibility}` }}>
        <button
          className=" edit-button edit h-fit"
          onClick={() => navigate(`/edit-dog/${dog.id}`)}
        >
          Edit Dog Details
        </button>
        <button className="delete-button delete h-fit" onClick={() => onDelete(dog.id)}>
          Delete
        </button>
          <button
            className="matches-button h-fit"
            onClick={() => navigate(`/matches/${dog.id}`)}
          >
            See Matches
          </button>
      </div>
    </div>
  );
};
export default ProfileDogCard;

