import React from "react";
import { Card } from "antd";
import { BsCpu, BsDeviceHdd, BsMotherboard } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { MdOutlinePower } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import Link from "next/link";

const FeaturedCategory = () => {
  
  return (
    <section>
      <h2 className="text-center my-10">Featured Categories</h2>
      <div className="lg:grid grid-cols-4 gap-5">
        <Link href="/category/cpu">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <BsCpu className="text-7xl" />
          </div>
          <p className="font-medium text-center">CPU / Processor</p>
        </Card>
        </Link>
        <Link href="/category/motherboard">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <BsMotherboard className="text-7xl" />
          </div>
          <p className="font-medium text-center">Motherboard</p>
        </Card>
        </Link>
        <Link href="/category/ram">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <CgSmartphoneRam className="text-7xl" />
          </div>
          <p className="font-medium text-center">RAM</p>
        </Card>
        </Link>
        <Link href="/category/power supply">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <MdOutlinePower className="text-7xl" />
          </div>
          <p className="font-medium text-center">Power Supply</p>
        </Card>
        </Link>
        <Link href="/category/storage">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <BsDeviceHdd className="text-7xl" />
          </div>
          <p className="font-medium text-center">Storage</p>
        </Card>
        </Link>
        <Link href="/category/monitor">
        <Card className="flex flex-col justify-center items-center shadow-md">
          <div className="flex justify-center">
            <CiMonitor className="text-7xl" />
          </div>
          <p className="font-medium text-center">Monitor</p>
        </Card>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCategory;
