import React from 'react'
import About from './About'
import Vision from './Vision'

const AboutPage = () => {
  return (
    <>
     
      <div className="">
        <div className='bg-gray-100 h-20 '>
            <h2 
            className= "block pt-8  pl-20 duration-200 text-3xl font-sans text-center  "
        
        >About Us</h2>
            
        </div>
        <About />
        
      </div>
    </>
  )
}

export default AboutPage