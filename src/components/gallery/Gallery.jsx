import React from 'react'

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: 'https://www.katariaweb.in/assets/img/4.jpeg', title: 'Program 1' },
   
  ];
  return (
    <>
     <div className="gallery_section">
          <div className="gallery_head">
             <div className='bg-gradient-to-r from-black via-purple-400 to-black h-72 text-white flex-col item-center '>
                <h3 className='text-4xl font-bold text-center  pt-4'>Photo Gallery</h3>
                  <p className='font-medium	 text-base  text-center'>We hope that our collection of the best family members will inspire you and encourage your wandering soul!</p>
               
             </div>
          </div>
     </div>
     {/* images */}
     <div className="grid  gap-1 mt-[-120px] mb-10 mx-10 sm:grid-cols-3   lg:grid-cols-3 xl:grid-cols-3">
      {/* First Image */}
      <div className="col-span-1 border-2 rounded-[10px] ">
        <img
          src={galleryItems[0].image}
          alt={galleryItems[0].title}
          className="w-full h-auto  rounded-[10px] shadow-md "
        />
      </div>

      {/* Center Image (with reduced width) */}
      <div className=" border-2 rounded-[10px] sm:w-[70%] sm:ml-8  md:ml-10 lg:ml-14">
        <img
          src={galleryItems[0].image}
          alt={galleryItems[0].title}
          className="h-full  rounded-[10px]  shadow-md"
        />
      </div>

      {/* Last Image (same size as the first) */}
      <div className="col-span-1 border-2 rounded-[10px]">
        <img
          src={galleryItems[0].image}
          alt={galleryItems[0].title}
          className="w-full h-auto rounded-[10px] shadow-md"
        />
      </div>
    </div>
    </>
  )
}

export default Gallery