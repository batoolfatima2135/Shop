import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '../../Assets/Icons/shopping-basket.png';
import Image from 'next/image';

export default function Search() {
  return (
    <div className='sm:col-span-2  sm:flex justify-center my-auto hidden'>
      <input type='text' placeholder='Search products..' className='shadow appearance-none border  border-slate-300 rounded w-3/4 my-4  py-2 px-3 text-gray-700 mb-3  leading-tight focus:shadow-lg focus:outline-none' />
      <button className='px-2'><SearchIcon /></button>
        <button className='px-5'><Image src={ShoppingCartIcon} alt='cart' className='h-5 w-5 hidden sm:block'></Image></button>
    </div>
  )
}
