import { productsArray } from "@/Redux/Slices/productSlice";
import React from "react";
import AddtoCart from '../AddtoCart';

interface SidebarProps {
  products: productsArray[];
}
export default function MainArea({ products }: SidebarProps) {

  return (
    <div className="sm:col-span-6 m-5">
      {products.map((product) => (
        <div key={product.id} className="border m-3 bg-red-300">
          <p>{product.id}</p>
          <p>{product.title}</p>
          <p>{product.category}</p>
          <AddtoCart id={product.id} />
          
        </div>
      ))}
    </div>
  );
}
