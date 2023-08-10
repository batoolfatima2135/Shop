import { productsArray } from '@/Redux/Slices/productSlice';
import Link from 'next/link'
import React from 'react'

interface SidebarProps {
  products: productsArray[];
  categories: string[];
}

export default function Sidebar({products, categories}: SidebarProps) {
  console.log(products);
  return (
     <div className="col-span-2 m-9">
      <div>
<h1 className='text-peach font-bold text-2xl'>BY CATEGORY</h1>
      <ul className=''>
        {categories.map((category) => (
          <li key={category} className='my-5 text-lg border-b-2'><Link href='/'>{category}</Link></li>
        ))}
        
      </ul>
      </div>
      <div className='my-11'>
<h1  className='text-peach font-bold text-2xl'>BY PRICE</h1>
      <ul>
        <li><Link href='/'></Link></li>
      </ul>
      </div>
      
    </div>
  )
}
