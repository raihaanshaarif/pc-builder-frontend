import Image from 'next/image';

const productDetail = () => {
  const {
    name,
    category,
    image,
    stocks,
    price,
    description,
    keyFeatures,
    individualRating,
    averageRating,
    id,
  } = product.data;
  console.log(product.data);

  // Splitting the keyFeatures string into an array and mapping it to list items
  const newKeyFeatures = keyFeatures
    .split(',')
    .map((feature, index) => <li key={index}>{feature.trim()}</li>);

  return (
    <div className="container mx-auto mt-32">
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-2">
        <div className="w-[80%]">
          <Image
            priority={false}
            className="overflow-hidden transition duration-300 hover:scale-125"
            src={image}
            alt={name}
            width={300} // You need to specify width and height
            height={300}
            layout="responsive" // This makes the image scale with the width of its container
          />
        </div>

        <div>
          <div className="text-2xl font-bold ">{name}</div>
          <p className="text-sm">Product id : {id}</p>
          <p className="mt-4 w-36 rounded bg-blue-500 px-2  text-lg text-white">
            Price: {price}
          </p>
          <p className="mt-4">
            <span className="font-medium">Category: </span>
            {category}
          </p>
          <p className="mt-4 text-xl font-bold">Key Features</p>
          <ul className="mt-4 list-disc pl-5">{newKeyFeatures}</ul>
          <p className="mt-4">
            <span className="font-medium">Status: </span>
            {stocks}
          </p>
          <div>
            <p className="mt-4">
              <span className="font-medium">Individual Rating:</span>{' '}
              {individualRating}/5{' '}
            </p>
            <p className="mt-2">
              <span className="font-medium">Average Rating:</span>{' '}
              {averageRating}/5{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetail;

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:5000/api/v1/products/?limit=100');

  const featuredProducts = await res.json();

  // Ensure there is an array to map over
  const paths = featuredProducts.data.map((product) => ({
    params: { productId: product._id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/products/${params.productId}`,
  );
  const product = await res.json(); // Correctly calling .json() on the fetch response

  return {
    props: {
      product: product,
    },
  };
};
