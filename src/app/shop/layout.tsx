"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import Sidebar from "@/Components/ShopAll/Sidebar";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";


export default function ShopLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
 const Products = useSelector((state: RootState) => state.products.products);
  const Categories = useSelector(
    (state: RootState) => state.products.categories
  );
  return (
    <div className="container mx-auto grid grid-cols-8 sm:m-10">
      <Sidebar products={Products} categories={Categories}></Sidebar>
      {children}
    </div>
  )
}