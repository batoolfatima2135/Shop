import { addtoCart } from "@/Redux/Slices/productSlice";
import React from "react";
import { useDispatch } from "react-redux";

interface AddtoCartProps {
  id: number;
}

export default function AddtoCart({ id }: AddtoCartProps) {
  const handleClick = () => {
    dispatch(addtoCart(id));
  };
  const dispatch = useDispatch();
  return (
    <button className="border-red-400" onClick={handleClick}>
      Add to cart
    </button>
  );
}
