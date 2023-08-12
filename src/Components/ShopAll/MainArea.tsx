import { productsArray } from "@/Redux/Slices/productSlice";
import React from "react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import AddtoCart from "../AddtoCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Image from "next/image";
import ButtonStyle from "../ButtonStyle";
import Link from "next/link";

interface SidebarProps {
  products: productsArray[];
  scope?: string;
  name?: string;
}

export default function MainArea({ products, scope, name }: SidebarProps) {
  const pathname = usePathname();
  const modifiedString = pathname.replace("%20", " ").replace(/\//g, " > ");
  const [sortedProducts, setSortedProducts] =
    useState<productsArray[]>(products);

  const handleAscendingclick = () => {
    const ascendingProducts = [...products].sort((a, b) => a.price - b.price);
    setSortedProducts(ascendingProducts);
  };

  const handledescendingclick = () => {
    const descendingProducts = [...products].sort((a, b) => b.price - a.price);
    setSortedProducts(descendingProducts);
  };

  return (
    <div className="lg:col-span-6 md:col-span-6 col-span-8  mx-1">
      <div className="grid grid-cols-6 mx-3 my-2">
        <div className="col-span-5 ">
          <span className="text-sm ca font-bold text-gray-500">
            {modifiedString}
          </span>
        </div>
      </div>
      {scope && (
        <h1 className="text-peach font-bold text-2xl mx-3 ">
          {scope === "price" && <>SORTED BY PRICE</>}
          {scope === "category" && <>SORTED BY CATEGORY {name}</>}
          {scope === "search" && <>Search results for {name}</>}
        </h1>
      )}

      <div className="flex mb-4 m-3 border p-5 shadow-lg">
        <p className="font-bold mt-[2px] sm:text-lg uppercase mx-3">
          Sort By Price :
        </p>
        <button className="sm:px-3 text-lg" onClick={handleAscendingclick}>
          Low to high
        </button>
        <button className="mx-3 text-lg" onClick={handledescendingclick}>
          High to Low
        </button>
      </div>
      <div className="grid grid-cols-6">
        {sortedProducts &&
          sortedProducts.map((product) => (
            <div
              key={product.id}
              className="border-2 sm:m-3 m-1 sm:p-5 p-2 shadow-lg  lg:col-span-2 col-span-3"
            >
              {" "}
              <Link href={`/shop/details/${product.id}`}>
                <div className="h-[200px] flex justify-center items-center ">
                  <Image
                    src={product.image}
                    alt="image"
                    className="m-3"
                    height={100}
                    width={100}
                  />
                </div>
              </Link>
              <div className="h-[120px]">
                <Link href={`/shop/details/${product.id}`}>
                  <p className="border-b border-t pb-1">{product.title}</p>
                </Link>
                <div className="flex justify-between items-center pt-2">
                  <p>
                    <span className="font-serif text-xl ">
                      <b> &#36;</b>
                    </span>{" "}
                    <b>{product.price}</b>
                  </p>
                  <p className="sm:block hidden capitalize">
                    {product.category}
                  </p>
                </div>
              </div>
              <div className="flex sm:justify-center  items-center mt-2">
                <AddtoCart id={product.id} />
                <Link href={`/shop/details/${product.id}`}>
                  <ButtonStyle>
                    <span className="sm:block hidden">View Details</span>
                    <span className="sm:hidden block">
                      <VisibilityIcon />
                    </span>
                  </ButtonStyle>
                </Link>
              </div>
            </div>
          ))}
        {sortedProducts.length < 1 && (
          <div className="lg:col-span-6 md:col-span-6 col-span-8  flex items-center first-letter:flex justify-center align-middle h-60">
            <p className="text-2xl">No search result found</p>
          </div>
        )}
      </div>
    </div>
  );
}
