import { Card } from "antd";
import React, { useEffect, useState } from "react";
import RootLayout from "@/components/Layout/RootLayout";
import { BsCpu, BsDeviceHdd, BsMotherboard } from "react-icons/bs";
import { CiMonitor } from "react-icons/ci";
import { MdOutlinePower } from "react-icons/md";
import { CgSmartphoneRam } from "react-icons/cg";
import { useRouter } from "next/router";
import Image from "next/image";
import Swal from "sweetalert2";

const PcBuilderPage = () => {
  const [userProducts, setUserProducts] = useState([])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = JSON.parse(localStorage.getItem('products')) || []
      setUserProducts(data)
    }
  }, [])

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

  const handleCancelProduct = (category) => {
    const data = JSON.parse(localStorage.getItem('products')) || []

    const filteredData = data.filter(p => p.category.toUpperCase() !== category.toUpperCase())
    localStorage.setItem('products', JSON.stringify(filteredData))

    setUserProducts(filteredData)
  }

  const router = useRouter();

  return (
    <section className="flex justify-center pt-8">
      <Card bordered={true} className="shadow-lg lg:px-5 text-center lg:w-3/4">
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
                  <p className="font-bold">{category.name}</p>
                </div>
                <div>
                  {userProducts.some((product) => product.category.toUpperCase() === category.category.toUpperCase()) ? (
                    <button
                      onClick={() => handleCancelProduct(category.category)}
                      className="rounded-full border-0 px-3 py-2 bg-red-400 hover:bg-red-500 font-bold"
                    >
                      Cancel
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        router.push(`/pc-builder/category/${category.category}`)
                      }
                      className="rounded-full border-0 px-3 py-2 bg-blue-300 hover:bg-blue-500 font-bold"
                    >
                      Choose
                    </button>
                  )}
                </div>

              </div>
              {userProducts?.map(
                (product) =>
                  product.category.toUpperCase() === category.category && (
                    <div
                      key={product._id}
                      className="flex justify-between items-center"
                    >
                      <div>
                        <Image
                          src={product.image}
                          width={80}
                          height={70}
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
        {userProducts.length >= 5 && <button onClick={() => Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Build Successfull',
          showConfirmButton: false,
          timer: 1500
        })} className="rounded-full border-0 px-3 py-2 bg-blue-300 hover:bg-blue-500 font-bold my-3">Complete Build</button>}
      </Card>
    </section>
  );
};

export default PcBuilderPage;

PcBuilderPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};