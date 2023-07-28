import { useRouter } from 'next/router';
import React from 'react';
import RootLayout from "@/components/Layout/RootLayout";

const ProductDetailPage = () => {
    const router = useRouter()
    return (
        <div>
            <h1>this is product details page of {router.query.productId}</h1>
        </div>
    );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };