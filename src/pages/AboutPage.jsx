import { useSharedVariables } from '../context/SharedVariableContextFile';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Doggo from "../assets/Doggo.jpg";
import Footer from "../components/Footer.jsx";
import Staffy from "../assets/staffy.png";
import Poodle from "../assets/poodle.png";
import Husky from "../assets/husky.png";
import HappyPets from "../assets/happy-pets.jpeg";

function AboutPage () {
  const { userCreatedProfiles } = useSharedVariables();

    return (
      <div className="flex flex-col bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50">
      <Link to="/about"> </Link>
      <Navbar />
      <section class="h-[640px] bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50 tails-selected-element">
      <div class="max-w-7xl px-5 py-20 flex flex-col space-y-5 w-full h-full items-center justify-center mx-auto xl:w-screen xl:h-full">
          <h3 class="xl:text-4xl xl:font-bold"> Welcome To PawsConnect! 💕 </h3>
          <h3 class="xl:text-2xl xl:font-bold"> Meet the Team Behind The App 💕</h3>
          <div class="flex space-x-5 w-full h-full">
              <div class="flex h-full w-full bg-gradient-to-r from-rose-300 via-rose-400 to-rose-500 rounded-md xl:flex-col xl:w-full xl:h-full">
                  <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-white sm:text-6xl lg:text-7xl md:tracking-tight md:text-6xl md:px-3.5 xl:text-center xl:text-4xl xl:mt-6">Our Inspiration</h1>
                  <div class="flex items-center justify-center">
                  </div>
                  <img src={HappyPets} class="object-cover rounded-2xl mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference xl:h-48 xl:w-4/6 xl:self-center xl:m-px"/>
                  <p class="px-0 mb-6 text-lg text-white md:text-xl lg:px-24 xl:text-center xl:text-base xl:px-0 xl:m-8"> The idea for PawsConnect emerged from our shared love for dogs and a desire to enhance the lives of both pets and their owners. We believe that every dog deserves a chance to find companionship, and every owner deserves the opportunity to connect with like-minded individuals who share their love for furry friends. At PawsConnect, we are more than just a dating app for dogs 🐶🐾 we are a community dedicated to fostering meaningful connections, creating lasting friendships, and ensuring the happiness of our four-legged friends. </p>
              </div>
              <div class="flex h-full w-full bg-gray-300 rounded-md xl:flex-col xl:w-2/4 xl:bg-inherit">
                  <div class="flex h-full w-full bg-gray-50 rounded-md xl:m-2 xl:self-center xl:bg-gray-50 xl:w-11/12 xl:flex-row">
                      <img class="relative z-20 w-full rounded-full xl:my-3.5 xl:w-28 xl:h-28" src={Staffy}/>
                      <div class="flex h-full w-full bg-gray-100 rounded-md xl:self-center xl:bg-gray-50 xl:flex-row xl:w-full xl:p-2">
                          <div class="bg-gray-50 rounded-lg xl:w-64 xl:flex-col">
                              <h1 class="xl:font-semibold"> Jonathan Díaz </h1>
                              <h1 class=""> Co-founder/Developer </h1>
                              <h2 class="tails-preview xl:text-xs"> With a background in computer science and a lifelong affection for dogs, Jonathan Diaz&nbsp; is dedicated to spreading the joy of canine companionship, bringing dogs and their owners closer together. </h2>
                          </div>
                      </div>
                  </div>
                  <div class="flex h-full w-full bg-gray-50 rounded-md xl:m-2 xl:self-center xl:bg-gray-50 xl:w-11/12 xl:flex-row">
                      <img class="relative z-20 w-full rounded-full xl:my-3.5 xl:w-28 xl:h-28" src={Husky}/>
                      <div class="flex h-full w-full bg-gray-100 rounded-md xl:self-center xl:bg-gray-50 xl:flex-row xl:w-full xl:p-2">
                          <div class="bg-gray-50 rounded-lg xl:w-64 xl:flex-col">
                              <h1 class="xl:font-semibold"> Luis Ángel Hernández </h1>
                              <h1 class=""> Co-founder/Developer </h1>
                              <h2 class="tails-preview xl:text-xs"> A former lawyer and enthusiastic advocate for dogs, Luis ensures that PawsConnect goes beyond matchmaking, promoting healthy bonds between dogs and their potential mates, making PawsConnect a trusted platform. </h2>
                          </div>
                      </div>
                  </div>
                  <div class="flex h-full w-full bg-gray-50 rounded-md xl:m-2 xl:self-center xl:bg-gray-50 xl:w-11/12 xl:flex-row">
                      <img class="relative z-20 w-full rounded-full xl:my-3.5 xl:w-28 xl:h-28" src={Poodle}/>
                      <div class="flex h-full w-full bg-gray-100 rounded-md xl:self-center xl:bg-gray-50 xl:flex-row xl:w-full xl:p-2">
                          <div class="bg-gray-50 rounded-lg xl:w-64 xl:flex-col">
                              <h1 class="xl:font-semibold"> Emely Gómez </h1>
                              <h1 class=""> Co-founder/Developer </h1>
                              <h2 class="tails-preview xl:text-xs"> As a dog lover, Emely Gomez brings her creative approach to the heart of PawsConnect. Her commitment to creating an enjoyable experience for both dogs and owners has been the driving force behind the app's development</h2>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
    
        <Footer />
      </div>
          );
        }

export default AboutPage;


