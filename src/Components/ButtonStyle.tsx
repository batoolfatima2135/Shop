import React from "react";

export default function ButtonStyle({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <button className="sm:px-3 px-1 sm:py-2 py-1 sm:mx-2 mx-1  text-peach lg:text-lg   border-peach border-2 hover:bg-peach hover:text-white hover:scale-105  ">
      {children}
    </button>
  );
}
