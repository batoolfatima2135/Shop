"use client";
import { RootState } from "@/Redux/store";
import { useSelector } from "react-redux";

export default function Home() {
  const products = useSelector((state: RootState) => state.products.products);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-3 h-5 rounded-full bg-blue-500 text-xs">badge</div>
    </main>
  );
}
