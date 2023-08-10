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
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import { decrement, increment } from "@/Redux/Slices/productSlice";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const variantsCart = {
  open: { opacity: 1, x: "100%" },
  closed: { opacity: 0, x: "200%" },
};
export default function MobToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cartisOpen, setCartIsOpen] = useState<boolean>(false);
  const products = useSelector((state: RootState) => state.products.products);
  const filteredProducts = products.filter((product) =>
    product.hasOwnProperty("quantity")
  );
  const dispatch = useDispatch();
  console.log(filteredProducts);
  const classNames = `absolute bg-white mt-14 w-2/4 shadow-lg justify-between ${
    isOpen ? "" : "opacity-0"
  }`;
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  const handleCartClick = () => {
    setCartIsOpen((cartisOpen) => !cartisOpen);
  };

  return (
    <>
      <div className=" flex pb justify-end items-center   px-3 col-span-4 md:col-span-1 lg:col-span-3 ">
        <Search />
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
          className="px-5"
        >
          <Image
            src={ShoppingCartIcon}
            alt="cart"
            onClick={handleCartClick}
            className=" w-6 h-6 sm:block md:block lg:block"
          ></Image>
        </motion.button>
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
              className="  transform transition duration-500 relative text-xl w-fit block after:block after:absolute after:h-[3px] after:bg-orange-800  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800"
            >
              Contact
            </Link>
          </li>
        </ul>
      </motion.nav>
      <motion.nav
        animate={cartisOpen ? "open" : "closed"}
        variants={variantsCart}
        className={classNames}
      >
        <motion.button
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCartClick}
          className="p-1 m-2 float-right shadow-lg"
        >
          <CloseIcon />
        </motion.button>
        <div className="m-5">
          <h1 className="text-peach text-center font-bold text-2xl">MY CART</h1>
          <table className="border-b p-4 m-5 w-full ">
            <thead>
              <tr className=" p-4">
                <th className="border-b">S.No</th>
                <th className="border-b">Item</th>
                <th className="border-b">Image</th>
                <th className="border-b">Price</th>
                <th className="border-b">quantity</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr className="border-b p-4 text-center" key={product.id}>
                  <td className="border-b">1</td>
                  <td className="border-b">{product.title}</td>
                  <td className="border-b">img</td>
                  <td className="border-b">{product.quantity? product.price * product.quantity : product.price}</td>
                  <td className="text-center">
                    <button
                      onClick={() => dispatch(increment(product.id))}
                      className="p-4"
                    >
                      +
                    </button>{" "}
                    <span>{product.quantity}</span>{" "}
                    <button onClick={() => dispatch(decrement(product.id))}>
                      -
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.nav>
    </>
  );
}
