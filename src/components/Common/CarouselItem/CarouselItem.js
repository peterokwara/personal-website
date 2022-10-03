import React from 'react';

export const CarouselItem = (props) => {
    return (
        <div className='carousel-item'>
            {props.children}
        </div>
    )
}