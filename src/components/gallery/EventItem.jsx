import React from 'react'
import { event1 } from '../../assets/image';

const EventItem = () => {
    const galleryItems = [
        {
          id: 1,
          image:event1,
          src:"https://www.facebook.com/photo.php?fbid=117330651383038&set=pb.100093183115275.-2207520000&type=3"  ,
          title: "Food Competition",
        },
        // {
        //   id: 2,
        //   image: "https://www.facebook.com/reel/379386294517949",
        //   title: "Social Work" }
        // Add more items as needed
      ];
  return (
    <>
    <div className="grid grid-cols-2 mt-5 md:m-5 lg:grid-cols-4  gap-6">
          {galleryItems.map((item) => (
            <div key={item.id} className="p-2 bg-white rounded-md shadow-md">
              <a href={item.src} target="_blank">
              <img
                src={item.image}
                alt={item.title}
                className="object-contain rounded-md mb-2 hover:shadow-2xl transition duration-300 transform hover:scale-105"
              />
              </a>
              <h3 className="text-lg font-medium text-center">{item.title}</h3>
              {/* Add additional information or actions as needed */}
            </div>
            
          ))}
        </div>
    </>
  )
}

export default EventItem