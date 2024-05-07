import React from 'react';
import {  FaHdd, FaPowerOff, FaMemory, FaTv, FaMicrochip, FaRegQuestionCircle } from 'react-icons/fa';
import { BsMotherboard } from "react-icons/bs";
import Link from 'next/link';

const FeaturedCategory = () => {
    const categories = [
        { name: 'CPU / Processor', icon: <BsMotherboard  />, link: '/processor' },
        { name: 'Motherboard', icon: <FaMicrochip />, link: '/motherboard' },
        { name: 'RAM', icon: <FaMemory />, link: '/ram' },
        { name: 'Power Supply Unit', icon: <FaPowerOff />, link: '/power-supply' },
        { name: 'Storage Device', icon: <FaHdd />, link: '/hdd' },
        { name: 'Monitor', icon: <FaTv />, link: '/monitor' },
        { name: 'Others', icon: <FaRegQuestionCircle />, link: '/others' }
    ];

    return (
        <div className="container mx-auto">
            <div className="mb-8 mx-auto flex justify-center w-2/3">
                <p className="text-4xl border-b-2 border-blue-600 text-blue-600 text-center py-6 font-bold mt-16">Featured Categories</p>
            </div>
            <div className='grid grid-flow-col  gap-4'>
                {categories.map((cat) => (
                    <div key={cat.name} className="place-content-center space-x-2 border px-4 py-4 md:min-w-36 rounded hover:shadow-lg">
                        <Link href={cat.link}>
                            <div className='flex justify-center text-6xl'>{cat.icon}</div>
                            <p className="text-xl text-center">{cat.name}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedCategory;
