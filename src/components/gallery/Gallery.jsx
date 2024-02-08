import React from 'react'
import GalleryItem from './GalleryItem';
import {   gall1, gall3, gall4, gall5,gall6,gall7,gall8, gall9 ,gall10, gall11}  from "../../assets/image"
import NewsGallery from './NewsGallery';
import Videos from './Videos';
const Gallery = () => {
  const galleryItems = [
    { id: 1, image: 'https://www.katariaweb.in/assets/img/4.jpeg', title: 'Program 1' },
   
  ];
  //photoes
  const galleryData = [
    { id: 1, image: gall1 , },
    { id: 2, image: gall3,  },
    { id: 3, image: gall4,  },
    { id: 4, image: gall5,  },
    { id: 5, image: gall6,  },
    { id: 6, image: gall7,  },
    { id: 7, image: gall8,  },
    { id: 8, image: gall9,  },
    // { id: 9, image: gall10,  },
    { id: 10, image: gall11,  },
    // { id: 11, image: gall9,  },


  ];
  // const galleryPhotoes = [
  //   { id: 1, image: gallery1 ,title: 'Program 1' },
  //   { id: 2, image: gallery2, title: 'Program 1' },
  //   { id: 3, image: gallery4, title: 'Program 1' },
  //   { id: 4, image: gallery3, title: 'Program 1' },
  // ];
  return (
    <>
     <div className="gallery_section">
          <div className="gallery_head">
             <div className='bg-gray-600   h-auto sm:h-auto text-white flex-col item-center '>
                <h3 className='text-4xl font-sans text-center  py-10 '>Gallery</h3>
                  <p className='font-medium	 text-base  text-center pb-4'>We hope that our collection of the best family members will inspire you and encourage your wandering soul!</p>
               
             </div>
          </div>
     </div>
     
     {/* images */}
    
    {/* gallery */}

    <div className="container mx-auto my-8">
      <GalleryItem  data={galleryData} />
    </div>
    <div>
    <div className="bg-gray-700  ">
        <h2 className=" py-8 text-white   duration-200 text-3xl font-sans text-center  ">
          Video
        </h2>
      </div>
      <Videos />

    </div>
    </>
  )
}

export default Gallery