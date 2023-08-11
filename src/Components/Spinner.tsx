"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

export default function Spinner() {
  return (
    <div className="lg:col-span-6 md:col-span-6 col-span-8 my-4 flex justify-center items-center">
      <Oval
        height={50}
        width={50}
        color="rgb(255, 138, 118)"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="rgb(255, 138, 118)"
        strokeWidth={5}
        strokeWidthSecondary={5}
      />
    </div>
  );
}
