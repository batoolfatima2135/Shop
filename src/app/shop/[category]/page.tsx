"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import Sidebar from "@/Components/ShopAll/Sidebar";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Category({ params }: { params: { category: string } }) {
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );

  const decodedCategory = decodeURIComponent(params.category);
  const filtered = products.filter(
    (product) => product.category === decodedCategory
  );
  return (
    <div className="container mx-auto grid grid-cols-8 sm:m-10">
      <Sidebar products={products} categories={categories}></Sidebar>
      <MainArea products={filtered}></MainArea>
    </div>
  );
}
