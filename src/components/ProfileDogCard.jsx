// //Luis COde

// import { Link } from 'react-router-dom';
// // ProfileDogCard.jsx
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../DogCard.css';
// import { FaChildren } from "react-icons/fa6";
// import { LiaDogSolid } from "react-icons/lia";
// import { FaBone } from "react-icons/fa";
// import { AiFillSound } from "react-icons/ai";
// import { MdEmojiPeople } from "react-icons/md";
// import { AiFillSafetyCertificate } from "react-icons/ai";
// import { TbSchoolBell } from "react-icons/tb";
// import { SlEnergy } from "react-icons/sl";

// const ProfileDogCard = ({ dog, showButton, onDelete, onUpdate }) => {
//   const [newName, setNewName] = useState('');
//   const [photoURL, setPhotoURL] = useState('');

//   const navigate = useNavigate()

//   useEffect(() => {
//     if (dog?.photo instanceof File) {
//       const url = URL.createObjectURL(dog.photo);
//       setPhotoURL(url);

//       return () => URL.revokeObjectURL(url);
//     } else if (dog?.photo) {
//       setPhotoURL(dog.photo);
//     }
//   }, [dog?.photo]);

//   if (!dog) {

//     return null;
//   }

//   const handleUpdateClick = () => {
//     onUpdate(dog.id, newName);
//     setNewName('');
//   };

//   return (
//     <div className="dog-card">

//       <h2 class="text-3xl font-bold pb-5 text-center pt-3">{dog.name}</h2>
//       <img src={photoURL} alt={`The ${dog.name}`} className="dog-image" />
//       <div className="dog-attributes">

//         <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50">
//         <FaChildren />Good with children: {dog.good_with_children}</p>

//         <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900">
//         <FaBone /> Playfulness: {dog.playfulness}</p>

//         <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50">
//         <LiaDogSolid /> Good with other dogs: {dog.good_with_other_dogs}</p>

//         <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2  mr-3 mb-2 rounded-full  text-gray-900">
//         <AiFillSound /> Barking level: {dog.barking}</p>

//         <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50">
//         <MdEmojiPeople /> Good with strangers: {dog.good_with_strangers}</p>

//         <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900">
//         <AiFillSafetyCertificate /> Protectiveness: {dog.protectiveness}</p>

//         <p class="bg-rose-500 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-50">
//         <TbSchoolBell />Trainability: {dog.trainability}</p>

//         <p class="bg-gray-50 text-xs font-medium inline-flex items-center px-2.5 py-2 mr-3 mb-2 rounded-full  text-gray-900">
//         <SlEnergy /> Energy level: {dog.energy}</p>

//       </div>
//     </div>
//   );
// };
// export default ProfileDogCard;

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
  const [visibility, setVisibility] = useState('none')
  const navigate = useNavigate();

  const params = useParams()

  useEffect(() => {
    console.log("Params from Dog car", params)
    if (dog?.photo instanceof File) {
      const url = URL.createObjectURL(dog.photo);
      setPhotoURL(url);

      // Revoke the blob URL when it's no longer needed
      return () => URL.revokeObjectURL(url);
    } else if (dog?.photo) {
      // If dog.photo is already a URL string, just use it as is
      setPhotoURL(dog.photo);
    }

    if (Object.keys(params).length < 1) {
      console.log("length is none")
      setVisibility('block')
    }

    console.log("these are keys", Object.keys(params))
  }, [dog?.photo]);

  if (!dog) {
    // Render nothing or a placeholder if dog is undefined
    return null;
  }

  // Assume photoURL state and useEffect hook remain unchanged...

  const handleUpdateClick = () => {
    onUpdate(dog.id, newName); // Call the onUpdate function passed as a prop
    setNewName(""); // Reset newName after update
  };

  return (
    <div
      class="flex h-full w-full bg-pink-200 border-2 border-rose-400 rounded-xl xl:text-center xl:text-sm xl:flex-col xl:w-full tails-selected-element"
      contenteditable="true"
    >
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-center xl:m-5 xl:text-xl xl:w-72 xl:self-center">
        {dog.name}
      </h2>
      <img
        src={photoURL}
        alt={`The ${dog.name}`}
        class="rounded-lg object-cover mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference xl:mt-3 xl:self-center xl:h-36 xl:w-56"
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
        {/* {showButton && (
        <div>
                 
          <button onClick={() => navigate(`/edit-dog/${dog.id}`)} class="text-black bg-grey-300">Edit Dog Details</button>
          <button onClick={() => onDelete(dog.id)}>Delete</button>
          <div>
          <button className="matches-button" onClick={() => navigate(`/matches/${dog.id}`)}>See matches</button>
          </div>

        </div>
      )} */}

        </div>
        <div className="h-fit w-full" style={{display: `${visibility}`}}>
          <button
          className="h-fit"
            onClick={() => navigate(`/edit-dog/${dog.id}`)}
            class="text-black bg-grey-300"
          >
            Edit Dog Details
          </button>
          <button className="h-fit" onClick={() => onDelete(dog.id)}>Delete</button>
          <div className="h-fit">
            <button
              className="matches-button h-fit"
              onClick={() => navigate(`/matches/${dog.id}`)}
            >
              See matches
            </button>
          </div>
      </div>
    </div>
  );
};
export default ProfileDogCard;

