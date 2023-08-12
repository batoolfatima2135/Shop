"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Search({ params }: { params: { query: string } }) {
  const products = useSelector((state: RootState) => state.products.products);
  const result = products.filter((product) => {
    const titleMatch = product.title
      .toLowerCase()
      .includes(params.query.toLowerCase());
    const categoryMatch = product.category
      .toLowerCase()
      .includes(params.query.toLowerCase());
    return titleMatch || categoryMatch;
  });
  return (
    <MainArea products={result} scope="search" name={params.query}></MainArea>
  );
}
