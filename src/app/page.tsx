"use client";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import coverImage from "../Assets/cover.jpg";
import Image from "next/image";
import ByCategory from "@/Components/Home/ByCategory";
import Featured from "@/Components/Home/Featured";
import ChooseUs from "@/Components/Home/ChooseUs";
import Subscribe from "@/Components/Home/Subscribe";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <main className=" justify-center items-center">
      <div className=" px-32  bg-peach rounded">
        <Image
          src={coverImage}
          alt="cover"
          className="rounded bg-cover"
          height={600}
          width={1000}
        />
      </div>
      <ByCategory />
      <Featured />
      <ChooseUs />
      <Subscribe />
    </main>
  );
}
