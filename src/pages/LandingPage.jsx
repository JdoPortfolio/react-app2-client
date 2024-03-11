import { SharedVariablesProvider } from "../context/SharedVariableContextFile.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import 'flowbite';
//Page components:

//Components:

//Styling:
import "../App.css";
import { FaStar } from "react-icons/fa";

import * as React from "react";

function LandingPage() {
  return (
    <div className="bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100 h-screen">
    <div className="flex flex-col px-16 pt-11 pb-20 max-md:px-5">
      <div className="flex flex-col max-w-full text-2xl font-bold text-center text-white whitespace-nowrap w-[938px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b24c622fe05773995d3236212b7dbe272f148500ae1f2c5d78dcb5e62667cbe?apiKey=319352577b174a1ea58e2124bae2c0e0&"
          className="max-w-full aspect-[5] w-[250px]"
        />
        
        <div className="justify-center items-end self-end py-6 pr-5 pl-16 mt-6 max-w-full rounded-[90px] w-[548px] max-md:pl-5">
          4.9 / 5 stars by 100+ customers
        </div>
      </div>
      <div className="mt-28 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[59%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col font-bold text-center max-md:mt-10 max-md:max-w-full">
              <div className="text-6xl text-slate-900 max-md:max-w-full max-md:text-4xl">
                The top Match-maker for canine companions
              </div>
              <div className="flex flex-col pl-16 mt-11 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
                 <div className="text-3xl tracking-widest text-rose-500 uppercase max-md:max-w-full">
                  Find Your DOG’s Perfect Pal
                </div>
                <div className="text-2xl leading-9 text-center max-w-[613px] text-slate-700">
              Connect with local tail-waggers and set up playdates or find a compatible
              mate for your furry friend. It's all about making sure your dog has the
              right company for fun days out or a lifetime of pawsome memories
              </div>
                <Link to="/createprofile">
                <div className="justify-center items-center self-center px-16 bg-rose-500 py-7 mt-64 ml-9 max-w-full text-4xl text-black whitespace-nowrap shadow-sm rounded-[90px] w-[486px] max-md:px-5 max-md:mt-10">
                  Get Instant Access
                </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[41%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4e7c4507f5c66bf371ff342060c197d0ddacea3ae7d6af7eeaafb7dd125daf45?apiKey=319352577b174a1ea58e2124bae2c0e0&"
              className="grow w-full border-rose-500 border-solid shadow-sm aspect-[0.85] border-[10px] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default LandingPage;


