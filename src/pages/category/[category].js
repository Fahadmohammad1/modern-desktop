import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import ProductCard from "@/components/UI/ProductCard";

const ProductsByCategoryPage = ({ products }) => {
  return (
    <div className="lg:grid grid-cols-4">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductsByCategoryPage;

ProductsByCategoryPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/category`);
  const data = await res.json();
  const paths = data?.data?.map((product) => ({
    params: {
      category: product.category,
    },
  }));

  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  //   if (typeof window === "undefined") {
  //     return {
  //       props: {
  //         products: []
  //       },
  //     };
  //   }
  const { params } = context;

  const res = await fetch(
    `${process.env.URL}/category?category=${params.category}`
  );
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
};
