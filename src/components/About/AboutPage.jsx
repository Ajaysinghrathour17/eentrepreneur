import React from 'react'
import About from './About'
import Vision from './Vision'

const AboutPage = () => {
  return (
    <>
     
      <div className="pb-8">
        <div className='bg-gray-700  '>
            <h2 
            className= " py-10 text-white   duration-200 text-3xl font-sans text-center  "
        
        >About Us</h2>
            
        </div>
        <About />
        
      </div>
    </>
  )
}

export default AboutPage