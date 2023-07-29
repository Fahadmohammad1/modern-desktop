import Image from "next/image";
import React from "react";

const ProductCardTwo = ({ product }) => {
  return (
    <div className="mb-8 lg:flex lg:gap-10 shadow-xl p-5 rounded-xl">
      <div className="flex items-center lg:p-5">
        <Image
          src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB"
          width={280}
          height={200}
          alt="components"
        />
      </div>
      <div className="w-full">
        <h1 className="text-xl">{product.name}</h1>
        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
          Category : {product.category}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
          Price : {product.price}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
          Status : {product.status}
        </p>
        <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
          Rating : {product.rating}
        </p>
        <div className="flex justify-end -mt-8">
          <button>Choose</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
