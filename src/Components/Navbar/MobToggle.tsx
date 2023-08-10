'use client'
import React from 'react'
import { motion } from "framer-motion";
import { useState } from 'react';
import ShoppingCartIcon from '../../Assets/Icons/shopping-basket.png';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'next/link';

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
export default function MobToggle() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
  const classNames = `absolute mt-14  w-4/5 shadow-lg justify-between ${isOpen ? '' : 'opacity-0'}`;
  const handleClick = () => {
    setIsOpen(isOpen => !isOpen);
  }
  return (
    <>
       <div className=' flex pb justify-end items-center px-3 sm:col-span-1 col-span-3 '>
         <motion.button
          whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
           className='px-5'

      ><Image src={ShoppingCartIcon} alt='cart' className=' w-6 h-6 sm:hidden'></Image>
      </motion.button>
          <button onClick={handleClick} className='sm:hidden '><MenuIcon /></button>
        </div>
    
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={classNames}
      >
      <motion.button
          whileHover={{
          scale: 1.1,
          transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
           className='p-1 m-2 float-right shadow-lg'

      ><CloseIcon />
      </motion.button>
        <button ></button>
        <ul className='sm:hidden mb-5' >
          <li className='px-4 p-3  border-b border-gray-300 '><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Home</Link></li>
            <li className='px-4  p-3 border-b  border-gray-300 '><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Shop All</Link> </li>
            <li className='px-4 p-3 border-b  border-gray-300 '><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Categories</Link></li>
            <li className='px-4 p-3'><Link href='/' className='  transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Contact</Link></li>
        </ul>
      </motion.nav>
       </>
  )
   
 
}
