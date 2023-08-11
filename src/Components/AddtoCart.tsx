import {
  addtoCart,
  addtoCartQuantity,
  myAction,
} from "@/Redux/Slices/productSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ShoppingCartIcon from "../Assets/Icons/shopping-basket.png";
import Image from "next/image";

interface AddtoCartProps {
  id: number;
  quantity?: number;
}

export default function AddtoCart({ id, quantity }: AddtoCartProps) {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
    if (quantity) {
      console.log(quantity);
      dispatch(myAction(id, quantity));
    }
    dispatch(addtoCart(id));
    setShowMessage(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <div>
      <button
        onClick={handleClick}
        className="py-2 mx-2 px-2 text-peach lg:text-lg sm:hidden block  border-peach border-2hover:scale-105"
      >
        <Image
          src={ShoppingCartIcon}
          alt="cart"
          className=" w-5 h-5  sm:block md:block lg:block"
        />
      </button>
      <button
        onClick={handleClick}
        className="px-3 py-2 mx-2  text-peach lg:text-lg  sm:block hidden  border-peach border-2 hover:bg-peach hover:text-white hover:scale-105"
      >
        Add to cart
      </button>

      <div
        className={`absolute b-0 m-1 p-3 bg-gray-500 text-white rounded-md transition-opacity ${
          showMessage ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        <p className="text-center">Product added successfully!</p>
      </div>
    </div>
  );
}
