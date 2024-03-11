import { useSharedVariables } from '../context/SharedVariableContextFile';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

function AboutPage () {
  const { userCreatedProfiles } = useSharedVariables();
  useEffect(() => {
    console.log('Current user created profiles:', userCreatedProfiles);
  }, [userCreatedProfiles]); // This effect will run every time userCreatedProfiles changes.
    return (
      
        <div className="flex flex-col">
            <Link to="/about"> </Link>
              <div className="flex justify-center items-center px-16 py-6 w-full bg-stone-50 max-md:px-5 max-md:max-w-full">
                <div className="flex gap-3.5 max-w-full w-[147px]">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/389b20ddde1add07a1a7988a498215aafda9574f96d7846415316ecf72e6b11f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                    className="shrink-0 aspect-[1.02] fill-rose-500 w-[50px]"
                  />
                  <div className="flex gap-0 items-start self-start mt-2.5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/de85427e12bd92a724323eeab113615299af4b51f472662632c5a8a859105962?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                      className="shrink-0 self-start aspect-[0.68] fill-rose-500 w-[19px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4df5c9fb33261c035b45a2e2a9d83cf6f7508d8cba3cb2ce0981883863cf4e5f?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                      className="shrink-0 my-auto aspect-[1.05] fill-rose-500 w-[21px]"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d8cef7f39d92309d580b23f263a3a403d3dd8f7bab8fad40af23e603925c953?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                      className="shrink-0 self-start mt-2 w-5 aspect-[0.71] fill-rose-500"
                    />
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b99b168463d2ceedc516f4064ebf897e7366e3ecf18b44a5c7bcf5afad5f5ded?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                      className="shrink-0 my-auto aspect-[1.05] fill-rose-500 w-[21px]"
                    />
                  </div>
                </div>
              </div>
              <div className="self-center mt-12 text-3xl text-black max-md:mt-10 max-md:max-w-full">
                Meet the Team Behind PawsConnect
              </div>
              <div className="w-full max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[64%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow px-5 mt-5 max-md:mt-10 max-md:max-w-full">
                      <div className="self-center text-4xl font-bold text-center text-white">
                        Our Inspiration
                      </div>
                      <div className="py-4 rounded-3xl shadow-sm max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0fd1bb39390b921d06af788f90f101ee40e3184e6655006d7db7e5e45c9df789?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                              className="grow w-full aspect-[0.7] max-md:mt-9"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="self-stretch my-auto text-lg font-light text-center text-black max-md:mt-10 max-md:max-w-full">
                              The idea for PawsConnect emerged from our shared love for
                              dogs and a desire to enhance the lives of both pets and
                              their owners. We believe that every dog deserves a chance
                              to find companionship, and every owner deserves the
                              opportunity to connect with like-minded individuals who
                              share their love for furry friends.
                              <br />    At PawsConnect, we are more than just a dating
                              app for dogs 🐶🐾 we are a community dedicated to
                              fostering meaningful connections, creating lasting
                              friendships, and ensuring the happiness of our four-legged
                              friends.
                              <br /> {" "}
                              <span className="font-semibold">
                                  Join us on this exciting journey, and let's make the
                                world a happier place, one paw at a tim
                              </span>
                              e!
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
                      <div className="px-4 pt-3.5 pb-8 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/60327e127dcac12b7fd6e5013386d495d67a59c3b89b31432fcd2ad823ec773c?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                              className="shrink-0 border-2 border-rose-500 border-solid aspect-[1.01] w-[97px] max-md:mt-10"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                            <div className="text-xl text-center text-black max-md:mt-10">
                              Emely Gomez
                              <br /> Co-founder/Developer
                              <br />
                              <br />
                              <span className="text-xs">
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
                      <div className="px-4 pt-3.5 pb-8 mt-6 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                              className="shrink-0 w-24 border-2 border-rose-500 border-solid aspect-[0.99] max-md:mt-10"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="text-xl font-bold text-center text-black max-md:mt-10">
                              <span className="">Jonathan Diaz</span>
                              <br />
                              <span className=""> Co-founder/Developer</span>
                              <br />
                              <br />
                              <span className="text-xs ">
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
                      <div className="px-4 py-7 mt-7 rounded-2xl shadow-sm bg-stone-50 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
                            <img
                              loading="lazy"
                              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d446425fb935e24adb36aafa2d52ea9d9c26aec3768a35b760fa51567ceb5ed4?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                              className="shrink-0 w-24 border-2 border-rose-500 border-solid aspect-[0.99] max-md:mt-10"
                            />
                          </div>
                          <div className="flex flex-col ml-5 w-[78%] max-md:ml-0 max-md:w-full">
                            <div className="text-xl font-bold text-center text-black max-md:mt-10">
                              <span className="">Luis Angel Hernandez</span>
                              <br />
                              <span className=""> Co-founder/Developer</span>
                              <br />
                              <br />
                              <span className="text-xs ">
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center px-16 py-5 mt-8 w-full bg-zinc-50 max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0b095efd75346315ca23207f69ed10e5281e0f2994727f65f39ba710546c30b5?apiKey=319352577b174a1ea58e2124bae2c0e0&"
                  className="max-w-full aspect-[11.11] w-[310px]"
                />
              </div>
            </div>
          );
        }

export default AboutPage;


