import React from 'react'
import { media1, media2 } from '../../assets/image';

const NewsGallery = () => {
    const newsData = [
        { id: 1, image:media2 ,title: 'news 1' },
        { id: 2, image:media1, title: 'news 2' },
    
      ];
  return (
    <>  
    <div className='bg-gray-700 text-2xl text-center font-sans'>
       <h2 className='py-10 text-white '>Elegant Entrepreneur on Media</h2>
    </div>
    <div className="grid grid-cols-2 m-10 sm:grid-cols-2 md:grid-cols-4  gap-4">

{newsData.map((item) => (
  <div key={item.id} timeout={500} classNames="scale h-60">
    <div className=" mx-2 " data-aos="fade-up" data-aos-delay="200">
      <a href={item.image} target='_blank' >
      <img src={item.image} alt={item.title} className="w-full h-96 object-contain" />
      </a>
      </div>
    </div>
 ))}
</div>
    </>
  )
}

export default NewsGallery