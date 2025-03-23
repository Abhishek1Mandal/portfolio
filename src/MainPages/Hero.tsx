import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";

import pp from "@/assets/MyComponents/Abhishek.png";
import TS from "@/assets/MyComponents/file_type_typescript_icon_130108.svg";
import RJ from "@/assets/MyComponents/reactjs_logo_icon_206693.svg";
import AP from "@/assets/MyComponents/apps-2-line.svg";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Set animation duration
      once: true, // Only animate elements once
    });
  }, []);

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
      <section className="bg-gray-300 p-12" id="about">
        <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
          {/* hero left start */}
          <div className="w-full md:basis-1/2">
            <h5
              data-aos={`fade-${scrollDirection === "down" ? "right" : "left"}`}
              data-aos-anchor-placement={
                scrollDirection === "down" ? "bottom-bottom" : "top-top"
              }
              data-aos-duration="1200"
              className={`text-headingColor font-[600] text-[25px] cursor-pointer ease-in duration-150 ${
                scrollDirection === "down" ? "fade-in" : "fade-out"
              }`}
            >
              Hi There,
            </h5>

            <h1
              data-aos={`fade-${scrollDirection === "down" ? "right" : "left"}`}
              data-aos-anchor-placement={
                scrollDirection === "down" ? "bottom-bottom" : "top-top"
              }
              data-aos-duration="1200"
              className={`text-headingColor font-[800] text-[1.8rem] sm:text-[30px] leading-[35px] sm:leading-[46px] mt-5 cursor-pointer ease-in duration-150 ${
                scrollDirection === "down" ? "fade-in" : "fade-out"
              }`}
            >
              I'm Abhishek Mandal <br /> A EE Engineering Graduate
            </h1>

            <div
              data-aos={`fade-${scrollDirection === "down" ? "right" : "left"}`}
              data-aos-anchor-placement={
                scrollDirection === "down" ? "bottom-bottom" : "top-top"
              }
              data-aos-duration="1200"
              className={`flex items-center gap-6 mt-7 cursor-pointer ease-in duration-150 ${
                scrollDirection === "down" ? "fade-in" : "fade-out"
              }`}
            >
              <Link to="#contact">
                <button className="flex items-center shadow-lg rounded-lg gap-2 px-8 py-1.5 bg-black text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105">
                  Want to Hire Me
                </button>
              </Link>

              <Link
                to="#portfolio"
                className="bg-white shadow-lg px-8 py-1.5 border rounded-lg transition-all duration-300 hover:bg-gray-100 hover:shadow-xl hover:scale-105"
                rel="noopener noreferrer"
              >
                See Portfolio
              </Link>
            </div>

            <p
              data-aos={`fade-${scrollDirection === "down" ? "left" : "right"}`}
              data-aos-duration="1200"
              className={`flex gap-2 text-headingColor font-[500] text-[14px] leading-7 sm:pr-10group cursor-pointer ease-in duration-150 ${
                scrollDirection === "down" ? "fade-in" : "fade-out"
              }`}
            >
              <img src={AP} alt="AP" />
              <b className="mt-8">
                I am a software engineering aspirant who is seeking to find the
                opportunity to upskill in a hardworking and competitive
                environment as well as be motivated by the company to do the
                best for the sake of helping myself and the company advance in
                the software engineering industry by becoming an asset.
              </b>
            </p>

            <div className="flex items-center gap-9 mt-8">
              <span className="text-smallTextColor text-[20px] font-[600]">
                Connect
              </span>

              <div
                data-aos={`fade-${
                  scrollDirection === "down" ? "right" : "left"
                }`}
                data-aos-anchor-placement={
                  scrollDirection === "down" ? "bottom-bottom" : "top-top"
                }
                data-aos-duration="1200"
                className={`rounded cursor-pointer ease-in duration-150 ${
                  scrollDirection === "down" ? "fade-in" : "fade-out"
                }`}
              >
                <Link
                  title="instagram"
                  target="_blank"
                  to="https://www.instagram.com/1abhishek_mandal/"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-800"
                  >
                    <path
                      fill="currentColor"
                      d="M13.028 2.001a78.82 78.82 0 0 1 2.189.022l.194.007c.224.008.445.018.712.03c1.064.05 1.79.218 2.427.465c.66.254 1.216.598 1.772 1.154a4.908 4.908 0 0 1 1.153 1.771c.247.637.415 1.364.465 2.428c.012.266.022.488.03.712l.006.194a79 79 0 0 1 .023 2.188l.001.746v1.31a78.836 78.836 0 0 1-.023 2.189l-.006.194c-.008.224-.018.445-.03.712c-.05 1.064-.22 1.79-.466 2.427a4.884 4.884 0 0 1-1.153 1.772a4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.427.465c-.267.012-.488.022-.712.03l-.194.006a79 79 0 0 1-2.189.023l-.746.001h-1.309a78.836 78.836 0 0 1-2.189-.023l-.194-.006a60.64 60.64 0 0 1-.712-.03c-1.064-.05-1.79-.22-2.428-.466a4.89 4.89 0 0 1-1.771-1.153a4.904 4.904 0 0 1-1.154-1.772c-.247-.637-.415-1.363-.465-2.427a74.367 74.367 0 0 1-.03-.712l-.005-.194A79.053 79.053 0 0 1 2 13.028v-2.056a78.82 78.82 0 0 1 .022-2.188l.007-.194c.008-.224.018-.446.03-.712c.05-1.065.218-1.79.465-2.428A4.88 4.88 0 0 1 3.68 3.68a4.897 4.897 0 0 1 1.77-1.155c.638-.247 1.363-.415 2.428-.465l.712-.03l.194-.005A79.053 79.053 0 0 1 10.972 2h2.056Zm-1.028 5A5 5 0 1 0 12 17a5 5 0 0 0 0-10Zm0 2A3 3 0 1 1 12.001 15a3 3 0 0 1 0-6Zm5.25-3.5a1.25 1.25 0 0 0 0 2.498a1.25 1.25 0 0 0 0-2.5Z"
                    />
                  </svg>
                </Link>
              </div>

              <div
                data-aos={`fade-${
                  scrollDirection === "down" ? "right" : "left"
                }`}
                data-aos-anchor-placement={
                  scrollDirection === "down" ? "bottom-bottom" : "top-top"
                }
                data-aos-duration="1200"
                className={`rounded cursor-pointer ease-in duration-150 ${
                  scrollDirection === "down" ? "fade-in" : "fade-out"
                }`}
              >
                <Link
                  title="github"
                  target="_blank"
                  to="https://github.com/Abhishek1Mandal"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-7 h-7 text-gray-800"
                  >
                    <path
                      fill="currentColor"
                      d="M5.884 18.653c-.3-.2-.558-.456-.86-.816a50.59 50.59 0 0 1-.466-.579c-.463-.575-.755-.841-1.056-.95a1 1 0 1 1 .675-1.882c.752.27 1.261.735 1.947 1.588c-.094-.117.34.427.433.539c.19.227.33.365.44.438c.204.137.588.196 1.15.14c.024-.382.094-.753.202-1.096c-2.968-.725-4.648-2.64-4.648-6.396c0-1.238.37-2.355 1.058-3.291c-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.583c.081-.024.127-.034.208-.047c.803-.123 1.937.17 3.415 1.097a11.731 11.731 0 0 1 2.687-.308c.912 0 1.819.103 2.684.308c1.477-.933 2.614-1.227 3.422-1.097c.085.014.158.032.218.051a1 1 0 0 1 .616.58c.487 1.215.52 2.296.302 3.19c.691.936 1.058 2.045 1.058 3.292c0 3.758-1.674 5.666-4.642 6.393c.125.415.19.878.19 1.38c0 .664-.002 1.299-.007 2.01c0 .19-.002.394-.005.706a1 1 0 0 1-.018 1.957c-1.14.228-1.984-.532-1.984-1.524l.002-.447l.005-.705c.005-.707.008-1.338.008-1.997c0-.697-.184-1.152-.426-1.361c-.661-.57-.326-1.654.541-1.751c2.966-.334 4.336-1.483 4.336-4.66c0-.955-.312-1.745-.913-2.405a1 1 0 0 1-.189-1.044c.166-.415.236-.957.095-1.614l-.01.002c-.491.14-1.11.44-1.858.95a1 1 0 0 1-.833.135a9.626 9.626 0 0 0-2.592-.35c-.89 0-1.772.12-2.592.35a1 1 0 0 1-.829-.133c-.753-.507-1.374-.807-1.87-.947c-.143.653-.072 1.194.093 1.607a1 1 0 0 1-.189 1.044c-.597.656-.913 1.459-.913 2.404c0 3.172 1.371 4.33 4.322 4.66c.865.098 1.202 1.178.545 1.749c-.193.167-.43.732-.43 1.364v3.149c0 .986-.834 1.726-1.96 1.529a1 1 0 0 1-.04-1.963v-.99c-.91.062-1.661-.087-2.254-.484Z"
                    />
                  </svg>
                </Link>
              </div>

              <div
                data-aos={`fade-${
                  scrollDirection === "down" ? "right" : "left"
                }`}
                data-aos-anchor-placement={
                  scrollDirection === "down" ? "bottom-bottom" : "top-top"
                }
                data-aos-duration="1200"
                className={`rounded cursor-pointer ease-in duration-150 ${
                  scrollDirection === "down" ? "fade-in" : "fade-out"
                }`}
              >
                <Link
                  title="LinkedIn"
                  target="_blank"
                  to="https://www.linkedin.com/in/abhishek-mandal-7676162b7?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-7 h-7 text-gray-800"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.336 18.339h-2.665v-4.177c0-.996-.02-2.278-1.39-2.278c-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387c2.7 0 3.2 1.778 3.2 4.091v4.715ZM7.004 8.575a1.546 1.546 0 0 1-1.548-1.549a1.548 1.548 0 1 1 1.547 1.549Zm1.336 9.764H5.667V9.75H8.34v8.589ZM19.67 3H4.33C3.594 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.339C20.4 21 21 20.42 21 19.703V4.297C21 3.581 20.4 3 19.666 3h.003Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>

              <div
                data-aos={`fade-${
                  scrollDirection === "down" ? "right" : "left"
                }`}
                data-aos-anchor-placement={
                  scrollDirection === "down" ? "bottom-bottom" : "top-top"
                }
                data-aos-duration="1200"
                className={`rounded cursor-pointer ease-in duration-150 ${
                  scrollDirection === "down" ? "fade-in" : "fade-out"
                }`}
              >
                <Link
                  title="Facebook"
                  target="_blank"
                  to="https://www.facebook.com/share/191tev5HY2/"
                  rel="noopener noreferrer"
                  className="text-smallTextColor text-[25px] font-[600]"
                >
                  <svg
                    className="w-7 h-7 text-gray-800"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          {/* hero left end */}

          <div className="flex flex-row items-center justify-between w-full lg:h-full h-48">
            {/* Hero Image */}
            <div className="w-1/2 lg:ml-32 ml-0 pt-32 lg:pt-0">
              <img src={pp} alt="PP" className="max-w-full h-auto" />
            </div>

            {/* Hero Content */}
            <div className="w-1/2 flex flex-wrap justify-center">
              <div className="grid grid-cols-1 gap-6">
                {/* React Logo */}
                <div
                  data-aos={`fade-${
                    scrollDirection === "down" ? "left" : "right"
                  }`}
                  data-aos-duration="1200"
                  className={`container cursor-pointer ease-in duration-150 ${
                    scrollDirection === "down" ? "fade-in" : "fade-out"
                  }`}
                >
                  <Link to="#reactjs">
                    <img src={RJ} alt="React Logo" className="w-16 h-16" />
                  </Link>
                  <div className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <CountUp
                      className="text-headingColor font-[600] bold text-[20px]"
                      start={0}
                      end={80}
                      duration={4}
                      suffix="%"
                    />
                  </div>
                </div>

                {/* TypeScript Logo */}
                <div
                  data-aos={`fade-${
                    scrollDirection === "down" ? "left" : "right"
                  }`}
                  data-aos-duration="1200"
                  className={`container cursor-pointer ease-in duration-150 ${
                    scrollDirection === "down" ? "fade-in" : "fade-out"
                  }`}
                >
                  <Link to="#typescript">
                    <img src={TS} alt="TypeScript Logo" className="w-16 h-16" />
                  </Link>
                  <div className="absolute bottom-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <CountUp
                      className="text-headingColor font-[600] bold text-[20px]"
                      start={0}
                      end={70}
                      duration={4}
                      suffix="%"
                    />
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

export default Hero;
