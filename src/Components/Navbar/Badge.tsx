"use client";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Badge() {
  const products = useSelector((state: RootState) => state.products.products);
  const filteredProducts = products.filter(
    (product) =>
      product.hasOwnProperty("quantity") &&
      product.quantity !== undefined &&
      product.quantity > 0
  );
  const quantity = filteredProducts.reduce(
    (total, product) => total + (product.quantity || 0),
    0
  );

  return (
    <div className="absolute sm:right-9 right-[60px] flex items-center justify-center w-5 h-5 rounded-full bg-red-700 text-xs text-center text-white">
      <p>{quantity}</p>
    </div>
  );
}
