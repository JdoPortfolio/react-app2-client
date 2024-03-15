import "../App.css";
import { Link } from 'react-router-dom';
import {useState} from 'react';
import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import LogoFade from '../assets/pw-fade.png';
import iconText from "../assets/icon-text.png";
import iconLove from "../assets/icon-love.png";
import iconDash from "../assets/icon-dash.png";

function Footer() {
    
    return (
        <footer class="bg-white rounded-lg shadow dark:bg-gray-900 ">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        
            <div class="lg:flex lg:items-center lg:justify-center pb-0.25">
          <div class="flex mt-4 sm:justify-center sm:mt-0">
           

          </div>

          
      </div>             
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
      <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                    <img src={LogoFade} class="h-5" alt="Logo" />
                </a>
                <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                    <Link to="/about">
                        <a href="#" class="hover:underline me-4 md:me-6">About Us</a>
                    </Link>
                    </li>

                    <li>
                    <Link to="https://github.com/emelygomezio/react-app2-client">
                        <a href="#" class="hover:underline me-4 md:me-6">GitHub Repository</a>
                    </Link>
                    </li>
                </ul>
            </div>
      <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" class="hover:underline">PawsConnect™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    
    )
}


export default Footer;