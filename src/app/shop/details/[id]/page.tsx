"use client";
import AddtoCart from "@/Components/AddtoCart";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Details({ params }: { params: { id: string } }) {
  const [quantity, setquantity] = useState(1);
  const products = useSelector((state: RootState) => state.products.products);
  const id = Number(params.id);
  const product = products.find((product) => product.id === id);
  const increment = () => {
    setquantity(quantity + 1);
  };
  const decrement = () => {
    setquantity(quantity - 1);
  };

  return (
    <div className="lg:col-span-6 md:col-span-6 col-span-8 my-10">
      {product ? (
        <div className="grid grid-cols-2 justify-center items-center">
          <div className="flex justify-center items-center sm:col-span-1 col-span-2">
            <Image
              src={product.image}
              alt="image"
              className="m-3"
              height={200}
              width={200}
            />
          </div>
          <div className="justify-center items-center sm:col-span-1 col-span-2 m-5">
            <h1 className="text-peach font-bold text-2xl">{product.title}</h1>
            <h2 className="font-semibold text-xl capitalize my-2">
              <span className="font-serif text-2xl ">
                <b> &#36;</b>
              </span>{" "}
              <b>{product.price}</b>
            </h2>
            <h2 className="capitalize my-2">Category: {product.category}</h2>
            <p className="my-2">{product.description}</p>

            <div className="flex   items-center my-5">
              <div>
                <button
                  onClick={increment}
                  className="m-2 lg:px-3 sm:text-base   lg:text-2xl  text-peach  lg:border font-bold"
                >
                  +
                </button>{" "}
                {quantity}
                <button
                  className="m-2 lg:px-3 sm:text-base   lg:text-2xl  text-peach  lg:border font-bold"
                  onClick={decrement}
                >
                  -
                </button>
              </div>
              <div className="">
                <AddtoCart id={product.id} quantity={quantity} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
}
