"use client";
import MainArea from "@/Components/ShopAll/MainArea";
import { RootState } from "@/Redux/store";
import React from "react";
import { useSelector } from "react-redux";

export default function Category({ params }: { params: { slug: string } }) {
  const products = useSelector((state: RootState) => state.products.products);
  let filtered;
  let slug;
  const decodedSlug = decodeURIComponent(params.slug);

  if (!isNaN(Number(decodedSlug))) {
    slug = "price";
    const numericSlug: number = parseFloat(decodedSlug);
    filtered = products.filter((product) => product.price < numericSlug);
    console.log(filtered);
  } else {
    slug = "category";
    filtered = products.filter((product) => product.category === decodedSlug);
  }

  return (
    <>
      <MainArea products={filtered} scope={slug} name = {decodedSlug}></MainArea>;
    </>
  );
}
