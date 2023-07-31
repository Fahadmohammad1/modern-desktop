import React from "react";
import RootLayout from "@/components/Layout/RootLayout";
import Image from "next/image";

const ProductDetailPage = ({ product }) => {
  console.log(product);
  return (
    <section className="gap-y-20 ">
      <div className="h-screen flex flex-col justify-center items-center"><div className="lg:grid grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <Image
            src="https://www.expertreviews.co.uk/sites/expertreviews/files/styles/er_main_wide/public/2022/06/best_gaming_monitor_-_lead.jpg?itok=H1VS07mB"
            width={500}
            height={350}
            alt="component"
          ></Image>
        </div>
        <div className="lg:col-span-7 flex flex-col  pl-10">
          <p className="text-3xl font-bold text-navy-700">{product?.name}</p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Category : {product?.category}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Price : {product?.price}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Status : {product?.status}
          </p>
          <p className="mt-1 text-lg font-medium text-gray-600 md:mt-2">
            Rating : {product?.rating}
          </p>
        </div>
      </div></div>

      <div className="w-3/4 mx-auto">
        <div className="lg:grid grid-cols-12 gap-10">
          <div className="lg:col-span-5 justify-start">
            <h1 className="text-2xl">Key Features</h1>
            <table className="w-full border-collapse border border-gray-300">
              <tbody>
                {Object.entries(product.keyFeatures).map(([key, value]) => (
                  <tr key={key} className="border-b border-gray-300 text-lg">
                    <td className="border-2 bor border-black p-2 font-semibold">{key}</td>
                    <td className="border border-gray-300 p-2">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-7">
            <h1 className="text-2xl">Description</h1>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus obcaecati aut accusantium delectus ea nulla voluptatem corrupti iste vero quia! Voluptatibus dolorum doloremque id, esse cum atque nesciunt? Impedit eius nihil facere iste atque ullam molestias reprehenderit saepe, tenetur culpa, ipsa aliquam. Nisi, sed error laboriosam nulla enim est optio eligendi blanditiis consectetur alias, quia, odio quisquam nihil. Fugiat repellat voluptatem autem, adipisci similique itaque veritatis amet consequatur eligendi minima modi obcaecati totam labore est officia, magni cumque ipsam quibusdam dignissimos eius ea. Atque repudiandae quia inventore ab, tempore, veniam odio vero consequuntur iste delectus, quisquam cumque magnam eum? Exercitationem?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;

ProductDetailPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticPaths = async () => {
  const res = await fetch(`${process.env.URL}/products`);
  const data = await res.json();

  const paths = data.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  // if(typeof window === 'undefined') {
  //   return {
  //     props : {
  //       product : {}
  //     }
  //   }
  // }
  const { params } = context;
  const res = await fetch(`${process.env.URL}/products/${params.productId}`);
  const data = await res.json();

  return {
    props: {
      product: data.data,
    },
  };
};
