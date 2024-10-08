import React from 'react'

const HomeHeader = (props) => {
    const headerName = props.name;
  return (
    <div className='pt-10 md:py-5 pl-5 md:pl-10 lg:pl-30 w-3/4 text-3xl lg:text-5xl border-teal-700 border-b-2'>{headerName}</div>
  )
}

export default HomeHeader