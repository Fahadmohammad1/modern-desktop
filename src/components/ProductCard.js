import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
    return (
        <section>
            <div className="flex flex-col justify-center items-center h-[100vh]">
            <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px] undefined">
                <div className="h-full w-full">
                    <div className="relative w-full">
                        <Image width="500" height={500} src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB" className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full" alt=""/>
                        
                    </div>
                    <div className="mb-3 flex items-center justify-between px-1 md:items-start">
                        <div className="mb-2">
                            <p className="text-lg font-bold text-navy-700"> Abstract Colors </p>
                            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">By Esthera Jackson </p>
                        </div>
                        
                    </div>
                    <div className="flex items-center justify-between md:items-center lg:justify-between ">
                        <div className="flex">
                            <p className="!mb-0 text-sm font-bold text-brand-500">Current Bid: 0.91 <span>ETH</span></p>
                        </div>
                        <button href="" className="linear rounded-[20px] bg-brand-900 px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700">Place Bid</button>
                    </div>
                </div>
            </div>
            <p className="font-normal text-navy-700 mt-20 mx-auto w-max">Notifications Card component from <a href="https://horizon-ui.com?ref=tailwindcomponents.com" target="_blank" className="text-brand-500 font-bold">Horizon UI Tailwind React</a></p>  
        </div>
        </section>
    );
};

export default ProductCard;