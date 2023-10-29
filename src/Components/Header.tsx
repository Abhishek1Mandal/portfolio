import { useRef } from "react";
const Header = () => {
  // Define menuRef with the correct type (HTMLDivElement)
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    if (menuRef.current) {
      // Use classList on menuRef.current, ensuring it's not null
      menuRef.current.classList.toggle("show__menu");
    }
  };

  return (
    <>
      <header className="w-full pl-4 h-[80px] bg-[#444] leading-[80px] flex items-center">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo start */}
            <div className="flex gap-[10px]">
              <span className="w-[35px] h-[35px] mt-2 bg-white text-black text-[18px] font-[500] rounded-full flex items-center justify-center">
                <b>AM</b>
              </span>

              <div className="leading-[20px]">
                <h2 className="text-xl text-white font-[700]">
                  Abhishek Mandal
                </h2>
                <p className="text-white text-[14px] mb-1 font-[500]">
                  Portfolio
                </p>
              </div>
            </div>
            {/* Logo end */}

            {/* Menu start */}
            <div className="menu" ref={menuRef} onClick={toggleMenu}>
              <ul className="flex items-center gap-10">
                <li className="text-white font-[600]">
                  <a href="#about">About</a>
                </li>
                <li className="text-white font-[600]">
                  <a href="#services">Services</a>
                </li>
                <li className="text-white font-[600]">
                  <a href="#portfolio">Portfolio</a>
                </li>
                <li className="text-white font-[600]">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            {/* Menu end */}

            {/* Menu-right */}
            <div className="flex items-center gap-4">
            <a href="src\assets\My components\Resume (Abhi).pdf" download="Abhishek Resume">
                <button className="md:flex md:items-center mx-4 my-6 md:my-0 flex items-center gap-2 text-white font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-200">
                  <svg
                    className="w-4 h-4 text-white dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 19"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 15h.01M4 12H2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3M9.5 1v10.93m4-3.93-4 4-4-4"
                    />
                  </svg>
                  Resume
                </button>
              </a>

              <span
                onClick={toggleMenu}
                className="text-2xl text-smallTextColor md:hidden cursor-pointer"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
