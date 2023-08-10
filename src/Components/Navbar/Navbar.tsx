import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import MobToggle from "./MobToggle";
import Serach from "./Search";
import Search from "./Search";

export default function Navbar() {
  return (
    <div className="container mx-auto sticky top-0 bg-white">
      <nav className="grid  grid-cols-8 p-3 shadow-lg ">
        <Logo />
        <Menu />
        <MobToggle />
      </nav>
    </div>
  );
}
