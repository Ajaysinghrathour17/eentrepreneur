import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const GalleryItem = ({ data }) => {
  return (
    <div className="grid grid-cols-2 m-4 sm:grid-cols-2 md:grid-cols-4  gap-4">
      <TransitionGroup component={null}>
        {data.map((item) => (
          <CSSTransition key={item.id} timeout={500} classNames="scale ">
            <div className="relative  group">
              <img src={item.image} alt={item.title} className="w-full h-96 object-cover" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-50  transition-opacity duration-300 bg-black bg-opacity-50">
              </div>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default GalleryItem;
