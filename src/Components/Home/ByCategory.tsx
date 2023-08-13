"use client";
import { RootState } from "@/Redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

export default function ByCategory() {
  const products = useSelector((state: RootState) => state.products.products);
  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.category))
  );

  const getCategoryProductCount = (category: string) =>
    products.filter((product) => product.category === category).length;

  const getCategoryRepresentativeImage = (category: string) => {
    const productInCategory = products.find(
      (product) => product.category === category
    );
    return productInCategory
      ? productInCategory.image
      : "/default-placeholder-image.jpg";
  };

  return (
    <section className="my-10">
      <p className="text-center">Our Categories</p>
      <h1 className="text-3xl font-bold text-center ">Shop by Category</h1>
      <div className="w-20 border-b-2 mb-8 border-peach text-white mx-auto">
        <p className="text-xs">s</p>
      </div>
      <div className="grid grid-cols-4 justify-center ">
        {uniqueCategories.map((category) => (
          <div
            key={category}
            className="shadow-2xl p-2 m-2 border sm:m-2 sm:p-2 sm:col-span-1 col-span-2"
          >
            <Link href={`/shop/${category}`}>
              <div className="h-[150px] flex justify-center items-center mx-2">
                <Image
                  src={getCategoryRepresentativeImage(category)}
                  alt="image"
                  className="m-3"
                  height={80}
                  width={80}
                />
              </div>
            </Link>
            <div className="text-center font-bold text-gray-700 capitalize">
              <h3>{category}</h3>
              <p>{getCategoryProductCount(category)} Products</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
