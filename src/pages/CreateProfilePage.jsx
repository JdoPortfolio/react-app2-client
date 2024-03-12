import { useSharedVariables } from '../context/SharedVariableContextFile'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DogCard from '../components/DogCard';

// function CreateProfilePage() {
//   const { addUserCreatedProfile } = useSharedVariables();
//   return (
//     <div className="flex flex-col">
//       <div className="flex flex-col items-center px-5 w-full max-md:max-w-full">
//         <div className="flex justify-center items-center self-stretch px-16 py-5 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
//           <div className="flex gap-3.5">
//             <img
//               loading="lazy"
//               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//               className="shrink-0 aspect-[1.02] fill-rose-500 w-[50px]"
//             />
//             <div className="flex gap-0 self-start mt-2.5">
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/de85427e12bd92a724323eeab113615299af4b51f472662632c5a8a859105962?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                 className="shrink-0 self-start aspect-[0.68] fill-rose-500 w-[19px]"
//               />
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/4df5c9fb33261c035b45a2e2a9d83cf6f7508d8cba3cb2ce0981883863cf4e5f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                 className="shrink-0 my-auto aspect-[1.05] fill-rose-500 w-[21px]"
//               />
//               <div className="flex flex-col flex-1">
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/1942d72c3d82beeec85fcf8e43cb47b97ad80262c441796b7e1bcc7057926f5f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                   className="self-center aspect-[1.16] fill-rose-500 w-[7px]"
//                 />
//                 <div className="flex gap-1">
//                   <div className="flex gap-0.5 items-start">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8cef7f39d92309d580b23f263a3a403d3dd8f7bab8fad40af23e603925c953?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 self-stretch w-5 aspect-[0.71] fill-rose-500"
//                     />
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99b168463d2ceedc516f4064ebf897e7366e3ecf18b44a5c7bcf5afad5f5ded?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 aspect-[1.05] fill-rose-500 w-[21px]"
//                     />
//                     <div className="shrink-0 w-1.5 bg-rose-500 h-[19px]" />
//                   </div>
//                   <div className="flex gap-px items-start">
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c26e71641edd796863aaf2e800952484ee06db63d7e3f54c708dda6b460c5f3?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 self-stretch w-5 aspect-[0.71] fill-rose-500"
//                     />
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d0bc58dbad9e378c6badd2b21e6b3005da9773d4d2d39a35b875cf074eb5786?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 aspect-[0.85] fill-rose-500 w-[17px]"
//                     />
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/50bea5bce27f1768a0574381dc5e976b4ea47714d0d97785206d71e2bcb1b65d?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 aspect-[0.94] fill-rose-500 w-[18px]"
//                     />
//                     <img
//                       loading="lazy"
//                       src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef6bb4e320dfbec1bda9ea3ebce5a12fc59f60092801b6e0a3dadd4490a75b62?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//                       className="shrink-0 aspect-[1.49] fill-rose-500 w-[30px]"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-11 text-3xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10">
//           Tell us about your dog ...
//         </div>
//         <div className="flex gap-5 justify-between mt-3.5 max-w-full text-xs text-black whitespace-nowrap w-[773px] max-md:flex-wrap">
//           <div className="flex flex-1 gap-2.5 justify-between px-5 py-4 font-medium bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//             <div className="grow my-auto text-xs">Good with children:</div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               1
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               2
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               3
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               4
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               5
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 flex-1 justify-center bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//             <div className="flex gap-5 justify-between px-5 py-4 w-full bg-white rounded-[100px]">
//               <div className="my-auto">Playfulness:</div>
//               <div className="flex gap-3 font-medium text-center">
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   1
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   2
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   3
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   4
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   5
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 justify-between items-start mt-4 max-w-full text-black w-[772px] max-md:flex-wrap">
//           <div className="flex flex-1 gap-3 justify-center px-5 py-4 whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//             <div className="flex gap-1.5">
//               <div className="grow my-auto text-xs">Good with other dogs:</div>
//               <div className="justify-center items-center px-2.5 w-6 h-6 text-xs font-medium text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                 1
//               </div>
//             </div>
//             <div className="flex gap-3 text-xs font-medium text-center">
//               <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                 2
//               </div>
//               <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                 3
//               </div>
//               <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                 4
//               </div>
//               <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                 5
//               </div>
//             </div>
//           </div>
//           <div className="flex flex-col flex-1 flex-1 justify-center bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//             <div className="flex gap-5 justify-between px-5 py-4 w-full bg-white rounded-[100px]">
//               <div className="my-auto text-xs">Barking level:</div>
//               <div className="flex gap-3 text-xs font-medium text-center whitespace-nowrap">
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   1
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   2
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   3
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   4
//                 </div>
//                 <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//                   5
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col self-center mt-3.5 max-w-full text-black w-[773px]">
//         <div className="flex z-10 gap-5 justify-between self-end px-5 py-4 text-xs whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//           <div className="my-auto">Protectiveness:</div>
//           <div className="flex gap-3 font-medium text-center">
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               1
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               2
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               3
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               4
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               5
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-3 justify-center self-start px-5 py-4 -mt-12 text-xs font-medium whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px]">
//           <div className="grow my-auto text-xs">Good with strangers:</div>
//           <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//             1
//           </div>
//           <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//             2
//           </div>
//           <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//             3
//           </div>
//           <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//             4
//           </div>
//           <div className="justify-center items-center px-2.5 w-6 h-6 text-center bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//             5
//           </div>
//         </div>
//         <div className="flex z-10 gap-5 justify-between self-end px-5 py-4 mt-3.5 max-w-full bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] w-[325px]">
//           <div className="self-start mt-3 text-base">
//             <span className="text-xs">Trainability</span>:
//           </div>
//           <div className="flex gap-3 text-xs font-medium text-center whitespace-nowrap">
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               1
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               2
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               3
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               4
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               5
//             </div>
//           </div>
//         </div>
//         <div className="flex gap-5 justify-between px-5 py-4 mt-0 max-w-full text-xs bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] w-[325px]">
//           <div className="my-auto">Energy level:</div>
//           <div className="flex gap-3 font-medium text-center whitespace-nowrap">
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               1
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               2
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               3
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               4
//             </div>
//             <div className="justify-center items-center px-2.5 w-6 h-6 bg-white border-2 border-solid border-neutral-400 rounded-[50px]">
//               5
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex flex-col items-center px-5 mt-6 w-full max-md:max-w-full">
//         <div className="justify-center items-center px-16 py-5 max-w-full text-xs font-extralight text-center text-black whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] w-[325px] max-md:px-5">
//           Enter your dog’s name ...
//         </div>
//         <div className="mt-11 text-2xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10">
//           Upload your photo
//         </div>
//         <img
//           loading="lazy"
//           src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8dc44577a4590f992f89728547fa7798b3f31d3c4844beae15ba5c9685e34d3?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//           className="mt-11 max-w-full shadow-sm aspect-square w-[100px] max-md:mt-10"
//         />
//         <div className="justify-center px-14 py-5 mt-10 text-xl font-bold text-center text-white shadow-sm rounded-[90px] max-md:pr-5 max-md:pl-6">
//           Get Instant Access
//         </div>
//         <div className="flex justify-center items-center self-stretch px-16 py-7 mt-16 w-full bg-zinc-50 max-md:px-5 max-md:mt-10 max-md:max-w-full">
//           <img
//             loading="lazy"
//             srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ee80dd757777336db6f1d995226294fc32142d921d1b6d7e2b57f66c09825133?apiKey=319352577b174a1ea58e2124bae2c0e0&"
//             className="max-w-full aspect-[11.11] w-[311px]"
//           />
//         </div>
//       </div>
//     </div>
//     )
// }
// export default CreateProfilePage;

