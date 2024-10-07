

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import BackgroundImg from "../components/BackgroundImg";
import Footer from "../components/Footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  };


  return (


    <div className={`${darkMode ? "dark" : ""} ` }>


      <main className=" dark:bg-black dark:text-white duration-300" >
        <section className="w-full" >

          <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode} />
          <BackgroundImg />
          
        </section>


        <div className="text-center bg-gradient-to-b mx-auto from-teal-500 rounded-full w-80 h-80 overflow-hidden md:w-96 md:h-96">
        </div>
        <section className="pt-10 lg:flex gap-2">

          <div className="text-center shadow-lg pt-10 md:px-10 lg:px-40">
            <h3 className="text-3xl py-1"> Services I offer</h3>
            <p className="text-md py-2 text-gray-800">
              ffffffffffffffff <span className="text-teal-500">ffff</span>fffffffffffffffffffffffffffffffffffffffff Join me down
            </p>
            <p className="text-md py-2 text-gray-800">
              ffffffffffffffff <span className="text-teal-500">ffff</span>fffffffffffffffffffffffffffffffffffffffff Join me down
            </p>
          </div>

          <div className="text-center shadow-lg pt-10 md:px-20 lg:px-40">
            <h3 className="text-3xl py-1"> Services I offer</h3>
            <p className="text-md py-2 text-gray-800">
              ffffffffffffffff <span className="text-teal-500">ffff</span>fffffffffffffffffffffffffffffffffffffffff Join me down
            </p>
            <p className="text-md py-2 text-gray-800">
              ffffffffffffffff <span className="text-teal-500">ffff</span>fffffffffffffffffffffffffffffffffffffffff Join me down
            </p>
          </div>


        </section>


        <section>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap"></div>
          <div className="basis-1/3 flex-1">
            {/*  object-cove */}
          </div>
        </section>

        <Footer />
      </main>
      

      
    </div>
  );
}
