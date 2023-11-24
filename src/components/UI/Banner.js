import React from 'react';
import { Carousel } from 'antd';
import banner1 from '../../assets/banner-1.jpg'
import Image from 'next/image';

const Banner = () => (
  <Carousel autoplay className='mt-10 lg:mt-0 lg:h-screen'>
    <div>
      <Image width={400} height={600} className='w-full' src={banner1} alt='banner' />
    </div>
    <div>
      <Image width={400} height={600} className='w-full' src={banner1} alt='banner' />
    </div>
  </Carousel>
);
export default Banner;