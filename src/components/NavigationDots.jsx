import React from 'react'
import "../App.css";


const NavigationDots = ({active}) => {
    return (
        <div className='app__navigation fixed right-0 top-1/3 slate-600'>{
            ['home-background-img', 'home-about','home-projects', 'home-skills',  'home-contact'].map((item, index) => (

                <a href={`#${item}`}
                    key={`${item} ${index}`}
                    className={`app__navigation-dot ${active === item ? "bg-teal-400" : "bg-slate-500"}`}
                ></a>


            ))
        }
        </div>
    )
}

export default NavigationDots