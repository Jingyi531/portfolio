import React, { Children, useState } from 'react'
import { AppWrap } from '../wrapper'
import { motion } from "framer-motion";
import HomeHeader from './HomeHeader';

const HomeProjects = () => {

  const [activeFilter, setActiveFilter] = useState('All')
  const [animatedCard, setAnimatedCard] = useState({ y: 0, opacity: 1 })
  const handleWorkFiler = (items) => {

  }
  const catagories = ['UI/UX', 'Web App', 'Mobile App', 'ML Model']
  const projects = [
    { title: "Web development", description: "I'm a Developer - I enjoy building stuff on the web and otherwise :). I am currently pursuing my undergraduate degree in computer science at the Dalhousie University, Canada.", imgUrl: "" },
    { title: "Web development", description: "I am a good web development.", imgUrl: "" },
    { title: "Web development", description: "I am a good web development.", imgUrl: "" },
    { title: "Web development", description: "I am a good web development.", imgUrl: "" }
  ]


  return (
    <div className="pt-10 ">
      <HomeHeader name="Projects" />
      <div className=' gap-6 flex justify-start items-center flex-wrap'>
        {catagories.map((item, index) => (
          <div key={`link-${item}`}
            onClick={() => handleWorkFiler(item)}
            className={`${activeFilter ? "" : ""} font-medium text-center shadow-lg p-4 cursor-pointer hover:bg-teal-300 hover:text-white hover:translate-x-2 hover:duration-300`}>
            {item}
          </div>

        ))}

      </div>




      <div className="pt-10 gap-6 flex flex-col md:flex-row  md:justify-evenly md:flex-wrap">
        {projects.map((item, index) => (
          <div key={`link-${item}`} className="text-center shadow-lg p-10 md:w-1/3 md:px-20 lg:w-1/4">
            <motion.div
              animate={animatedCard}
              transition={{ duration: 1, delayChildren: 0.5 }}>


              <img />
              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, staggerChildren: 0.5 }}
                className='flex'>

              </motion.div>

            </motion.div></div>

        ))}


      </div>


    </div>
  )
}

export default AppWrap(HomeProjects, 'home-projects', 'home-projects')