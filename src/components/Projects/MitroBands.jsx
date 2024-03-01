import React from 'react';
import { mitrobandImg } from '../../assets/image';

const MitroBands = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Mitro Bands</h2>
      <div className="bg-gray-100 rounded-lg p-4">
        <div className=''>
        <img src={mitrobandImg} alt="Mitro Bands" className="w-full  rounded-lg mb-4" />

          </div>
        <p className="text-gray-700 mb-4">Mitro Bands is your go-to choice for adding that extra touch of entertainment and excitement to your special events. Whether it's a wedding, corporate event, or any other occasion, our talented bands create an unforgettable experience for you and your guests. With a diverse repertoire and unmatched professionalism, we ensure that your event is a resounding success.</p>
        
        <h3 className="text-xl font-bold mb-2"> Services:</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Live band performances for weddings</li>
          <li>Corporate event entertainment</li>
          <li>Customized music playlists</li>
          <li>And more...</li>
        </ul>
        
        {/* <h3 className="text-xl font-bold mb-2">Why Choose Us?</h3>
        <p className="text-gray-700 mb-4">With years of experience in the entertainment industry, we understand the importance of creating memorable moments for our clients. Our bands are highly skilled and versatile, capable of adapting to various musical preferences and event atmospheres. Let us elevate your event with our exceptional musical talent and professionalism.</p> */}
        
        <a href="/" className="text-blue-500 hover:underline">Back to Home</a>
      </div>
    </div>
  );
};

export default MitroBands;
