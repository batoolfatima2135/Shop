"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Shop() {
  const Products = useSelector((state: RootState) => state.products.products);
  const Categories = useSelector(
    (state: RootState) => state.products.categories
  );
  return (
      <MainArea  products={Products} ></MainArea>
  );
}
