"use client";
import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search products.."
        onChange={handleSearchInputChange}
        className="shadow appearance-none border hidden  lg:block border-slate-300 rounded w-3/4 my-4  py-2 px-3 text-gray-700 mb-3  leading-tight focus:shadow-lg focus:outline-none"
      />
      <button className="px-2 hidden  lg:block">
        <SearchIcon />
      </button>
    </>
  );
}
