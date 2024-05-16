import { addToBuilder } from '@/redux/features/builder/builderSlice';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

const Selector = ({ products, error }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  if (error) {
    return <p className="mt-40 text-center text-red-600">{error}</p>;
  }

  const handleAddToBuilder = (productId) => {
    return () => {
      const matchedProduct = products.data.find((p) => p._id === productId);
      if (matchedProduct) {
        dispatch(addToBuilder(matchedProduct));
        setTimeout(() => {
          router.push('/builder');
        }, 1000);
      } else {
        console.error('Failed to find the product.');
      }
    };
  };

  return (
    <div className="mt-40">
      <div className="container mx-auto">
        <div className="mx-auto mb-8 flex w-2/3 justify-center">
          <p className="border-b-2 border-blue-600 py-6 text-center text-4xl font-bold text-blue-600">
            Please Select your Product
          </p>
        </div>
        <div className="mx-4 grid grid-cols-2 gap-4 md:grid-cols-4">
          {products.data.map((product) => (
            <div key={product._id} className="">
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
                <button
                  className="w-full bg-blue-600 text-center text-white"
                  onClick={handleAddToBuilder(product._id)}
                >
                  ADD TO BUILDER
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const { query } = context;
    const category = query?.category;

    const res = await fetch(`http://localhost:5000/api/v1/products/?category=${category}`);

    if (!res.ok) {
      throw new Error(`Failed to fetch products, status: ${res.status}`);
    }

    const products = await res.json();

    return {
      props: {
        products,
      },
    };
  } catch (error) {
    console.error('Error fetching products:', error);

    return {
      props: {
        products: { data: [] },
        error: 'Failed to fetch products. Please try again later.',
      },
    };
  }
};

export default Selector;
