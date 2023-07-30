import { Card } from "antd";
import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import { BsCpu, BsDeviceHdd, BsMotherboard } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { MdOutlinePower } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { useRouter } from "next/router";

const PcBuilderPage = () => {
  const catagories = [
    { key : '1',
      category : 'cpu',
      icon : (<BsCpu className="text-6xl"/>),
      name : 'CPU / Processor'
    },
    { key : '2',
      category : 'motherboard',
      icon : (<BsMotherboard className="text-6xl"/>),
      name : 'Motherboard'
    },
    { key : '3',
      category : 'ram',
      icon : (<CgSmartphoneRam className="text-6xl"/>),
      name : 'RAM'
    },
    { key : '4',
      category : 'power supply',
      icon : (<MdOutlinePower className="text-6xl"/>),
      name : 'Power Supply'
    },
    { key : '5',
      category : 'storage',
      icon : (<BsDeviceHdd className="text-6xl"/>),
      name : 'Storage'
    },
    { key : '6',
      category : 'monitor',
      icon : (<CiMonitor className="text-6xl"/>),
      name : 'Monitor'
    },
  ]
  const router = useRouter()

  return (
    <section className="flex justify-center mt-8">
      <Card
        bordered={true}
        className="shadow-lg px-5 text-center lg:w-3/4"
      >
        <h1 className="text-center my-5 uppercase">Build Your Dream Pc With Your Favourite Components</h1>
        <hr className="mb-5"/>
        {
          catagories.map(category => <div key={category.key} className="flex justify-between items-center mb-10">
          <div className="flex gap-5 items-center">
            {category.icon}
            <p>{category.name}</p>
          </div>
          <div>
            <button onClick={() => router.push(`/pc-builder/category/${category.category}`)} className="btn p-1">Choose</button>
          </div>
        </div>)
        }
        
      </Card>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
    return <RootLayout>{page}</RootLayout>;
  };
