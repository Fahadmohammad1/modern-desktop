import { useRouter } from 'next/router';
import React from 'react';
import RootLayout from "@/components/Layout/RootLayout";
import Image from 'next/image';

const ProductDetailPage = ({product}) => {
    console.log(product);
    return (
        <section>
           <div className='lg:grid grid-cols-2 mt-5'>
           <div className=''>
                <Image src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB" width={600} height={500} alt='component'></Image>
            </div>
            <div className=''>
            <p className="text-xl font-bold text-navy-700">
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
        </section>
    );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };

  export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};


  export const getStaticProps = async (context) => {
    const {params} = context
    const res = await fetch(`http://localhost:5000/products/${params.productId}`)
    const data = await res.json()
  
    return {
      props : {
        product : data.data
      }
    }
  }