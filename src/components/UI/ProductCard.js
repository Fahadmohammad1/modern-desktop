import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const ProductCard = ({ product }) => {
  const router = useRouter()
  console.log(router);
  return (
    <section className="mb-5">
      <div className="flex flex-col justify-center items-center">
        <Link href={`/product/${product._id}`}>
        <div className="!z-5 relative flex flex-col rounded-[20px] max-w-[300px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 w-full !p-4 3xl:p-![18px]">
          <div className="h-full w-full">
            <div className="relative w-full">
              <Image
                width="500"
                height={500}
                src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB"
                className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
                alt=""
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
