import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }) => {
  
  return (
    <section className="mb-5">
      <div className="flex flex-col justify-center items-center">
        <Link href={`/product/${product._id}`}>
        <div title="Click to view details" className="!z-5 relative flex flex-col rounded-[10px] max-w-[300px]  bg-clip-border w-full !p-4 3xl:p-![18px] hover:shadow-xl">
          <div className="h-full w-full">
            <div className="relative w-full">
              <Image
                width={400}
                height={400}
                src={product.image}
                className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                alt="product"
              />
            </div>
            <div className="mb-3 flex items-center justify-between px-1 md:items-start">
              <div className="mb-2">
                <p className="text-base font-bold text-navy-700">
                  {product.name}
                </p>
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
              </div>
            </div>
          </div>
        </div>
        </Link>
      </div>
    </section>
  );
};

export default ProductCard;
