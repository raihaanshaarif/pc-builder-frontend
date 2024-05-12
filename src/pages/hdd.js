import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const StorageDevicePage = ({ storageDevices }) => {

  return (
    <>
      
    <div className="container mx-auto mt-24">
      <div className="mx-auto mb-8 flex w-2/3 justify-center">
        <p className="mb-10 border-b-2 border-blue-600 py-6 text-center text-4xl font-bold text-blue-600">
          Power Supply
        </p>
      </div>
      <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4">
      {storageDevices && storageDevices.length > 0 ? storageDevices.map((product) => (
            <div key={product._id}>
              <Link href={`/product/${product._id}`}>
                <div className="shadow-black-600 relative mx-auto max-w-64 overflow-hidden rounded border px-2 py-2 shadow-lg hover:shadow-xl md:mx-0 md:min-h-[320px] lg:min-h-96">
                  <div className="overflow-hidden">
                    <Image
                      className="overflow-hidden transition duration-300 hover:scale-125"
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={300}
                      layout="responsive"
                    />
                  </div>
                  <div>
                    <p className="text-center text-xl">{product.category}</p>
                    <p className="text-center text-sm">{product.name}</p>
                    <p className="text-center text-2xl font-medium text-blue-600">
                      ${product.price}
                    </p>
                  </div>
                  <div className="mt-3 flex justify-between bg-gray-400 px-2 align-bottom">
                    <p className="text-center text-sm">{product.stocks}</p>
                    <p className="text-center text-sm">
                      Rating: {product.averageRating}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        : <p>No products found.</p>}
      </div>
    </div>
  </>
  );
};

export default StorageDevicePage;

export async function getStaticProps() {
  try {
      const res = await fetch('http://localhost:5000/api/v1/products/?category=storage%20device');
      const data = await res.json();
      
      if (!res.ok) {
          throw new Error(`Failed to fetch products, status: ${res.status}`);
      }
      // console.log(data.data);
      return {
          props: { storageDevices: data.data }, // ensure you pass the correct part of the response
      };
  } catch (error) {
      console.error("Error fetching product data:", error);
      return {
          props: { storageDevices: [] }, // return empty array or appropriate fallback
      };
  }
}


