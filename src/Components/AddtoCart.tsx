import { addtoCart } from "@/Redux/Slices/productSlice";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

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
    <div>
      <button className="border-red-400" onClick={handleClick}>
        Add to cart
      </button>
      <div
        className={`bg-green-300 mt-2 p-2 rounded-md transition-opacity ${
          showMessage ? "opacity-100" : "opacity-0 hidden"
        }`}
      >
        Product added successfully!
      </div>
    </div>
  );
}
