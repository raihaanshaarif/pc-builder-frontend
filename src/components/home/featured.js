import Image from "next/image";
import React from "react";

const Featured = ({ featuredProducts }) => {
  const receivedProducts = featuredProducts.data;

  return (
    <>
      <div className="container mx-auto ">
        {/* Header Start */}
        <div className="mb-8 mx-auto flex justify-center w-2/3">
          <p className="text-4xl border-b-2 border-blue-600 text-blue-600 text-center py-6 font-bold ">Featured Products</p>
        </div>
       <div className="grid gap-4 grid-cols-2 mx-4 md:grid-cols-4 ">
        {receivedProducts.map((product) => (
            <div key={product._id} className="">
       
              <div className="mx-auto md:mx-0 relative md:min-h-[320px] lg:min-h-96  max-w-64  rounded overflow-hidden shadow-lg shadow-black-600 border px-2 py-2 hover:shadow-xl ">
                  <div className="overflow-hidden">
                  <Image
                    className="transition duration-300 overflow-hidden hover:scale-125"
                    src={product.image}
                    alt={product.name}
                    width={500} // You need to specify width and height
                    height={300}
                    layout="responsive" // This makes the image scale with the width of its container
                  />
                  </div>
                    {/* <p className="absolute top-0 right-0 bg-orange-300 rounded px-5 py-1 ">processor</p> */}
                    <div>
                    <p className="text-xl text-center">{product.category}</p>
                    <p className="text-sm text-center">{product.name}</p>
                    <p className="text-center text-2xl text-blue-600 font-medium ">${product.price}</p>
                    </div>
                  <div className="flex justify-between align-bottom bg-gray-400 px-2 mt-3">
                    <p className="text-sm text-center">{product.stocks}</p>
                    <p className="text-sm text-center">Rating: {product.averageRating}</p>
                  </div>
              </div>
          
        </div>
           ))}
      </div>

      </div>


    </>
  );
};

export default Featured;
