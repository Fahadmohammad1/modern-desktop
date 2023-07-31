import Head from "next/head";
import RootLayout from "@/components/Layout/RootLayout";
import Products from "@/components/UI/Products";
import FeaturedCategory from "@/components/UI/FeaturedCategory";
import Banner from "@/components/Banner";

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div >
          <Banner />
          <div className="px-10">
            <Products products={products} />
            <FeaturedCategory products={products} />
          </div>
        </div>
      </main>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const getStaticProps = async () => {
  // if (typeof window === "undefined") {
  //   return {
  //     props: {
  //       products: [],
  //     },
  //   };
  // }

  const res = await fetch(`${process.env.URL}/products`);
  const data = await res.json();

  return {
    props: {
      products: data.data
        .slice()
        .sort(() => Math.random() - 0.5)
        .slice(0, 6),
    },
  };
};
