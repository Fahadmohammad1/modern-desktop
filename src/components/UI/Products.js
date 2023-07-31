import React from 'react';
import ProductCard from './ProductCard';

const Products = ({products}) => {
    
    return (
        <section >
            <h2 className='text-center my-10'>Featured Products</h2>
            <div className='lg:grid grid-cols-4'>
            {
                products?.map(product => <ProductCard key={product._id} product={product}/>)
            }
            </div>
        </section>
    );
};

export default Products;