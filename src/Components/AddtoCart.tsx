import { addtoCart } from "@/Redux/Slices/productSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ButtonStyle from "./ButtonStyle";

interface AddtoCartProps {
  id: number;
}

export default function AddtoCart({ id }: AddtoCartProps) {
  const [showMessage, setShowMessage] = useState(false);
  const dispatch = useDispatch();

  const handleClick = () => {
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
    <div >
      <button
        onClick={handleClick}
        className="px-3 py-2 mx-2  text-peach lg:text-lg   border-peach border-2 hover:bg-peach hover:text-white hover:scale-105"
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
