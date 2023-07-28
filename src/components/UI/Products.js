import React from 'react';
import ProductCard from './ProductCard';

const Products = ({products}) => {
    const randomProducts = products.slice().sort(() => Math.random() - 0.5).slice(0,6)
    console.log(randomProducts);
    return (
        <section >
            <h2 className='text-center'>Featured Products</h2>
            <div className='lg:grid grid-cols-3'>
            {
                randomProducts.map(product => <ProductCard key={product._id} product={product}/>)
            }
            </div>
        </section>
    );
};

export default Products;