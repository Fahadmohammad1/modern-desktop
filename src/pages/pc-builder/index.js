import { Card } from "antd";
import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import { BsCpu, BsDeviceHdd, BsMotherboard } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { MdOutlinePower } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { useRouter } from "next/router";
import Image from "next/image";

const PcBuilderPage = ({ products }) => {
  console.log(products);
  const categories = [
    {
      key: "1",
      category: "CPU",
      icon: <BsCpu className="text-6xl" />,
      name: "CPU / Processor",
    },
    {
      key: "2",
      category: "MOTHERBOARD",
      icon: <BsMotherboard className="text-6xl" />,
      name: "Motherboard",
    },
    {
      key: "3",
      category: "RAM",
      icon: <CgSmartphoneRam className="text-6xl" />,
      name: "RAM",
    },
    {
      key: "4",
      category: "POWER SUPPLY",
      icon: <MdOutlinePower className="text-6xl" />,
      name: "Power Supply",
    },
    {
      key: "5",
      category: "STORAGE",
      icon: <BsDeviceHdd className="text-6xl" />,
      name: "Storage",
    },
    {
      key: "6",
      category: "MONITOR",
      icon: <CiMonitor className="text-6xl" />,
      name: "Monitor",
    },
  ];

  const router = useRouter();

  return (
    <section className="flex justify-center mt-8">
      <Card bordered={true} className="shadow-lg px-5 text-center lg:w-3/4">
        <h1 className="text-center my-5 uppercase">
          Build Your Dream Pc With Your Favourite Components
        </h1>
        <hr className="mb-5" />
        {categories.map((category) => (
          <div key={category.key}>
            <Card bordered={false} key={category.key}>
              <div className="flex justify-between items-center mb-10">
                <div className="flex gap-5 items-center">
                  {category.icon}
                  <p>{category.name}</p>
                </div>
                <div>
                  <button
                    onClick={() =>
                      router.push(`/pc-builder/category/${category.category}`)
                    }
                    className="btn p-1"
                  >
                    Choose
                  </button>
                </div>
              </div>
              {products?.map(
                (product) =>
                  product.category.toUpperCase() === category.category && (
                    <div
                      key={product._id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <Image
                          src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB"
                          width={60}
                          height={60}
                          alt="product"
                        />
                      </div>
                      <div>
                        <h1>{product.name}</h1>
                      </div>
                    </div>
                  )
              )}
            </Card>
          </div>
        ))}
      </Card>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getServerSideProps = async (context) => {
  const { params } = context;
  const email = "tanvir@gmail.com";
  const res = await fetch(`http://localhost:5000/builder-products/${email}`);
  const data = await res.json();

  return {
    props: {
      products: data?.data?.products || [],
    },
  };
};
