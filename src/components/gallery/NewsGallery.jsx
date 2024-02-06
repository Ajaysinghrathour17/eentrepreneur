import React from 'react'

const NewsGallery = () => {
    const newsData = [
        { id: 1, image:"https://scontent.fdel5-2.fna.fbcdn.net/v/t39.30808-6/348595158_125810383868398_5931086344007164403_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=QlxDsC0HO6EAX88wsHN&_nc_oc=AQl10hjWVEoPw5RRSEo6V9DtO8MUMA-FiSJGWRm9lE_W8HQE-iH0zVHmE3QWoXn0XSM&_nc_ht=scontent.fdel5-2.fna&oh=00_AfBuQ5pxm29o5ngJlo6N7KxlMpqTCjBcBTZwJRMD8uo4Vg&oe=65C2F417" ,title: 'Program 1' },
        { id: 2, image:"https://scontent.fdel5-2.fna.fbcdn.net/v/t39.30808-6/348722556_125810390535064_7531438644467860903_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=Ngz7I1scIcUAX9yVWCh&_nc_ht=scontent.fdel5-2.fna&oh=00_AfAS_Up8ldjBqvV-dnaUE9pL9oScC_PLQWUW3NIA_ZxLzw&oe=65C3B5D5", title: 'Program 1' },
        { id: 3, image:"https://scontent.fdel5-1.fna.fbcdn.net/v/t39.30808-6/352727647_117330641383039_2454725517890607298_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fP52tVWyGZMAX-AflR2&_nc_ht=scontent.fdel5-1.fna&oh=00_AfBXEzp4qqYQI-nn-L93TCqLEhoSPYGga_Vnf9mvHb4Tjw&oe=65C31F04", title: 'Program 1' },
      ];
  return (
    <>  
    <div className='text-2xl text-center font-mono underline'>
        <strong>Elegant Entrepreneur in News</strong>
    </div>
    <div className="grid grid-cols-2 m-10 sm:grid-cols-2 md:grid-cols-4  gap-4">

{newsData.map((item) => (
  <div key={item.id} timeout={500} classNames="scale h-60">
    <div className=" mx-2 ">
      <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
      </div>
    </div>
 ))}
</div>
    </>
  )
}

export default NewsGallery