import React, { useEffect, useState } from "react";
import { useSharedVariables } from "../context/SharedVariableContextFile";
import DogCard from "../components/DogCard";
import ProfileDogCard from "../components/ProfileDogCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate, useParams } from "react-router-dom";
import BoneIcon from "../assets/boneicon.png";
const MatchDogsPage = () => {
  const { userCreatedProfiles, dogsData } = useSharedVariables();
  const [selectedDogs, setSelectedDogs] = useState([]);
  const [myDogToMatch, setMyDogToMatch] = useState(null)
  const [matched, setMatched] = useState("");
  const navigate = useNavigate();
  // const lastProfile = userCreatedProfiles[userCreatedProfiles.length - 1];

  const { dogId } = useParams()


  useEffect(() => {
    if (userCreatedProfiles.length > 0) {
      let seekingDog = userCreatedProfiles.find((dog) => dog.id == dogId)
      setMyDogToMatch(seekingDog)
      const initialMatches = findMatches(seekingDog, dogsData);
      setSelectedDogs(initialMatches);
      let thisDog = initialMatches[0].name
      console.log("This first dog", thisDog)
      // console.log("These are initial matches", initialMatches, thisDog)
      setMatched(thisDog)
    }
  }, [dogsData, userCreatedProfiles]);
  const handleDogSelect = (selectedDog) => {
    const matchedPaws = encodeURIComponent(JSON.stringify([selectedDog]));
    console.log("Selected dogs ===>", selectedDogs)
    navigate(`/profile/${dogId}/${matched}`);
  };

  const carouselSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("Current slide ===>", selectedDogs[currentSlide].name)
      setMatched(selectedDogs[currentSlide].name);
    },
    afterChange: function (currentSlide) {
      setMatched(selectedDogs[currentSlide].name);
      // console.log("after change", currentSlide);
    },
  };
  const findMatches = (profile, allDogs) => {
    return allDogs.filter((dog) => {
      return (
        Math.abs(dog.good_with_children - profile.good_with_children) <= 1 &&
        Math.abs(dog.good_with_other_dogs - profile.good_with_other_dogs) <= 1 &&
        Math.abs(dog.barking - profile.barking) <= 1 &&
        Math.abs(dog.protectiveness - profile.protectiveness) <= 1 &&
        Math.abs(dog.good_with_strangers - profile.good_with_strangers) <= 1 &&
        Math.abs(dog.trainability - profile.trainability) <= 1 &&
        Math.abs(dog.energy - profile.energy) <= 1  && 
        Math.abs(dog.playfulness - profile.playfulness) <= 1
      );
    });
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

  return (
    <div>
      <Navbar />
      <div className="bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50  h-screen w-screen">
        <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100">
          <section
            class="h-[640px] bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 tails-selected-element"
           
          >
            <div class="max-w-7xl px-5 py-20 flex space-x-5 w-full h-full items-center justify-center mx-auto">
              <div class="flex h-full w-full bg-pink-100 rounded-2xl xl:p-12 ">
                <div class="flex h-full w-full bg-pink-1oo rounded-md xl:text-center xl:text-sm xl:flex-col xl:w-full">

                  {
                    myDogToMatch &&
                  <ProfileDogCard dog={myDogToMatch} showButton={false} />
                  }
                </div>
              </div>
              <div class="flex h-full w-full bg-pink-200 rounded-md xl:w-60">
                <span class="w-full text-transparent bg-clip-text  xl:h-24 xl:mt-44 xl:text-center xl:align-middle">
                  <img
                    src={BoneIcon}
                    alt="Throw Bone"
                    onClick={() =>
                      selectedDogs.length && handleDogSelect(selectedDogs[matched])
                    }
                    style={{ cursor: "pointer" }}
                  />
                </span>
              </div>
              <div class="flex h-full w-full bg-pink-100 rounded-2xl xl:p-12 ">
                <div class="flex h-full w-full bg-pink-200 rounded-2xl border-red-500 border-4 border-rose-400xl:text-center xl:text-sm xl:flex-col xl:w-full ">
                  <div className="dog-cards-carousel-container self-center w-full ">
                    <Slider {...carouselSettings}>
                      {selectedDogs.map((dog) => (
                        <DogCard
                          key={dog.name}
                          dog={dog}
                          onSelect={handleDogSelect}
                        />
                      ))}
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default MatchDogsPage;

