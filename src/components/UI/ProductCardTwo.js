import { useAddToBuilderMutation } from "@/redux/api/api";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductCardTwo = ({ product }) => {
  const router = useRouter()

  const handleAddToBuilder = (product) => {
    const data = JSON.parse(localStorage.getItem('products')) || []
    if(!data.some((p) => p.category.toUpperCase() === product.category.toUpperCase())) {
      data.push(product)
      localStorage.setItem('products', JSON.stringify(data))
    }

    router.push({
      pathname: '/pc-builder',
    });
  };
  return (
    <div className="mb-8 lg:flex lg:gap-10 shadow-xl p-5 rounded-xl">
      <div className="flex items-center lg:p-5">
        <Image
          src={product.image}
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
          <button onClick={() => handleAddToBuilder(product)}>Add To Builder</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardTwo;
