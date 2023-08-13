import { RootState } from "@/Redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import AddtoCart from "../AddtoCart";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ButtonStyle from "../ButtonStyle";

export default function Featured() {
  const products = useSelector((state: RootState) => state.products.products);
  const slice = products.slice(0, 4);

  return (
    <section className="my-10">
      <p className="text-center mt-24">Our featured Products</p>
      <h1 className="text-3xl font-bold text-center ">Featured Products</h1>
      <div className="w-20 border-b-2 mb-8 border-peach text-white mx-auto">
        <p className="text-xs">s</p>
      </div>
      <div className="grid grid-cols-4 justify-center ">
        {slice.map((product) => (
          <div
            key={product.id}
            className="border-2 sm:m-3 m-2 sm:p-5 p-2 shadow-2xl  sm:col-span-1 col-span-2 "
          >
            {" "}
            <Link href={`/shop/details/${product.id}`}>
              <div className="h-[150px] flex justify-center items-center ">
                <Image
                  src={product.image}
                  alt="image"
                  className="m-3"
                  height={80}
                  width={80}
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
                <p className="sm:block hidden capitalize">{product.category}</p>
              </div>
            </div>
            <div className="flex sm:justify-center  items-center mt-2">
              <AddtoCart id={product.id} quantity={1} />
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
      </div>
    </section>
  );
}