//jonathan

// // ProfileDogCard Component

// import React, { useState, useEffect, useRef } from 'react';
// import '../DogCard.css';

// const ProfileDogCard = ({ dog, onDelete, onUpdate }) => {
//   const [newName, setNewName] = useState('');

//   const handleNameChange = (e) => {
//     setNewName(e.target.value);
//   };

//   const submitNewName = () => {
//     onUpdate(newName); // Make sure newName is a string
//     setNewName(''); // Reset input after submission
//   };

//   return (
//     <div className="dog-card ">
//       <h2>{dog.name}</h2>
//       <img src={dog.photo} alt={`The ${dog.name}`} className="dog-image" />

//       <div className="dog-attributes">
//             <p>Good with children: {dog.good_with_children}</p>
//             <p>Playfulness: {dog.playfulness}</p>
//             <p>Good with other dogs: {dog.good_with_other_dogs}</p>
//             <p>Barking level: {dog.barking}</p>
//             <p>Good with strangers: {dog.good_with_strangers}</p>
//             <p>Protectiveness: {dog.protectiveness}</p>
//             <p>Trainability: {dog.trainability}</p>
//             <p>Energy level: {dog.energy}</p>
//       </div>

//       <div>
//       {onUpdate && (
//         <div>
//           <input
//             value={newName}
//             onChange={handleNameChange}
//             placeholder="Enter new name"
//           />

//           <button onClick={submitNewName}>Update Name</button>
//         </div>
//       )}
//       </div>

//       {onDelete && (
//         <button onClick={() => onDelete(dog.id)}>Delete</button>
//       )}
//     </div>
//   );
// };

// export default ProfileDogCard;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios';
// import '../DogCard.css';

// const ProfileDogCard = ({ dog, onDelete, onUpdate }) => {
//   const [photoURL, setPhotoURL] = useState(dog.photo);
//   const fileInputRef = useRef();

//   useEffect(() => {
//     if (dog.photo instanceof File) {
//       setPhotoURL(URL.createObjectURL(dog.photo));
//     } else {
//       setPhotoURL(dog.photo);
//     }
//   }, [dog.photo]);

//   const handleImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       onUpdate(dog.id, file);
//     }
//   };

//   return (
//     <div className="dog-card">
//       <h2>{dog.name}</h2>
//       <img src={photoURL} alt={`The ${dog.name}`} className="dog-image" />

//       <div className="dog-attributes">
//             <p>Good with children: {dog.good_with_children}</p>
//             <p>Playfulness: {dog.playfulness}</p>
//             <p>Good with other dogs: {dog.good_with_other_dogs}</p>
//             <p>Barking level: {dog.barking}</p>
//             <p>Good with strangers: {dog.good_with_strangers}</p>
//             <p>Protectiveness: {dog.protectiveness}</p>
//             <p>Trainability: {dog.trainability}</p>
//             <p>Energy level: {dog.energy}</p>
//       </div>

//       {onUpdate && (
//         <button onClick={() => fileInputRef.current.click()}>Update Image</button>
//       )}
//       {onDelete && (
//         <button onClick={() => onDelete(dog.id)}>Delete</button>
//       )}
//       <input
//         type="file"
//         ref={fileInputRef}
//         style={{ display: 'none' }}
//         onChange={handleImageChange}
//       />
//     </div>
//   );
// };

