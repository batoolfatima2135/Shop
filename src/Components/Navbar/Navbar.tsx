import React from 'react'
import Logo from './Logo';
import Menu from './Menu';
import MobToggle from './MobToggle';
import Serach from './Search';
import Search from './Search';


export default function Navbar() {
 


  return (
    <div className='container mx-auto'>
      <nav className='grid  grid-cols-7 p-3 shadow-lg'>
         <Logo />
         <Menu />
         <Search />
         <MobToggle />
        </nav>
    </div >

  )
}
