import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface CarouselProps{
  interval: number;
  transitionTime: number;
  showThumbs: boolean;
  showStatus:boolean;
}


export default function HPCarousel() {
  return (
    <main>
      <div className='w-[800px] h-[72px]'>
        <Carousel autoPlay showThumbs={false} showStatus={false} interval={2500} transitionTime={500} infiniteLoop>
          <div>
            <img src="/img-1.jpeg" alt="image1" />
          </div>
          <div>
            <img src="/img-2.jpeg" alt="image2" />
          </div>
          <div>
            <img src="/img-3.jpeg" alt="image3" />
          </div>
          <div>
            <img src="/img-4.gif" alt="image4" />
          </div>
        </Carousel >
      </div>
    </main>
  );
}
