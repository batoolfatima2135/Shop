import React from "react";

export default function ButtonStyle({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="px-4 py-2 mx-2  text-peach text-lg   border-peach border-2 hover:bg-peach hover:text-white hover:scale-105  ">
      {children}
    </button>
  );
}
