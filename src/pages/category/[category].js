import React from 'react';
import RootLayout from "@/components/Layout/RootLayout";
import { useRouter } from 'next/router';

const ProductsByCategoryPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>this is category page {router.query.category}</h1>
        </div>
    );
};

export default ProductsByCategoryPage;

ProductsByCategoryPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };