import Image from 'next/image';
import { Inter } from 'next/font/google';
import Banner from '@/components/home/Banner';
import store from '@/redux/store';
import { useGetProductsQuery } from '@/redux/api/apiSlice';
import Featured from '@/components/home/featured';
import FeaturedCategory from '@/components/home/FeaturedCategory';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ featuredProducts }) {
  // console.log(featuredProducts);
  return (
    <>
      <Banner />
      <Featured featuredProducts={featuredProducts} />
      <FeaturedCategory />
    </>
  );
}
// This function gets called at build time


export const getStaticProps = async() =>{
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  try {
    const res = await fetch(`${baseURL}/api/v1/products?featured=true`);
    console.log('this is rres', res);
    if (!res.ok) {
      throw new Error(`Failed to fetch products, status: ${res.status}`);
    }
 
    const data = await res.json();  // Assuming data is structured as shown
    // console.log(data.data);

    // Ensure that the structure of 'data.data' is what you expect
    return {
      props: {
        featuredProducts: data.data || []  // Pass 'data.data' which contains the products array
      },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching product data:", error);
    return {
      props: {
        featuredProducts: []  // Fallback to an empty array if there's an error
      }
    };
  }
}