function CreateProfilePage() {
  const { addUserCreatedProfile } = useSharedVariables();
  const [dogProfile, setDogProfile] = useState({
    name: '',
    good_with_Children: 0,
    playfulness: 0,
    good_with_other_dogs: 0,
    barkingLevel: 0,
    good_with_strangers: 0,
    protectiveness: 0,
    trainability: 0,
    energy: 0,
    photo: null,
  });

  const handleRatingChange = (category, value) => {
    setDogProfile((prevProfile) => ({ ...prevProfile, [category]: value }));
  };

  const handleNameChange = (e) => {
    setDogProfile((prevProfile) => ({ ...prevProfile, name: e.target.value }));
  };

  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setDogProfile((prevProfile) => ({
        ...prevProfile,
        photo: e.target.files[0],
      }));
    }
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addUserCreatedProfile(dogProfile);
    // Optionally reset the form or navigate away
    console.log("submitted", dogProfile,)


      // Reset the form by setting the state back to the initial state
  setDogProfile({
    name: '',
    good_with_children: 0,
    playfulness: 0,
    good_with_other_dogs: 0,
    barking: 0,
    good_with_strangers: 0,
    protectiveness: 0,
    trainability: 0,
    energy: 0,
    photo: null,

  });
  navigate('/matches');
  };

  const { userCreatedProfiles } = useSharedVariables();

  useEffect(() => {
    console.log('Current user created profiles:', userCreatedProfiles);
  }, [userCreatedProfiles]); // This effect will run every time userCreatedProfiles changes.

  // Helper function to generate the rating selectors
  const RatingSelector = ({ category, currentValue }) => (
    <div>
      {[1, 2, 3, 4, 5].map((value) => (
        <span key={value} onClick={() => handleRatingChange(category, value)}>
          {currentValue >= value ? '⚫️' : '⚪️'}
        </span>
      ))}
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Good with children:</label>
        <RatingSelector category="good_with_children" currentValue={dogProfile.good_with_children} />
      </div>
      <div>
        <label>Playfulness:</label>
        <RatingSelector category="playfulness" currentValue={dogProfile.playfulness} />
      </div>
      <div>
        <label>Good with other dogs:</label>
        <RatingSelector category="good_with_other_dogs" currentValue={dogProfile.good_with_other_dogs} />
      </div>
      <div>
        <label>Barking level:</label>
        <RatingSelector category="barking" currentValue={dogProfile.barking} />
      </div>
      <div>
        <label>Good with strangers:</label>
        <RatingSelector category="good_with_strangers" currentValue={dogProfile.good_with_strangers} />
      </div>
      <div>
        <label>Protectiveness:</label>
        <RatingSelector category="protectiveness" currentValue={dogProfile.protectiveness} />
      </div>
      <div>
        <label>Trainability:</label>
        <RatingSelector category="trainability" currentValue={dogProfile.trainability} />
      </div>
      <div>
        <label>Energy level:</label>
        <RatingSelector category="energy_level" currentValue={dogProfile.energy_level} />
      </div>
      <div>
        <label>Enter your dog’s name:</label>
        <input type="text" value={dogProfile.name} onChange={handleNameChange} placeholder="Dog's name" />
      </div>
      <div>
        <label>Upload Your Photo:</label>
        <input type="file" onChange={handlePhotoChange} />
      </div>
      <button type="submit" >Create Profile</button>
    </form>
  );

}
export default CreateProfilePage;



