import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShieldIcon from "@mui/icons-material/Shield";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

export default function ChooseUs() {
  return (
    <section className="m-10">
      <p className="text-center mt-24">Best Products</p>
      <h1 className="text-3xl font-bold text-center ">Why Choose Us</h1>
      <div className="w-20 border-b-2 mb-8 border-peach text-white mx-auto">
        <p className="text-xs">s</p>
      </div>
      <div className="grid grid-cols-4 justify-center sm:p-5  ">
        <div className="text-center m-3  border px-2 py-8 shadow-xl bg-gray-100 sm:col-span-1 col-span-4">
          <LocalShippingIcon
            sx={{ fontSize: 50, color: "rgb(255, 138, 118)" }}
          />
          <h2 className="font-bold text-xl p-2 ">Fast Delivery</h2>
          <p className="text-gray-700">
            We provide the fastest delivery that you can ever experience
          </p>
        </div>
        <div className="text-center m-3  border px-2 py-8 shadow-xl bg-gray-100 sm:col-span-1 col-span-4">
          <AccountBalanceWalletIcon
            sx={{ fontSize: 50, color: "rgb(255, 138, 118)" }}
          />
          <h2 className="font-bold text-xl p-2">Free Shipping</h2>
          <p className="text-gray-700">
            We are providing free shipping all over state and other delivery
            charges are also minimum
          </p>
        </div>
        <div className="text-center m-3  border px-2 py-8 shadow-xl bg-gray-100 sm:col-span-1 col-span-4">
          <ShieldIcon sx={{ fontSize: 50, color: "rgb(255, 138, 118)" }} />
          <h2 className="font-bold text-xl p-2">Secure Checkout</h2>
          <p className="text-gray-700">
            Secured checkout is provided as the safety is our most important
            priority
          </p>
        </div>
        <div className="text-center m-3  border px-2 py-8 shadow-xl bg-gray-100 sm:col-span-1 col-span-4">
          <AssignmentReturnIcon
            sx={{ fontSize: 50, color: "rgb(255, 138, 118)" }}
          />
          <h2 className="font-bold text-xl p-2">Easy Returns</h2>
          <p className="text-gray-700">
            We provide easy returns and money back gurantee on our all products
          </p>
        </div>
      </div>
    </section>
  );
}
