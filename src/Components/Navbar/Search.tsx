'use client'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '../../Assets/Icons/shopping-basket.png';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Search() {
  return (
    <div className='sm:col-span-2  sm:flex justify-center my-auto hidden'>
      <input type='text' placeholder='Search products..' className='shadow appearance-none border  border-slate-300 rounded w-3/4 my-4  py-2 px-3 text-gray-700 mb-3  leading-tight focus:shadow-lg focus:outline-none' />
      <button className='px-2'><SearchIcon /></button>
       <motion.button
          whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
           className='px-5'

      ><Image src={ShoppingCartIcon} alt='cart' className=' w-6 h-6'></Image>
      </motion.button>
    </div>
  )
}
