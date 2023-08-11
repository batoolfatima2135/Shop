"use client";
import React from "react";
import { Remove, decrement, increment } from "@/Redux/Slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import ButtonStyle from "@/Components/ButtonStyle";
import Link from "next/link";

export default function Cart() {
  const products = useSelector((state: RootState) => state.products.products);
  const filteredProducts = products.filter(
    (product) =>
      product.hasOwnProperty("quantity") &&
      product.quantity !== undefined &&
      product.quantity > 0
  );

  const dispatch = useDispatch();
  return (
    <div className="col-span-6 border-l  m-5">
      <h1 className="text-peach text-center font-bold text-2xl">MY CART</h1>
      {filteredProducts.length > 0 ? (
        <table className=" border p-4 m-5 w-full ">
          <thead>
            <tr className=" p-4">
              <th className=" border-b w-1/6">S.No</th>
              <th className=" border-b w-1/6">Item</th>
              <th className=" border-b w-1/6">Image</th>
              <th className=" border-b w-1/6">Price</th>
              <th className=" border-b w-1/6">quantity</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product, index) => (
              <tr className=" p-5 text-center" key={product.id}>
                <td className=" border-b w-1/6">{index + 1}</td>
                <td className=" border-b w-1/6">{product.title}</td>
                <td className=" border-b w-1/6">
                  <div className="flex justify-center">
                    <Image
                      src={product.image}
                      alt="image"
                      className="m-3"
                      height={50}
                      width={50}
                    />
                  </div>
                </td>
                <td className=" border-b w-1/6 font-medium">
                  <span className="font-serif text-xl"> &#36; </span>
                  {product.quantity && product.quantity > 0
                    ? product.price * product.quantity
                    : product.price}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => dispatch(increment(product.id))}
                    className="m-2 px-3 text-2xl r text-peach  border font-bold"
                  >
                    +
                  </button>{" "}
                  {product.quantity}
                  <button
                    className="m-2  px-3 text-2xl border text-peach font-bold"
                    onClick={() =>
                      product.quantity !== undefined && product.quantity > 0
                        ? dispatch(decrement(product.id))
                        : dispatch(Remove(product.id))
                    }
                  >
                    -
                  </button>
                </td>
              </tr>
            ))}
            <tr className="p-4 text-center">
              <td
                colSpan={4}
                className="border-t border-e p-5 font-semibold text-lg text-right"
              >
                Total Price:
              </td>
              <td className="border-t p-5 font-semibold text-lg">
                {"$ "}
                {products.reduce(
                  (total, product) =>
                    total + product.price * (product.quantity || 0),
                  0
                )}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <div className="m-4 py-10 border">
          <p className="text-center font-medium text-xl">Your cart is empty</p>
        </div>
      )}
      <div className="flex justify-end p-5">
        <Link href="/shop">
          <ButtonStyle>Continue shopping</ButtonStyle>
        </Link>

        {filteredProducts.length > 0 && (
          <Link href="/shop">
            <ButtonStyle>Checkout </ButtonStyle>
          </Link>
        )}
      </div>
    </div>
  );
}
