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
import { deleteFromBuilder } from '@/redux/features/builder/builderSlice';

const BuilderPage = () => {
  const dispatch = useDispatch();
  const components = useSelector((state) => state.builder.components);
  console.log('final', components);

  const categories = [
    { name: 'Processor', icon: <BsMotherboard />, link: '/processor' },
    { name: 'Motherboard', icon: <FaMicrochip />, link: '/motherboard' },
    { name: 'RAM', icon: <FaMemory />, link: '/ram' },
    { name: 'Power Supply', icon: <FaPowerOff />, link: '/power-supply' },
    { name: 'Storage Device', icon: <FaHdd />, link: '/hdd' },
    { name: 'Monitor', icon: <FaTv />, link: '/monitor' },
    { name: 'Others', icon: <FaRegQuestionCircle />, link: '/others' },
  ];

  const handleDelete = (category) => {
    dispatch(deleteFromBuilder({ category }));
  };

  return (
    <div className="container mx-auto mt-36">
      {categories.map((category) => {
        const component = components.find((c) => c.category === category.name);

        return (
          <div
            key={category.name}
            className="grid grid-flow-col grid-cols-12 border py-5"
          >
            <div className="col-span-2 flex items-center justify-center text-6xl">
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
        <button>Submit</button>
      </div>
    </div>
  );
};

export default BuilderPage;
