import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProfileDogCard from '../components/ProfileDogCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../App.css'; 


import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const MyDogsPage = () => {
  const [myDogs, setMyDogs] = useState([]);

  useEffect(() => {
    const fetchMyDogs = async () => {
      const response = await axios.get('http://localhost:4000/mydogs');
      setMyDogs(response.data);
    };
    fetchMyDogs();
  }, []);


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
  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: "slick-dots custom-dots", // Custom class for dots
  };
  return (
    <div>
    <Navbar/>
    <div className="dog-cards-carousel-container my-60">
      <Slider {...carouselSettings}>
        {myDogs.length > 0 ? (
          myDogs.map((dog) => (
            <ProfileDogCard key={dog.name} dog={dog} />
          ))
        ) : (
          <p>No dogs found</p>
        )}
      </Slider>
    </div>
    <Footer/>
    </div>
   
  );
};

export default MyDogsPage;
