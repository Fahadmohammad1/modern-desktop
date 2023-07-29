import { Card } from "antd";
import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import { BsCpu, BsDeviceHdd, BsMotherboard } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { MdOutlinePower } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import Link from "next/link";

const PcBuilderPage = () => {
  return (
    <section className="flex justify-center mt-8">
      <Card
        bordered={true}
        className="shadow-lg px-5 text-center lg:w-3/4"
      >
        <h1 className="text-center my-5 uppercase">Build Your Dream Pc With Your Favourite Components</h1>
        <hr className="mb-5"/>
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-5 items-center">
            <BsCpu className="text-5xl"/>
            <p>CPU/ Processor</p>
          </div>
          <div>
            <button className="btn p-1"><Link href="/category/cpu">Choose</Link></button>
          </div>
        </div>
        
      </Card>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
