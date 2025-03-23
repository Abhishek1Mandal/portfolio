import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import backendImg from "@/assets/MyComponents/backend.png";
import react from "@/assets/MyComponents/react.svg";
import Vite from "@/assets/MyComponents/vite_logo_icon_249258.svg";
import typescript from "@/assets/MyComponents/typescript_logo_icon_249332.svg";
import html from "@/assets/MyComponents/html.svg";
import pyImage from "@/assets/MyComponents/pyImage.png";
import AI from "@/assets/MyComponents/illustrator_brands_icon_256539.svg";
import Visual from "@/assets/MyComponents/basic_visual_brands_icon_256601.svg";
import "aos/dist/aos.css";

const Services = () => {
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    AOS.init();

    // Add an event listener to detect scroll direction
    let lastScrollTop = 0;
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(scrollTop > lastScrollTop ? "down" : "up");
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <section className="bg-gray-300" id="services">
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
                          className={`p-1.5  bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-14 mr-5"
                              src={react}
                              alt="ReactJs"
                            ></img>
                            <div className="lg:ml-0 ml-44">ReactJs</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lgcursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[40px] w-[40px] items-center ml-10 mr-5"
                              src={Vite}
                              alt="ViteJs"
                            ></img>
                            <div className="lg:ml-0 ml-48">ViteJs</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[36px] w-[34px] items-center ml-14 mr-5"
                              src={typescript}
                              alt="Typescript"
                            ></img>
                            <div className="lg:ml-0 ml-44">Typescript</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[36px] w-[40px] items-center ml-10 mr-5"
                              src={html}
                              alt="HTML & CSS"
                            ></img>
                            <div className="lg:ml-0 ml-44">HTML & CSS</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[36px] w-[40px] items-center ml-14 mr-5"
                              src={AI}
                              alt="AI"
                            ></img>
                            <div className="lg:ml-0 ml-44">AI</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[36px] w-[40px] items-center ml-10 mr-5"
                              src={pyImage}
                              alt="Python"
                            ></img>
                            <div className="lg:ml-0 ml-44">Python</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
                          className={`p-1.5 bg-white rounded-lg group shadow-lg cursor-pointer ease-in duration-150 ${
                            scrollDirection === "down" ? "fade-in" : "fade-out"
                          }`}
                        >
                          <h3 className="flex items-center text-[20px] ">
                            <img
                              className="h-[36px] w-[40px] items-center ml-14 mr-5"
                              src={Visual}
                              alt="Visual Studio"
                            ></img>
                            <div className="lg:ml-0 ml-36">Visual studio</div>
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div
                      className="rounded-full bg-black border-white border-4 w-10 h-10 absolute left-1/2
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
