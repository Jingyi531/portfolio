import React from 'react'
import NavigationDots from '../components/NavigationDots'
import SocialMedia from '../components/SocialMedia'

const AppWrap = (Component, idName, className) => function HOC(){
  return (
    <div id={idName} className={`${className}`}>
  
        <div className='app__wrapper'>
            <Component />
        </div>

       

        <NavigationDots active={idName} />
    </div>
  )
}

export default AppWrap