import React from 'react'
import { AppWrap } from '../wrapper'
import { motion } from "framer-motion";
import HomeHeader from './HomeHeader';

const HomeAbout = () => {
    const abouts = [
        { title: "Web development", description: "I'm a Developer - I enjoy building stuff on the web and otherwise :). I am currently pursuing my undergraduate degree in computer science at the Dalhousie University, Canada.", imgUrl: "" },
        { title: "Web development", description: "I am a good web development.", imgUrl: "" },
        { title: "Web development", description: "I am a good web development.", imgUrl: "" },
        { title: "Web development", description: "I am a good web development.", imgUrl: "" }
      ]
    
    
  return (
    <div className="pt-10 gap-6 flex flex-col md:flex-row  md:justify-evenly md:flex-wrap">
    <HomeHeader name="About"/>
    {abouts.map((item, index) => (
      <div key={`link-${item}`} className="text-center shadow-lg p-10 md:w-1/3 md:px-20 lg:w-1/4">
        <motion.div
          whileInView={{ opacity: [0,1] }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, type: 'tween' }}>


          <h3 className="text-3xl py-1"> {item.title}</h3>
          <p className="text-md py-2 text-gray-800">{item.description}</p>


        </motion.div></div>

    ))}


  </div>
  )
}

export default AppWrap(HomeAbout, 'home-about', 'home-about')