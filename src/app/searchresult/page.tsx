"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import Sidebar from "@/Components/ShopAll/Sidebar";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";



export default function SearchResult({ params }: { params: { query: string } }) {
  const products = useSelector((state: RootState) => state.products.products);
  const categories = useSelector(
    (state: RootState) => state.products.categories
  );
  const filtered = products.filter(
    (product) => (product.title.toLowerCase().includes(params.query.toLowerCase()) || product.category.toLowerCase().includes(params.query.toLowerCase())));
  return (
    <div className="container mx-auto grid grid-cols-8 sm:m-10">
      <Sidebar products={products} categories={categories}></Sidebar>
      <MainArea products={filtered}></MainArea>
    </div>
  );
}
