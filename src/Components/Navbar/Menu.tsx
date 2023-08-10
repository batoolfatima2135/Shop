import Link from 'next/link'
import React from 'react'

export default function Menu() {

  return (
   <div className={`sm:col-span-4  mx-2`}>

          <ul className='justify-end mx-6 hidden sm:flex text-lg'>
            <li className='px-4 pt-6'><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-peach  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Home</Link></li>
            <li className='px-4 pt-6'><Link href='/shop' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-peach  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Shop All</Link> </li>
            <li className='px-4 pt-6'><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-peach  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Categories</Link></li>
            <li className='px-4 pt-6'><Link href='/' className='transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-peach  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800'>Contact</Link></li>
          </ul>
  </div>
  )
}
