import React from 'react';
import { Carousel } from 'antd';

const Banner = () => (
  <Carousel autoplay className='h-screen'>
    <div>
      <img className='w-full' src='https://www.techlandbd.com/image/cache/wp/gp/image-fixing/new-7years-slider-1024x476.webp' alt='banner'/>
    </div>
    <div>
      <img className='w-full' src="https://www.techlandbd.com/image/cache/wp/gp/image-fixing/new-7years-slider-1024x476.webp" alt="" />
    </div>
  </Carousel>
);
export default Banner;