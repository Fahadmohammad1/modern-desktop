import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import ProductCardTwo from "@/components/UI/ProductCardTwo";

const ChooseProductPage = ({ products }) => {
  return (
    <section className="lg:w-[60%] mx-auto pt-10">
        <div className=""> 
        {
            products?.map(product => <ProductCardTwo key={product._id} product={product}/>)
        }
        </div>
    </section>
  );
};

export default ChooseProductPage;

ChooseProductPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const res = await fetch(
    `${process.env.URL}/category?category=${params.categoryQuery}`
  );
  const data = await res.json();

  return {
    props: {
      products: data.data,
    },
  };
};


