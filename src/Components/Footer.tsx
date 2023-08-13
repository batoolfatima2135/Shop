import React from "react";
import Logo from "./Navbar/Logo";
import SubscribeForm from "./SubscribeForm";

export default function Footer() {
  return (
    <footer className="grid grid-cols-4 bg-gray-200 p-24">
      <div className="text-center">
        <Logo />
      </div>
      <div>
        <h1 className="text-xl font-bold">USEFULL LINKS</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold ">CATEGORIES</h1>
      </div>
      <div>
        <h1 className="text-xl font-bold ">SUBSCRIBE</h1>
        <SubscribeForm />
      </div>
    </footer>
  );
}
