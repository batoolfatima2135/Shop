import { productsArray } from "@/Redux/Slices/productSlice";
import React from "react";
import AddtoCart from "../AddtoCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
        <h1 className="text-peach font-bold text-2xl mx-3 ">
          SORTED BY {scope === "price" ? "PRICE" : "CATEGORY"}
        </h1>
      )}
      <div className="grid grid-cols-2  gap-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="border-2 sm:m-3 m-1 sm:p-5 p-2 shadow-lg"
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
            <div className="h-[120px]">
              <p className="border-b border-t pb-1">{product.title}</p>
              <div className="flex justify-between items-center pt-2">
                <p>
                  <span className="font-serif text-xl ">
                    <b> &#36;</b>
                  </span>{" "}
                  <b>{product.price}</b>
                </p>
                <p className="sm:block hidden">{product.category}</p>
              </div>
            </div>

            <div className="flex sm:justify-center  items-center mt-2">
              <AddtoCart id={product.id} />
              <ButtonStyle>
                <Link href={`/shop/details/${product.id}`}>
                  <span className="sm:block hidden">View Details</span>
                  <span className="sm:hidden block">
                    <VisibilityIcon />
                  </span>
                </Link>
              </ButtonStyle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
