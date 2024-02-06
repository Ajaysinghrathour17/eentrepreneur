import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const GalleryItem = ({ data }) => {
  return (
    <div className="grid grid-cols-2 m-10 sm:grid-cols-2 md:grid-cols-2  gap-4">
      <TransitionGroup component={null}>
        {data.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="scale ">
            <div className=" mx-2  ">
              <div className="rounded-[10px] flex items-center justify-center  group-hover:opacity-50  transition-opacity duration-300 bg-black bg-opacity-50">
              <img src={item.image} alt={item.title} className="w-full h-96 object-cover hover:scale-100" />

              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default GalleryItem;
