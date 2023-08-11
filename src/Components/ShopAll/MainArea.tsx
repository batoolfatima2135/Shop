import { productsArray } from "@/Redux/Slices/productSlice";
import React from "react";
import AddtoCart from "../AddtoCart";

interface SidebarProps {
  products: productsArray[];
  scope?: string;
}
export default function MainArea({ products, scope }: SidebarProps) {
  return (
    <div className="lg:col-span-6 md:col-span-6 col-span-8 my-4">
      {scope && (
        <h1 className="text-peach font-bold text-2xl  mx-3 ">
          SORTED BY {scope === "price" ? "PRICE" : "CATEGORY"}
        </h1>
      )}

      {products.map((product) => (
        <div key={product.id} className="border m-3 bg-red-300">
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <AddtoCart id={product.id} />
        </div>
      ))}
    </div>
  );
}