// export default ProfileDogCard;

// import React, { useState, useEffect, useRef } from 'react';
// import axios from 'axios'; // Make sure to import axios
// import '../DogCard.css';

// const ProfileDogCard = ({ dog, onDelete, onUpdate, showButtons = true }) => {
//   const [photoURL, setPhotoURL] = useState('');
//   const fileInputRef = useRef(); // Create a ref for the file input

//   useEffect(() => {
//     if (typeof dog.photo === 'string') {
//       setPhotoURL(dog.photo);
//     }
//   }, [dog.photo]);

//   const handleImageChange = async (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const file = event.target.files[0];
//       const formData = new FormData();
//       formData.append('photo', file);

//       try {
//         const response = await axios.put(`http://localhost:4000/mydogs/${dog.id}`, formData, {
//           headers: {
//             'Content-Type': 'multipart/form-data'
//           }
//         });
//         onUpdate(response.data); // Pass the updated dog back up to the parent component
//         setPhotoURL(URL.createObjectURL(file)); // Update the local state to show the new image
//       } catch (error) {
//         console.error("Failed to update dog profile image:", error);
//       }
//     }
//   };

//   return (
//     <div className="dog-card">
//       <h2>{dog.name}</h2>
//       <img src={photoURL} alt={`The ${dog.name}`} className="dog-image" />
//       <div className="dog-attributes">
//             <p>Good with children: {dog.good_with_children}</p>
//             <p>Playfulness: {dog.playfulness}</p>
//             <p>Good with other dogs: {dog.good_with_other_dogs}</p>
//             <p>Barking level: {dog.barking}</p>
//             <p>Good with strangers: {dog.good_with_strangers}</p>
//             <p>Protectiveness: {dog.protectiveness}</p>
//             <p>Trainability: {dog.trainability}</p>
//             <p>Energy level: {dog.energy}</p>

//          </div>
//       {showButtons && (
//         <>
//           <button onClick={() => onDelete(dog.id)}>Delete</button>
//           <button onClick={() => fileInputRef.current.click()}>
//             Update Image
//           </button>
//           <input
//             type="file"
//             onChange={handleImageChange}
//             style={{ display: 'none' }}
//             ref={fileInputRef}
//           />
//         </>
//       )}
//     </div>
//   );
// };
// export default ProfileDogCard;

// import React, { useState, useEffect } from 'react';
// import '../DogCard.css';

// const ProfileDogCard = ({ dog, onDelete, onUpdate, showButtons = true }) => {
//   // Existing code remains the same
//   const [photoURL, setPhotoURL] = useState('');

//   useEffect(() => {
//     // Create a blob URL only if dog.photo is a File object
//     if (dog.photo instanceof File) {
//       const url = URL.createObjectURL(dog.photo);
//       setPhotoURL(url);

//       // Revoke the blob URL when it's no longer needed
//       return () => URL.revokeObjectURL(url);
//     } else {
//       // If dog.photo is already a URL string, just use it as is
//       setPhotoURL(dog.photo);
//     }
//   }, [dog.photo]);

//   return (
//       <div className="dog-card">
//         <h2>{dog.name}</h2>
//         <img src={dog.photo} alt={`The ${dog.name}`} className="dog-image" />
//         <div className="dog-attributes">
//             <p>Good with children: {dog.good_with_children}</p>
//             <p>Playfulness: {dog.playfulness}</p>
//             <p>Good with other dogs: {dog.good_with_other_dogs}</p>
//             <p>Barking level: {dog.barking}</p>
//             <p>Good with strangers: {dog.good_with_strangers}</p>
//             <p>Protectiveness: {dog.protectiveness}</p>
//             <p>Trainability: {dog.trainability}</p>
//             <p>Energy level: {dog.energy}</p>
//             {/* You can add more attributes from the dog object as needed */}
//         </div>
//         {showButtons && (
//           <>
//             <button onClick={() => onDelete(dog.id)}>Delete</button>
//             <button onClick={() => onUpdate(dog)}>Update</button>
//           </>
//         )}
//       </div>
//   );
// };
// export default ProfileDogCard;
