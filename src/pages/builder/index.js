import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { BsMotherboard } from 'react-icons/bs';
import {
  FaMicrochip,
  FaMemory,
  FaPowerOff,
  FaHdd,
  FaTv,
  FaRegQuestionCircle,
} from 'react-icons/fa';
import Link from 'next/link';
import { clearBuilder, deleteFromBuilder } from '@/redux/features/builder/builderSlice';
import toast from 'react-hot-toast';
import { getSession } from 'next-auth/react';


export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
    // If no user session exists, redirect to the sign-in page
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    };
  }

  // If there is a session, return the page props
  return {
    props: { session },
  };
}






const BuilderPage = ({ session }) => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.builder.components);
  // console.log('final', components);

  const handleSubmit = () => {
    // You might want to implement additional logic here for the build submission
    toast.success('Build submitted successfully!');
    console.log('Submitted', components);
    dispatch(clearBuilder());
  };


  const categories = [
    { name: 'Processor', icon: <BsMotherboard />, link: '/processor' },
    { name: 'Motherboard', icon: <FaMicrochip />, link: '/motherboard' },
    { name: 'Ram', icon: <FaMemory />, link: '/ram' },
    { name: 'Power Supply', icon: <FaPowerOff />, link: '/power-supply' },
    { name: 'Storage Device', icon: <FaHdd />, link: '/hdd' },
    { name: 'Monitor', icon: <FaTv />, link: '/monitor' },
    { name: 'Others', icon: <FaRegQuestionCircle />, link: '/others' },
  ];

  const handleDelete = (category) => {
    dispatch(deleteFromBuilder({ category }));
  };

  const isEnabled = components.length > 5;



  return (
    <div className="container mx-auto mt-36">
      {categories.map((category) => {
        const component = components.find((c) => c.category === category.name);

        return (
          <div
            key={category.name}
            className="grid grid-flow-col grid-cols-12 border py-2"
          >
            <div className="col-span-2 flex flex-col items-center justify-center text-6xl">
              {category.icon}
              <p className="text-center text-xl">{category.name}</p>
            </div>
            <div className="col-span-8 flex items-center justify-start">
              {component ? (
                <div className="flex flex-col">
                  <p>{component.name}</p>
                  <button
                    onClick={() => handleDelete(category.name)}
                    className="rounded bg-red-500 px-3 py-1 text-white"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <p className="text-center">No component selected</p>
              )}
            </div>
            <div className="col-span-2 flex items-center justify-center">
              {!component && (
                <Link
                  href={`/selector/?category=${encodeURIComponent(category.name.toLowerCase())}`}
                >
                  <p className="rounded bg-blue-600 px-8 py-2 text-white hover:bg-blue-400">
                    Select
                  </p>
                </Link>
              )}
            </div>
          </div>
        );
      })}

      <div>
      <button 
        className={`px-8 py-2 rounded w-full text-white ${isEnabled ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
        disabled={!isEnabled} // The button is disabled if the condition is not met
        onClick={handleSubmit}
      >
        Complete Build
      </button>
      </div>
    </div>
  );
};

export default BuilderPage;
