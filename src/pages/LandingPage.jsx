import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import 'flowbite';
import Logo from "../assets/logoipsum.svg";
import Dog1 from "../assets/Dogone.jpg";
import BoneIcon from "../assets/boneicon.png";
import CreateProfilePage from "./CreateProfilePage.jsx";

//Page components:

//Components:

//Styling:
import "../App.css";
import { FaStar } from "react-icons/fa";

import * as React from "react";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 h-screen">
    <nav class=" bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ml-5 pt-5">
    <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={Logo} class="h-8" alt="Logo" />
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
</nav>
<span class="bg-pink-100 text-pink-800 text-lg font-medium me-2 px-2 py-4 ml-80 mr-80 rounded-full dark:bg-pink-900 dark:text-rose-500 flex flex-wrap items-center justify-center"> 🐾🐾🐾🐾  4.9 / 5 stars by 100+ customers</span>

<div class="mt-28 max-md:mt-10 max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col max-md:gap-0">
          <div class="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col font-bold text-center max-md:mt-10 max-md:max-w-full">
            <h2 class="mb-1 text-4xl pl-8 pr-3 pt-2 justify-center font-extrabold leading-8 tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white ">The top Match-maker for <span class="text-rose-500 dark:text-rose-500">canine companions</span></h2>
              <div class="flex flex-col pl-16 mt-6 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                <div class="flex items-center justify-center">
                 <img src={BoneIcon} alt="bone-icon" class="w-12 h-12 mr-4" /> 
                 <h1 class="text-2xl tracking-widest text-rose-500 uppercase max-md:max-w-full"> Find Your DOG’S Perfect Pal</h1>
                </div>
                <div class="mt-7 font-thin px-9 leading-8 justify-center text-center">
                  <p> Connect with local tail-waggers and set up playdates or find a compatible mate for your furry friend. It's all about making sure your dog has the right company for fun days out or a lifetime of pawsome memories</p>
                </div>
                <div>
                <Link to="/createprofile">     
                <button class="text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-sm rounded-full text-xl px-12 py-4 text-center me-2 mb-2 ml-9 mt-8 justify-center items-center">
                    Create Your Profile 
                </button>
                </Link>
                
                </div>

              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full rounded-full">
            <img src={Dog1} className="grow border-rose-500 border-solid shadow-sm aspect-[0.85] border-[10px] rounded-lg mr-10 max-w-[521px] max-md:mt-10 max-md:max-w-full"
            />
      </div>
    </div>
    </div>

    </div>
  );
}
export default LandingPage;


