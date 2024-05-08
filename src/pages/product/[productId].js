import Image from 'next/image';

const productDetail = ({ product }) => {
  if (!product || !product.data) {
    return <p>No product data available.</p>;
  }

  const {
    name = '',
    category = '',
    image = '',
    stocks = '',
    price = '',
    description = '',
    keyFeatures = '',
    individualRating = 0,
    averageRating = 0,
    id = '',
  } = product.data;

  // Handle keyFeatures safely
  const newKeyFeatures = keyFeatures ? keyFeatures.split(',').map((feature, index) => <li key={index}>{feature.trim()}</li>) : <li>No features listed.</li>;

  return (
    <div className="container mx-auto mt-32">
      <div className="grid grid-flow-col grid-cols-1 md:grid-cols-2">
        <div className="w-[80%]">
          <Image
            priority={false}
            className="overflow-hidden transition duration-300 hover:scale-125"
            src={image || '/default-image.png'} // Provide a default image if none is available
            alt={name || 'Product image'}
            width={300}
            height={300}
            layout="responsive"
          />
        </div>
        <div>
          <div className="text-2xl font-bold">{name}</div>
          <p className="text-sm">Product id: {id}</p>
          <p className="mt-4 w-36 rounded bg-blue-500 px-2 text-lg text-white">
            Price: {price}
          </p>
          <p className="mt-4">
            <span className="font-medium">Category:</span> {category}
          </p>
          <p className="mt-4 text-xl font-bold">Key Features</p>
          <ul className="mt-4 list-disc pl-5">{newKeyFeatures}</ul>
          <p className="mt-4">
            <span className="font-medium">Status:</span> {stocks}
          </p>
          <div>
            <p className="mt-4">
              <span className="font-medium">Individual Rating:</span> {individualRating}/5
            </p>
            <p className="mt-2">
              <span className="font-medium">Average Rating:</span> {averageRating}/5
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default productDetail;

export const getStaticPaths = async () => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/products/?limit=40`);
    if (!res.ok) {
      throw new Error('Failed to fetch product paths.');
    }
    const featuredProducts = await res.json();
    const paths = featuredProducts.data.map((product) => ({
      params: { productId: product._id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.error('getStaticPaths error:', error);
    return { paths: [], fallback: false };
  }
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`${process.env.API_URL}/api/v1/products/${params.productId}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch product ${params.productId}`);
    }
    const product = await res.json();

    return { props: { product } };
  } catch (error) {
    console.error('getStaticProps error:', error);
    return { props: { product: null } };
  }
};
