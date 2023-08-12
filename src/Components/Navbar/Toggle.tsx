"use client";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import ShoppingCartIcon from "../../Assets/Icons/shopping-basket.png";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import Link from "next/link";
import Dropdown from "./Dropdown";
import Search from "./Search";
import Badge from "./Badge";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function MobToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const classNames = `absolute bg-white mt-14 w-3/4 shadow-lg justify-between ${
    isOpen ? "" : "opacity-0"
  }`;
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <div className=" flex justify-end items-center   px-3 col-span-6 md:col-span-1 lg:col-span-3 ">
        <Search />
        <div className="flex">
          <motion.button
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.25 },
            }}
            whileTap={{ scale: 0.9 }}
            className="px-5"
          >
            <Link href="/shop/cart">
              <Image
                src={ShoppingCartIcon}
                alt="cart"
                className=" w-10 h-8 sm:block md:block lg:block"
              />
            </Link>
          </motion.button>

          <Badge />
        </div>

        <button onClick={handleClick} className="sm:hidden ">
          <MenuIcon />
        </button>
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
          className="p-1 m-2 float-right shadow-lg"
        >
          <CloseIcon />
        </motion.button>
        <ul className="sm:hidden mb-5">
          <li className="px-4 p-3  border-b-b border-b-gray-300 ">
            <Link
              href="/"
              onClick={handleClick}
              className="transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800"
            >
              Home
            </Link>
          </li>
          <li className="px-4  p-3 border-b-b  border-b-gray-300 ">
            <Link
              href="/shop"
              onClick={handleClick}
              className="transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800"
            >
              Shop All
            </Link>{" "}
          </li>
          <li className="px-4  p-3 border-b-b  border-b-gray-300 ">
            <Dropdown screen="mob" handleClickprop={handleClick} />
          </li>
          <li className="px-4 p-3">
            <Link
              href="/"
              onClick={handleClick}
              className="  transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
    </>
  );
}
