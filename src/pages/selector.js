import { addToBuilder } from '@/redux/features/builder/builderSlice';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

const Selector = ({ products }) => {
  const dispatch = useDispatch();

  const receivedProducts = products.data;

  const handleAddToBuilder = (productId) => {
    return () => {
      const matchedProduct = receivedProducts.find((p) => p._id === productId);
      console.log(matchedProduct);
      if (matchedProduct) {
        dispatch(addToBuilder(matchedProduct));
        // toast.success('Successfully Added to Builder!');
      } else {
        // toast.error('Failed to find the product.');
      }
    };
  };

  return (
    <div className="mt-40">
      <div className="container mx-auto ">
        {/* Header Start */}
        <div className="mx-auto mb-8 flex w-2/3 justify-center">
          <p className="border-b-2 border-blue-600 py-6 text-center text-4xl font-bold text-blue-600 ">
            Please Select your Product
          </p>
        </div>
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 ">
          {receivedProducts.map((product) => (
            <div key={product._id} className="">
              <div>
                <div className="shadow-black-600 relative mx-auto max-w-64 overflow-hidden  rounded  border px-2 py-2 shadow-lg hover:shadow-xl md:mx-0 md:min-h-[320px] lg:min-h-96 ">
                  <div className="overflow-hidden">
                    <Image
                      className="overflow-hidden transition duration-300 hover:scale-125"
                      src={product.image}
                      alt={product.name}
                      width={500} // You need to specify width and height
                      height={300}
                      layout="responsive" // This makes the image scale with the width of its container
                    />
                  </div>
                  {/* <p className="absolute top-0 right-0 bg-orange-300 rounded px-5 py-1 ">processor</p> */}
                  <div>
                    <p className="text-center text-xl">{product.category}</p>
                    <p className="text-center text-sm">{product.name}</p>
                    <p className="text-center text-2xl font-medium text-blue-600 ">
                      ${product.price}
                    </p>
                  </div>
                  <div className="mt-3 flex justify-between bg-gray-400 px-2 align-bottom">
                    <p className="text-center text-sm">{product.stocks}</p>
                    <p className="text-center text-sm">
                      Rating: {product.averageRating}
                    </p>
                  </div>

                  <button
                    className="w-full bg-blue-600 text-center text-white"
                    onClick={handleAddToBuilder(product._id)}
                  >
                    ADD TO BUILDER
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Selector;

export async function getServerSideProps(context) {
  // Access query parameters from the context
  const { query } = context;
  const { category } = query;
  //   console.log(query.category);

  // Example: Fetching data based on the category parameter
  const res = await fetch(
    `http://localhost:5000/api/v1/products/?category=${category}`,
  );
  const products = await res.json();

  // Return the products as props
  return {
    props: {
      products, // Pass the products fetched based on the category to the page component
    },
  };
}
