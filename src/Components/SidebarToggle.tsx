import React from "react";
import TuneIcon from "@mui/icons-material/Tune";
import { motion } from "framer-motion";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "@/Redux/store";
import Link from "next/link";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export default function SidebarToggle() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const Products = useSelector((state: RootState) => state.products.products);
  const Categories = useSelector(
    (state: RootState) => state.products.categories
  );
  const prices = Products.map((product) => product.price);
  function roundToNearest(number: number) {
    return Math.round(number / 100) * 100;
  }
  const max = Math.round(Math.max(...prices));
  const min = Math.round(Math.min(...prices));
  const midPoint = Math.floor((max + min) / 2);
  const interval = Math.floor((max - min) / 4);

  const numbers = [
    midPoint - 2 * interval,
    midPoint - interval,
    midPoint + interval,
    midPoint + 2 * interval,
  ];
  let priceRange = numbers.map((number) => roundToNearest(number));
  priceRange = priceRange.filter((number) => number !== 0);
  const classNames = `absolute bg-white mt-14 w-3/4 shadow-lg justify-between ${
    isOpen ? "" : "opacity-0"
  }`;
  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <>
      <button className="sm:px-3 text-lg sm:hidden block" onClick={handleClick}>
        <TuneIcon color="action" />
      </button>
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
        <div className="sm:col-span-2 m-9">
          <div>
            <h1 className="text-peach font-bold text-2xl">BY CATEGORY</h1>
            <ul>
              {Categories.map((category) => (
                <li
                  key={category}
                  className="my-5 text-lg border-b-2 capitalize"
                >
                  <Link href={`/shop/${category}`}>{category}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-11">
            <h1 className="text-peach font-bold text-2xl">BY PRICE</h1>
            <ul>
              {priceRange.map((price) => (
                <li key={price} className="my-5 text-lg border-b-2">
                  <Link href={`/shop/${price}`}>
                    Under <span className="font-serif text-xl"> &#36;</span>
                    {price}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
