'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';

const Header = () => {
  return (
    <div className='z-[999] relative'>
      <motion.div
        className='flex justify-center fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75'
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      >
        <motion.div className='flex justify-center absolute h-full w-full mx-auto top-0  py-2 sm:py-0'>
          <motion.ul className='flex w-[26rem] flex-wrap items-center justify-around gap-y-1 text-[0.9rem] font-medium text-gray-500'>
            {links.map((lk) => (
              <motion.li
                key={lk.hash}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link href={lk.hash}>{lk.name}</Link>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
