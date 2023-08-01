import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";
import { Rate } from 'antd';
import { Collapse} from 'antd';
import { BsArrowReturnRight } from "react-icons/bs";

const ProductDetailPage = ({ product }) => {
  
  return (
    <section className="lg:gap-y-20 lg:mt-0 mt-12">
      <div className="lg:h-screen flex flex-col justify-center items-center"><div className="lg:grid grid-cols-12 gap-10">
        <div className="lg:col-span-5 lg:px-0 px-3">
          <Image
            src={product.image}
            width={400}
            height={350}
            alt="component"
          ></Image>
        </div>
        <div className="lg:col-span-7 flex flex-col lg:pl-10 lg:text-start text-center">
          <p className="lg:text-2xl text-xl font-bold text-navy-700 mt-0">{product?.name}</p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Category : {product?.category}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Price : {product?.price}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Status : {product?.status}
          </p>
          {product.rating && <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Rating : <Rate allowHalf defaultValue={Number(product.rating)} />
          </p>}
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Individual Rating : {product.individualRating}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Average Rating : {product.averageRating}
          </p>
        </div>
      </div></div>

      <div className="w-3/4 mx-auto">
        <div className="lg:grid grid-cols-12 gap-10">
          <div className="lg:col-span-5 justify-start">
            <h1 className="text-2xl">Key Features</h1>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {product.keyFeatures && Object.entries(product.keyFeatures).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-300 text-lg">
                    <td className="border-2 bor border-black p-2 font-semibold">{key}</td>
                    <td className="border border-gray-300 p-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-2xl">Description</h1>

            <p>{product.description}</p>
          </div>
        </div>
        <div>
          <h2 className="my-10 text-center">Customer Reviews</h2>
          {
            product.reviews.map(review => <div key={review.username}>
              <Collapse
                items={[
                  {

                    label: (review.username),
                    children: <p><BsArrowReturnRight/>{" "}{review.reviewText}</p>,
                  },
                ]}
              />
            </div>)
          }
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
