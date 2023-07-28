import React from "react";
import CategoryCard from "./CategoryCard";

const FeaturedCategory = ({products}) => {
  console.log(products);
  return (
    <section>
      <h2 className="text-center">Featured Categories</h2>
      <div className="lg:grid grid-cols-3 gap-5 ">
        {
          products.map(product => <CategoryCard key={product._id} category={product.category}/>)
        }
      </div>
    </section>
  );
};

export default FeaturedCategory;
