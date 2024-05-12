import Image from 'next/image';
import { Inter } from 'next/font/google';
import Banner from '@/components/home/Banner';
import store from '@/redux/store';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import Featured from '@/components/home/featured';
import FeaturedCategory from '@/components/home/FeaturedCategory';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ featuredProducts }) {
  return (
    <>
      <Banner />
      <Featured featuredProducts={featuredProducts} />
      <FeaturedCategory />
    </>
  );
}
// This function gets called at build time

export const getStaticProps = async () => {

  try {
    const res = await fetch('http://localhost:5000/api/v1/products/?featured=true');
    const data = await res.json();
    
    if (!res.ok) {
        throw new Error(`Failed to fetch products, status: ${res.status}`);
    }
    // console.log(data.data);
    return {
        props: { featuredProducts: data }, // ensure you pass the correct part of the response
    };
} catch (error) {
    console.error("Error fetching product data:", error);
    return {
        props: { featuredProducts: [] }, // return empty array or appropriate fallback
    };
}

};
