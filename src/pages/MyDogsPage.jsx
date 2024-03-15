import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDogCard from '../components/ProfileDogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../App.css';
import { JSON_SERVER } from '../services/JSON_SERVER';

const MyDogsPage = () => {
  const [myDogs, setMyDogs] = useState([]);

  useEffect(() => {
    fetchMyDogs();
  }, []);

  const fetchMyDogs = async () => {
    const response = await axios.get(JSON_SERVER + '/mydogs');
    setMyDogs(response.data);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(JSON_SERVER + `/mydogs/${id}`);
      fetchMyDogs(); 
    } catch (error) {
      console.error("Failed to delete dog profile:", error);
    }
  };

  const handleUpdate = async (dogId, newName) => {
    try {
      console.log(typeof newName); 
      if (typeof newName === 'string' && newName.trim() === "") {
        console.error("New name is empty");
        return;
      }

      const trimmedName = typeof newName === 'string' ? newName.trim() : '';
      const response = await axios.patch(JSON_SERVER +`/mydogs/${dogId}`, { name: trimmedName });
      setMyDogs(currentDogs =>
        currentDogs.map(dog => {
          if (dog.id === dogId) {
            return { ...dog, ...response.data };
          }
          return dog;
        })
      );
    } catch (error) {
      console.error("Failed to update dog name:", error);
    }
  };

  

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 w-full h-dv" >
      <Navbar/>
      <div className='w-full h-max'>
      <section class="h-max bg-white tails-selected-element" contenteditable="true">
    <div class="max-w-full px-5 py-20 flex space-x-5 w-full h-full items-center justify-center mx-auto">
        <div class="flex h-full w-full bg-pink-300 rounded-md xl:p-12">
          <div class="flex h-full w-full bg-pink-300 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">
          <div class="dog-cards-carousel-container w-3/6 h-full self-center">
          <Slider {...carouselSettings}>
          {myDogs.length > 0 ? (
          myDogs.map((dog) => (
          <ProfileDogCard 
              key={dog.id} 
              dog={dog} 
              onDelete={() => handleDelete(dog.id)} 
              onUpdate={handleUpdate} 
              showButton={true}
          />
          
       ))
       
          ) : (
      <p>No dogs found</p>
           )}
      </Slider>
      </div>
        {/* <div class="flex h-full w-full bg-yellow-300 rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-96 xl:h-32 xl:self-center xl:items-center xl:mt-3.5">
        </div> */}
</div>
</div>
</div>
</section>
</div>   
  <Footer/>  
</div>
  );
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

export default MyDogsPage;






