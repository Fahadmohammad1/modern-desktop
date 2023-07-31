import { useRouter } from "next/router";
import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="lg:grid grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Image
            src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB"
            width={500}
            height={350}
            alt="component"
          ></Image>
        </div>
        <div className="lg:col-span-7">
          <p className="text-xl font-bold text-navy-700">{product?.name}</p>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            Category : {product?.category}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            Price : {product?.price}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            Status : {product?.status}
          </p>
          <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
            Rating : {product?.rating}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  // if(typeof window === 'undefined') {
  //   return {
  //     props : {
  //       product : {}
  //     }
  //   }
  // }
  const { params } = context;
  const res = await fetch(`${process.env.URL}/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
