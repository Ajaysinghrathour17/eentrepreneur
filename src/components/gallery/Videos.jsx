import { eventV1, eventV2, eventV3, eventV4, eventV5,} from '../../assets/image'
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Videos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true // animate only once
    });
  }, []);

  return (
     < > 
       <div className='bg-gray-200'>
       <div className='text-center text-2xl font-semibold pt-4 '>
      <p>Videos</p>
     </div>
       <div className="flex flex-wrap justify-center ">
        
      <div className="w-full md:w-1/2 lg:w-1/3  p-4" data-aos="fade-up">
        <video className="w-full" controls >
          <source src={eventV1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='text-center text-xl w-full bg-white'><p>Food Competition</p></div>
        {/* <div><h2 className=''> Food Competition</h2></div> */}
      </div>
      <div className="w-full md:w-1/2  lg:w-1/3  p-4" data-aos="fade-up" data-aos-delay="200">
        <video className="w-full" controls  >
          <source src={eventV2} type="video/mp4" />
          Your browser does not support the video tag.  
        </video>
        <div className='text-center text-xl w-full bg-white'><p>Food Competition</p></div>

      </div>
      <div className="w-full md:w-1/2  lg:w-1/3  p-4" data-aos="fade-up" data-aos-delay="400">
        <video className="w-full" controls  >
          <source src={eventV3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='text-center text-xl w-full bg-white'><p>Food Competition</p></div>

      </div>
      <div className="w-full md:w-1/2 lg:w-1/3  p-4" data-aos="fade-up" data-aos-delay="600">
        <video className="w-full" controls >
          <source src={eventV4} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className='text-center text-xl w-full bg-white'><p>Diwali Celebration</p></div>

      </div>
      <div className="w-full  md:w-1/2 lg:w-1/3  p-4" data-aos="fade-up" data-aos-delay="600">
        <video className="w-full " controls >
          <source src={eventV5} type="video/mp4"  />
          Your browser does not support the video tag.
        </video>
        <div className='text-center text-xl w-full bg-white'><p>Blanket Distrubution </p></div>

      </div>
    </div>
       </div>
     </>
  );
}

export default Videos;
