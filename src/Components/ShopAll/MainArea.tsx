import { productsArray } from "@/Redux/Slices/productSlice";
import React from "react";
import AddtoCart from "../AddtoCart";
import Image from "next/image";
import ButtonStyle from "../ButtonStyle";
import Link from "next/link";

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
      <div className="grid grid-cols-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border m-3 p-5  lg:col-span-2 md:col-span-3 col-span-6"
          >
            <div className="h-[200px] flex justify-center items-center">
              <Image
                src={product.image}
                alt="image"
                className="m-3"
                height={100}
                width={100}
              />
            </div>
            <div className="h-[100px]">
              <p className="border-b border-t pb-1">{product.title}</p>
              <div className="flex justify-between items-center pt-2">
                <p>
                  <span className="font-serif text-xl ">
                    <b> &#36;</b>
                  </span>{" "}
                  <b>{product.price}</b>
                </p>
                <p>{product.category}</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="">
                <AddtoCart id={product.id} />
              </div>
              <div>
                <ButtonStyle>
                  <Link href={`/shop/details/${product.id}`}>View Details</Link>
                </ButtonStyle>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
