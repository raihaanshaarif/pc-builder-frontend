import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/home/Banner";
import store from "@/redux/store";
import { useGetProductsQuery } from "@/redux/api/apiSlice";
import Featured from "@/components/home/featured";
import FeaturedCategory from "@/components/home/FeaturedCategory";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ featuredProducts }) {
  return (
    <>
      <Banner />
      <Featured featuredProducts={featuredProducts} />
      <FeaturedCategory/>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    "http://localhost:5000/api/v1/products/?featured=true"
  );
  const featuredProducts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      featuredProducts,
    },
  };
};
