"use client";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import ArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface DropdownProps {
  screen: string;
  handleClickprop?: () => void;
}

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-10%" },
};

export default function Dropdown({ screen, handleClickprop }: DropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const classNames =
    screen === "web"
      ? `absolute p-2  bg-white shadow-lg justify-between ${
          isOpen ? "" : "hidden "
        } `
      : `  bg-white  justify-between ${isOpen ? "" : "opacity-0"} ${
          isOpen ? "" : "hidden"
        } `;

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const categories: string[] = useSelector(
    (state: RootState) => state.products.categories
  );

  return (
    <>
      <button onClick={handleClick} className="text-xl">
        Categories <ArrowDownIcon />{" "}
      </button>
      <motion.nav
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        className={classNames}
      >
        <ul className="">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href={`/shop/${category}`}
                onClick={screen === "web" ? handleClick : handleClickprop}
                className="my-3 capitalize transform transition duration-500 relative text-lg w-fit block after:block after:absolute after:h-[3px] after:bg-peach  after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center hover:text-orange-800"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}
