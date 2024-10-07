import React from 'react'
import coding from "../assets/coding.jpg"
import { AiFillTwitterCircle, AiFillYoutube, AiFillLinkedin } from "react-icons/ai";

const BackgroundImg = () => {
    return (
        <div className=''>
            <div className=' h-screen opacity-40 bg-fixed'  >
                <img src={coding} alt='coding' className='object-cover w-full h-full'  />
            </div>
            <div className="absolute top-1/3  w-full backdrop-blur-sm">
                <div className="text-center ">
                    <h2 className=" text-5xl py-2 text-teal-600 font-bold md:text-6xl">Jingyi Yang</h2>
                    <h3 className="playwrite text-xl py-2 font-medium md:text-3xl" >Developer and Learner</h3>
                    <p className="text-md py-5 text-gray-800 max-w-xl mx-auto md:text-xl dark:text-gray-500">ffffffffffffffff fffffffffffffffffffffffffffffffffffffffff Join me down</p>
                </div>
                <div className="text-3xl flex justify-center gap-16 py-3 text-gray-600">
                    <AiFillLinkedin />
                    <AiFillTwitterCircle />
                    <AiFillYoutube />
                </div>
                
            </div>
        </div>

    )
}

export default BackgroundImg