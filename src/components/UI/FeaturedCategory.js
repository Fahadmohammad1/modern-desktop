import React from "react";
import { Card } from "antd";
import { BsCpu } from "react-icons/bs";
import Link from "next/link";

const FeaturedCategory = () => {
  
  return (
    <section>
      <h2 className="text-center my-10">Featured Categories</h2>
      <div className="lg:grid grid-cols-3 gap-5 ">
        <Link href="/category/cpu">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <BsCpu className="text-7xl" />
          </div>
          <p className="font-medium text-center">CPU / Processor</p>
        </Card>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCategory;
