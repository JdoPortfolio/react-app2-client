import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import 'flowbite';
import Dog1 from "../assets/Dogone.jpg";
import BoneIcon from "../assets/boneicon.png";
import CreateProfilePage from "./CreateProfilePage.jsx";
import LogoFade from "../assets/pw-fade.png";
//Page components:

//Components:

//Styling:
import "../App.css";
import { FaStar } from "react-icons/fa";

import * as React from "react";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50 h-screen">
      <nav className=" bg-gradient-to-r  from-pink-200 via-pink-100 to-pink-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-5 pt-5">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={LogoFade} className="h-14" alt="Logo" />
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
      </nav>
      
      <section
        class="h-[700px] bg-gradient-to-r from-pink-200 via-pink-100 to-pink-50 tails-selected-element"
      
      >
        <div class="max-w-7xl px-5 py-6 flex flex-col space-y-5 w-full h-full items-center justify-center mx-auto ">
          <div class="flex h-full w-full bg-pink rounded-md xl:h-28 xl:w-6/12">
            <a
              href="#"
              class="inline-flex items-center justify-center px-5 py-3 text-base font-md text-rose-800 bg-pink-200 border border-transparent rounded-md shadow md:bg-pink-50 md:rounded-full xl:font-normal xl:w-10/12 xl:self-center xl:content-center xl:flex xl:h-20 xl:text-xl xl:mx-12 tails-selected-element"
              data-primary="pink-600"
              data-rounded="rounded-md"
            >
              {" "}
              <span class="xl:mr-3">🐾🐾🐾🐾🐾 </span> 4.9 / 5 stars by 100+
              Dog Lovers
            </a>
          </div>
          <div class="flex space-x-5 w-full h-full">
            <div class="flex h-full w-full bg-pink rounded-md xl:flex-col xl:w-11/12">
              <h1 class="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl lg:text-7xl md:tracking-tight md:text-6xl md:px-3.5 xl:text-6xl xl:text-center">
                The top Match-Maker for{" "}
                <span class="text-rose-500">canine companions</span>
              </h1>
              <div class="flex items-center justify-center mt-2 mb-2">
                <img src={BoneIcon} alt="bone-icon" class="w-12 h-12 mr-4" />
                <h1 class="text-2xl tracking-widest text-rose-500 uppercase max-md:max-w-full xl:font-bold">
                  {" "}
                  Find Your DOG’S Perfect Pal
                </h1>
              </div>
              <p class="px-0 mt-4 mb-8 text-lg text-black md:text-xl lg:px-24 xl:text-center xl:ml-0">
                Connect with local tail-waggers and set up playdates or find a
                compatible mate for your furry friend. It's all about making
                sure your dog has the right company for fun days out or a
                lifetime of pawsome memories
              </p> 
              <Link to="/createprofile" class="self-center"> 
              <a
                href="#"
                class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 border border-transparent rounded-md shadow hover:bg-rose-500 md:bg-rose-500 md:rounded-full xl:w-64 xl:self-center xl:text-lg xl:font-extrabold"
                data-primary="rose-500"
                data-rounded="rounded-md"
              >
                Create Your Profile
              </a>
               </Link> 
  
            </div>
            <div class="flex h-full w-full bg-pink rounded-md xl:flex-col xl:w-2/4">
              <img
                src={Dog1}
                class="border-4 border-rose-500 rounded-xl object-cover mt-3 mr-5 h-80 lg:h-96 md:flex-row md:mt-3 md:w-auto md:h-5/6 xl:bg-blend-difference"
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
export default LandingPage;
