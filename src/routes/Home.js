

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundImg from "../sections/BackgroundImg";
import Footer from "../components/Footer";
import { MdDescription } from "react-icons/md";

import HomeAbout from "../sections/HomeAbout";
import HomeProjects from "../sections/HomeProjects.js";
import HomeHeader from "../sections/HomeHeader.js";


function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  };




  return (


    <div className={`${darkMode ? "dark" : ""} `}>


      <main className=" dark:bg-black dark:text-white duration-300 " >
        <section className="w-full" >

          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <BackgroundImg />

        </section>



        {/* about section */}
        <div className="absolute top-[110%] w-[94vw] justify-center">
          <div className=" text-center bg-gradient-to-b mx-auto from-teal-500 rounded-full w-96 h-96 overflow-hidden md:w-96 md:h-96">
          </div>
        </div>
        <div className="px-10 lg:px-40">
        <HomeAbout />
        <HomeProjects />

        </div>
       
        


        <section>
          <div className="relative flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"></div>
          <div className="basis-1/3 flex-1">
            {/*  object-cove */}
          </div>
        </section>

        <Footer />
      </main>



    </div>
  );
}

export default Home