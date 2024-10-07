import React, { useState } from 'react'
import { Link } from "wouter";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = (props) => {
    const darkMode = props.darkMode;
    function handleDarkMode() {
        props.handleDarkMode();
    }

    const [menuClicked, setMenuClicked] = useState(false);
    
    function handleMenuClick() {
        setMenuClicked(!menuClicked);
    }

    const [color, setColor] = useState(false);
    
    const HandleScrolling = () => {
        if(window.scroll.y >= 100){
            setColor(true);
        } else{
            setColor(false);
        }
    }

    window.addEventListener("scroll", HandleScrolling)




    return (
        <nav className={`${color ? "bg-teal-200":""} z-10 fixed w-full h-9 bg-teal-200 bg-opacity-50  rounded-lg  py-10 flex justify-between`}>
            <div className='pl-2'>
                <Link to='/'>
                    <h1 className="text-xl playwrite">Portfolio</h1>
                </Link>
            </div>

            <div className='flex gap-3 pr-3 '>
                <div className='invisible md:visible'>
                    <BsFillMoonStarsFill className="cursor-pointer text-2xl" onClick={handleDarkMode} />
                </div>
                <ul className={`z-20 fixed top-0 duration-300 ease-in w-full h-screen ${menuClicked ? "left-0  bg-teal-100 bg-opacity-50 backdrop-blur-sm dark:bg-teal-700 dark:bg-opacity-50 dark:backdrop-blur-sm": "-left-full"}   flex items-center gap-2 flex-col justify-center text-3xl md:h-auto md:text-lg md:flex-row md:left-0 md:relative`}>
                    <li className='hover:opacity-50 duration-300 '>
                        <Link to='/project'>Project</Link>
                    </li>
                    <li className='hover:opacity-50 duration-300'>
                        <Link to='/about'>About</Link>
                    </li>
                    <li className='hover:opacity-50 duration-300'>
                        <Link to='/contact'>Contact</Link>
                    </li>

                    {/* <li>
                    <a className="bg-cyan-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
                </li> */}
                </ul>
                <div className='z-20 fixed cursor-pointer md:hidden' onClick={handleMenuClick}>
                    {menuClicked ? <FaTimes /> : <FaBars size={20} style={darkMode ? { color: "#fff" } : { color: "#000" }} />}
                </div>

            </div>
        </nav>

    )
}

export default Navbar