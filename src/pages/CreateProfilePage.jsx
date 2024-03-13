import { useSharedVariables } from '../context/SharedVariableContextFile'; // Adjust the path as necessary
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../App.css'


function CreateProfilePage() {
  const navigate = useNavigate();
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
    setDogProfile({ ...dogProfile, [category]: value });
  };

  const handleNameChange = (e) => {
    setDogProfile((prevProfile) => ({ ...prevProfile, name: e.target.value }));
  };
  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
        // Here, event.target.result contains the Base64 encoded string of the image
        setDogProfile(prevProfile => ({
          ...prevProfile,
          photo: event.target.result // The Base64 string
        }));
      };
  
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  // const handlePhotoChange = (e) => {
  //   if (e.target.files && e.target.files[0]) {
  //     const reader = new FileReader();
      
  //     reader.onload = (event) => {
  //       setDogProfile((prevProfile) => ({
  //         ...prevProfile,
  //         photo: event.target.result, // This will be the data URL of the loaded image
  //       }));
  //     };
      
  //     reader.readAsDataURL(e.target.files[0]);
  //   }
  // };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted", dogProfile);
  
    // Since addUserCreatedProfile is async, we await its completion before resetting the form and navigating
    await addUserCreatedProfile(dogProfile);
  
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
  
    // Navigate away after successfully adding the profile and resetting the form
    navigate('/matches');
  };

  const { userCreatedProfiles } = useSharedVariables();

  useEffect(() => {
    console.log('Current user created profiles:', userCreatedProfiles);
  }, [userCreatedProfiles]); // This effect will run every time userCreatedProfiles changes.

const RatingSelector = ({ category, currentValue, onChange }) => {
  return (
    <div className="rating-container">
      {[1, 2, 3, 4, 5].map((value) => (
        <div 
          key={value} 
          className={`rating-circle ${currentValue >= value ? 'selected' : ''}`} 
          onClick={() => onChange(category, value)}
        />
      ))}
    </div>
  );
};


return (

  <div className="flex flex-col">
  <Navbar/>
  <div className="flex flex-col items-center px-5 w-full max-w-full">
    {/* ...other parts of your component... */}
    <div className="mt-28 text-3xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10">
         Tell us about your dog ...</div>
    <form onSubmit={handleSubmit}>
      {/* ...other parts of your form... */}
      <div className="flex flex-col items-center mt-10 w-full">
        {/* Iterate over each category to create a row */}
        {['Good with Children', 'Playfulness', 'Good with other Dogs', 'Barking Level', 'Protectiveness', 'Good with Strangers', 'Trainability', 'Energy Level'].map((category) => (
          <div key={category} className="flex items-center justify-between px-5 py-4 w-full bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] mb-3">
            <label className="text-lg font-semibold">{category}:</label>
            <RatingSelector category={category.toLowerCase().replace(/\s+/g, '_')} currentValue={dogProfile[category.toLowerCase().replace(/\s+/g, '_')]} onChange={handleRatingChange} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center px-5 mt-6 w-full max-md:max-w-full">
                <input className="justify-center items-center px-16 py-5 max-w-full text-xs font-extralight text-center text-black whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] w-[325px] max-md:px-5" type="text" value={dogProfile.name} onChange={handleNameChange} placeholder="Enter your dog’s name ..." /></div>
                <div className="mt-11 text-2xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10"> 
            Upload your Dog's photo
          <label className='flex flex-col items-center'>
            <img
            loading="lazy"
            src={dogProfile.photo || "https://cdn.builder.io/api/v1/image/assets/TEMP/e8dc44577a4590f992f89728547fa7798b3f31d3c4844beae15ba5c9685e34d3?apiKey=319352577b174a1ea58e2124bae2c0e0&"}
            className="mt-11 max-w-full shadow-sm aspect-square w-[100px] max-md:mt-10"/>
          <input type="file" onChange={handlePhotoChange} style={{ display: 'none' }} />
          </label>

         <button type="submit" class="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-sm rounded-full text-xl px-12 py-4 text-center me-2 mb-2 ml-9 mt-8 justify-center items-center">Create Profile</button>

         </div>
         
    </form>
  </div>
  <Footer />
</div>
  
)

}

export default CreateProfilePage;





