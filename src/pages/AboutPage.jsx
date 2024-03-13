import { useSharedVariables } from '../context/SharedVariableContextFile';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar.jsx";
import Doggo from "../assets/Doggo.jpg";
import Footer from "../components/Footer.jsx";

function AboutPage () {
  const { userCreatedProfiles } = useSharedVariables();
  // useEffect(() => {
  //   console.log('Current user created profiles:', userCreatedProfiles);
  // }, [userCreatedProfiles]); // This effect will run every time userCreatedProfiles changes.
    return (

      <div className="flex flex-col">
      <Link to="/about"> </Link>
      <Navbar />
        <div className="self-center mt-20 text-2xl font-bold text-black max-md:mt-10 max-md:max-w-full">
            Welcome to PawsConnect! 💕
        </div>
        <div className="self-center mt-5 font-light text-md text-black max-md:mt-10 max-md:max-w-full">
            Meet the Team Behind PawsConnect
        </div>
        <div className="w-full max-md:max-w-full">
          <div className="flex gap-1 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-5 mt-5 max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col ml-5 w-[95%] max-md:ml-0 max-md:w-full h-screen">
         <div class="w-full text-white bg-gradient-to-r from-rose-400 via-rose-500 to-rose-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-lg px-5 pt-3 pb-28 text-center me-2 mb-2 mt-5 mr-80">
     <div className="font-bold text-2xl pb-2"> Our Inspiration </div>
         <div>
        <img src={Doggo} class="rounded-lg pb-5 w-[60%] max-w-full flex justify-center items-center"/>
         </div>
         <div> 
            <div className="w-full pl-10 pr-10 leading-loose self-center text-sm font-light text-center text-neutral max-md:mt-10 max-md:max-w-full justify-center">
                         The idea for PawsConnect emerged from our shared love for
                         dogs and a desire to enhance the lives of both pets and
                         their owners. We believe that every dog deserves a chance
                         to find companionship, and every owner deserves the
                         opportunity to connect with like-minded individuals who
                         share their love for furry friends.
                           <br/>    
                           <br/>  
                         At PawsConnect, we are more than just a dating
                        app for dogs 🐶🐾 we are a community dedicated to
                        fostering meaningful connections, creating lasting
                        friendships, and ensuring the happiness of our four-legged
                        friends.
                            <br /> {" "}
                              <span className="font-semibold">
                                  Join us on this exciting journey, and let's make the
                              world a happier place, one paw at a time!
                            </span>
                            </div>
                      </div>  
                 </div>
                 </div>
              </div>
            </div>
            <div className="flex flex-col ml-1 w-[36%] max-md:ml-0 max-md:w-full mr-10 mt-9">
              <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="pr-3 pt-1 pb-2 mb-3 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full ">
                  <div className="flex gap-1 max-md:flex-col max-md:gap-5">
                    <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                        className="shrink-0 border-2 border-rose-500 border-solid aspect-[1.01] w-[97px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-1 w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="text-sm text-center font-bold text-black max-md:mt-10 leading-tight">
                        Jonathan Diaz
                        <br /> Co-founder/Developer
                        <br />
                        <br />
                        <span className="text-xs font-light">
                        With a background in computer science and a lifelong
                        affection for dogs, Jonathan Diaz plays a pivotal role
                        in bringing PawsConnect to the world. His expertise
                        vision and to data managment have been instrumental in
                        shaping the app's brand identity. Jonathan is dedicated
                        to spreading the joy of canine companionship and
                        believes in the power of PawsConnect to bring dogs and
                        their owners closer together.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="pr-3 pt-1 pb-2 mb-3 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full">
                  <div className="flex gap-1 max-md:flex-col max-md:gap-5">
                    <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                        className="shrink-0 border-2 border-rose-500 border-solid aspect-[1.01] w-[97px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-1 w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="text-sm text-center font-bold text-black max-md:mt-10 leading-tight">
                        Luis Angel Hernandez
                        <br /> Co-founder/Developer
                        <br />
                        <br />
                        <span className="text-xs font-light">
                        A former lawyer and enthusiastic advocate for the
                        well-being of dogs,  Luis Angel ensures that PawsConnect
                        goes beyond just matchmaking. His expertise in
                        understanding human behavior under the law contributes
                        to creating a safe and enjoyable environment for all
                        users. Luis's commitment to promoting healthy
                        relationships between dogs and their potential mates
                        makes PawsConnect a unique and trusted platform.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                <div className="pr-3 pt-1 pb-2 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full">
                  <div className="flex gap-1 max-md:flex-col max-md:gap-5">
                    <div className="flex flex-col w-[20%] max-md:ml-0 max-md:w-full">
                      <img
                        loading="lazy"
                        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                        className="shrink-0 border-2 border-rose-500 border-solid aspect-[1.01] w-[97px] max-md:mt-10"
                      />
                    </div>
                    <div className="flex flex-col ml-1 w-[77%] max-md:ml-0 max-md:w-full">
                      <div className="text-sm text-center font-bold text-black max-md:mt-10 leading-tight">
                        Emely Gomez
                        <br /> Co-founder/Developer
                        <br />
                        <br />
                        <span className="text-xs font-light">
                          As a passionate dog lover, seasoned software developer
                          and with a background in bussines managment, Emely Gomez
                          brings her technical and creative approach to the heart
                          of PawsConnect. Emely has a deep understanding of both
                          the canine world and the intricacies of crafting
                          user-friendly applications. Her commitment to creating a
                          seamless and enjoyable experience for both dogs and
                          their owners has been the driving force behind the app's
                          development
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
          );
        }

export default AboutPage;


