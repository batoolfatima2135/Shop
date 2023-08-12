import React from "react";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/navigation";

export default function Search() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const handleSubmit = () => {
    router.push(`/shop/search/${query}`);
    setQuery('');
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search products.."
        value={query}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        className="shadow appearance-none border hidden   lg:block border-slate-300 rounded w-full my-4  py-2 px-3 text-gray-700 mb-3  leading-tight focus:shadow-lg focus:outline-none"
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="px-2 hidden  lg:block"
      >
        <SearchIcon />
      </button>
    </>
  );
}
