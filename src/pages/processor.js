import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ProcessorPage = ({ processors }) => {
  const receivedData = processors.data;
  return (
    <>
      <div className="container mx-auto mt-24">
        {/* Header Start */}
        <div className="mx-auto mb-8 flex w-2/3 justify-center">
          <p className="mb-10 border-b-2 border-blue-600 py-6 text-center text-4xl font-bold text-blue-600">
            Processor
          </p>
        </div>
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4 ">
          {receivedData.map((product) => (
            <div key={product._id} className="">
              <Link href={`/product/${product._id}`}>
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
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProcessorPage;

export const getStaticProps = async () => {
  const res = await fetch(
    'http://localhost:5000/api/v1/products/?category=processor',
  );
  const processors = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      processors,
    },
  };
};
