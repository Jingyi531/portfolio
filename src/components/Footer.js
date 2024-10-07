import React from 'react'
import { FaHome, FaPhone } from 'react-icons/fa'

const Footer = () => {
    return (
        <div>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#888",marginRight:"2em"}}/>
                </div>
                <div className='phone '>
                    <FaPhone size={20} style={{color:"#888",marginRight:"2em"}}/>
                    <p className='text-lg '>1-902-499-8220</p>
                </div>
            </div>

            <div className='right'>
                <h4></h4>
                <div className='social'>

                </div>
            </div>
        </div>
    )
}

export default Footer