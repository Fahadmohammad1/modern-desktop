import React from 'react';
import RootLayout from "@/components/Layout/RootLayout";

const ProductsByCategoryPage = () => {
    return (
        <div>
            <h1>this is category page</h1>
        </div>
    );
};

export default ProductsByCategoryPage;

ProductsByCategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };