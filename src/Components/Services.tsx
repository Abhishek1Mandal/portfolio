import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import backendImg from "@/assets/My components/backend.png";
import react from "@/assets/My components/react.svg";
import Vite from "@/assets/My components/vite_logo_icon_249258.svg";
import typescript from "@/assets/My components/typescript_logo_icon_249332.svg";
import html from "@/assets/My components/html.svg";
import pyImage from "@/assets/My components/pyImage.png";
import AI from "@/assets/My components/illustrator_brands_icon_256539.svg";
import Visual from "@/assets/My components/basic_visual_brands_icon_256601.svg";
import "aos/dist/aos.css";

const Services = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    AOS.init();

    // Add an event listener to detect scroll direction
    let lastScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    window.addEventListener("scroll", () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop;
    });

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <>
      <section id="services">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
              Skill Set
            </h2>
            <p className="lg:max-w-[600px] lg:max-auto justify-between text-headingcolor font-[500] text-[16px] leading-7 "></p>
          </div>

          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
              <div className="relative text-gray-700 antialiased text-sm font-semibold">
                {/* vertical line */}

                <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform-translate-x-1/2"></div>

                {/* left card - ReactJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "right" : "left"
                          }`}
                          data-aos-anchor-placement={
                            scrollDirection === "down"
                              ? "bottom-bottom"
                              : "top-top"
                          }
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-14 mr-5"
                              src={react}
                              alt="ReactJs"
                            ></img>
                            ReactJs
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Right card - ViteJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "left" : "right"
                          }`}
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-10 mr-5"
                              src={Vite}
                              alt="ViteJs"
                            ></img>
                            ViteJs
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* left card - ReactJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "right" : "left"
                          }`}
                          data-aos-anchor-placement={
                            scrollDirection === "down"
                              ? "bottom-bottom"
                              : "top-top"
                          }
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-14 mr-5"
                              src={typescript}
                              alt="Typescript"
                            ></img>
                            Typescript
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Right card - ViteJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "left" : "right"
                          }`}
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-10 mr-5"
                              src={html}
                              alt="HTML & CSS"
                            ></img>
                            HTML & CSS
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>
                {/* left card - ReactJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "right" : "left"
                          }`}
                          data-aos-anchor-placement={
                            scrollDirection === "down"
                              ? "bottom-bottom"
                              : "top-top"
                          }
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-14 mr-5"
                              src={AI}
                              alt="AI"
                            ></img>
                            AI
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* Right card - ViteJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "left" : "right"
                          }`}
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-10 mr-5"
                              src={pyImage}
                              alt="Python"
                            ></img>
                            Python
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/* left card - ReactJs */}
                <div className="mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full mx-auto items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos={`fade-${
                            scrollDirection === "down" ? "right" : "left"
                          }`}
                          data-aos-anchor-placement={
                            scrollDirection === "down"
                              ? "bottom-bottom"
                              : "top-top"
                          }
                          data-aos-duration="1200"
                          className={`bg-white p-4 border border-black rounded group shadow-md cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-14 mr-5"
                              src={Visual}
                              alt="Visual Studio"
                            ></img>
                            Visual studio
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-green-500 border-4 w-10 h-10 absolute left-1/2
                                transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="Backend" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
