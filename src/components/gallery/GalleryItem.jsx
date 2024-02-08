import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const GalleryItem = ({ data }) => {
  return (
    <div className="grid grid-cols-1 m-10 sm:grid-cols-2 md:grid-cols-3  gap-4">
      <TransitionGroup component={null}>
        {data.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="scale ">
            <div data-aos="fade-up" className=" mx-2">
              <div  className="rounded-[10px] flex flex-wrap  group-hover:opacity-50  transition-opacity  bg-black bg-opacity-50">
              <img src={item.image} alt={item.title} className="w-full  object-cover transition duration-300 hover:scale-110" />

              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default GalleryItem;
