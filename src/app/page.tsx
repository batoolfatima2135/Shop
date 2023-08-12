"use client";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";
import coverImage from "../Assets/cover.jpg";
import Image from "next/image";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <main className="flex justify-center items-center">
      <div className=" px-32  bg-peach rounded">
        <Image
          src={coverImage}
          alt="cover"
          className="rounded bg-cover"
          height={600}
          width={1000}
        />
      </div>
    </main>
  );
}
