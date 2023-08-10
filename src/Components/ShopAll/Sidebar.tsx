import { productsArray } from "@/Redux/Slices/productSlice";
import Link from "next/link";
import React from "react";

interface SidebarProps {
  products: productsArray[];
  categories: string[];
}

export default function Sidebar({ products, categories }: SidebarProps) {
  const prices = products.map((product) => product.price);
  function roundToNearest(number: number) {
    return Math.round(number / 100) * 100;
  }
  const max = Math.round(Math.max(...prices));
  const min = Math.round(Math.min(...prices));
  const midPoint = Math.floor((max + min) / 2);
  const interval = Math.floor((max - min) / 4);

  const numbers = [
    midPoint - 2 * interval,
    midPoint - interval,
    midPoint + interval,
    midPoint + 2 * interval,
  ];
  let priceRange = numbers.map((number) => roundToNearest(number));
  priceRange = priceRange.filter((number) => number !== 0);
  console.log(priceRange);
  return (
    <div className="hidden sm:block sm:col-span-2 m-9">
      <div>
        <h1 className="text-peach font-bold text-2xl">BY CATEGORY</h1>
        <ul>
          {categories.map((category) => (
            <li key={category} className="my-5 text-lg border-b-2">
              <Link href={`/shop/${category}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="my-11">
        <h1 className="text-peach font-bold text-2xl">BY PRICE</h1>
        <ul>
          {priceRange.map((price) => (
            <li key={price} className="my-5 text-lg border-b-2">
              <Link href="/">
                Under <span className="font-serif text-xl"> &#36;</span>
                {price}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
