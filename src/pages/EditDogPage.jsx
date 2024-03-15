import { useSharedVariables } from '../context/SharedVariableContextFile'; // Adjust the path as necessary
import { useNavigate, useParams } from 'react-router-dom';
import React, { useState, useEffect, useContext } from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import '../App.css'
import { JSON_SERVER } from '../services/JSON_SERVER';
import axios from 'axios';


function EditDogPage () {
  const navigate = useNavigate();

  const { fetchUserCreatedProfiles, userCreatedProfiles } = useSharedVariables();

  const { dogId } = useParams()

  const [dogToEdit, setDogToEdit] = useState({
    name: '',
    good_with_Children: 0,
    playfulness: 0,
    good_with_other_dogs: 0,
    barking: 0,
    good_with_strangers: 0,
    protectiveness: 0,
    trainability: 0,
    energy: 0,
    photo: null,
  });

  const handleRatingChange = (category, value) => {
    setDogToEdit({ ...dogToEdit, [category]: value });
  };

  const handleNameChange = (e) => {
    setDogToEdit((prevProfile) => ({ ...prevProfile, name: e.target.value }));
  };
  const handlePhotoChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
  
      reader.onload = (event) => {
      
        setDogToEdit(prevProfile => ({
          ...prevProfile,
          photo: event.target.result 
        }));
      };
  
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted", dogToEdit);

    axios.put(JSON_SERVER + `/mydogs/${dogId}`, dogToEdit)
        .then((response) => {
            console.log("Editied dog", response.data)
            fetchUserCreatedProfiles()
        })
        .catch((err) => {
            console.log(err)
        })
        .finally(() => {
            navigate('/mydogs');
        })
  
 
  };



  useEffect(() => {
    console.log('Current user created profiles:', userCreatedProfiles);
    if (userCreatedProfiles.length > 0 ) {
        let thisDog = userCreatedProfiles.find((dog) => dog.id == dogId)
        setDogToEdit(thisDog)
    }
  }, [userCreatedProfiles]); 

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
  <div className="flex flex-col items-center px-5 w-full max-w-full bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50">
   
    <div className="mt-28 text-3xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10">
         Tell us about your dog ...</div>
    <form onSubmit={handleSubmit}>
  
      <div className="flex flex-col items-center mt-10 w-full">

        {['Good with Children', 'Playfulness', 'Good with other Dogs', 'Barking', 'Protectiveness', 'Good with Strangers', 'Trainability', 'Energy'].map((category) => (
          <div key={category} className="flex items-center justify-between px-5 py-4 w-full bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] mb-3">
            <label className="text-lg font-semibold">{category}:</label>
            <RatingSelector category={category.toLowerCase().replace(/\s+/g, '_')} currentValue={dogToEdit[category.toLowerCase().replace(/\s+/g, '_')]} onChange={handleRatingChange} />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center px-5 mt-6 w-full max-md:max-w-full">
                <input className="justify-center items-center px-16 py-5 max-w-full text-xs font-extralight text-center text-black whitespace-nowrap bg-white border-rose-500 border-solid shadow-sm border-[3px] rounded-[100px] w-[325px] max-md:px-5" type="text" value={dogToEdit.name} onChange={handleNameChange} placeholder="Enter your dog’s name ..." /></div>
                <div className="mt-11 text-2xl font-semibold text-center text-black capitalize whitespace-nowrap max-md:mt-10"> 
            Change your Dog's photo
          <label className='flex flex-col items-center'>
            <img
            loading="lazy"
            src={dogToEdit.photo || "https://cdn.builder.io/api/v1/image/assets/TEMP/e8dc44577a4590f992f89728547fa7798b3f31d3c4844beae15ba5c9685e34d3?apiKey=319352577b174a1ea58e2124bae2c0e0&"}
            className=" border-4 rounded-lg border-red-500 mt-11 max-w-full shadow-sm aspect-square w-[100px] max-md:mt-10 "/>
          <input type="file" onChange={handlePhotoChange} style={{ display: 'none' }} />
          </label>

         <button type="submit" class="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-sm rounded-full text-xl px-12 py-4 text-center me-2 mb-2 ml-9 mt-8 justify-center items-center">Edit Profile</button>

         </div>
         
    </form>
  </div>
  <Footer />
</div>
  
)

}

export default EditDogPage