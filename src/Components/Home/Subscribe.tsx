import React from "react";
import ButtonStyle from "../ButtonStyle";
import SubscribeForm from '../SubscribeForm';

export default function Subscribe() {
  return (
    <section className="grid grid-cols-2 justify-center align-middle my-24">
      <div className="col-span-2 sm:col-span-1">
        <p className="text-center">Get all updates</p>
        <h1 className="text-3xl font-bold text-center ">Subscribe Us</h1>
        <div className="w-20 border-b-2 mb-8 border-peach text-white mx-auto">
          <p className="text-xs">s</p>
        </div>
      </div>
     <SubscribeForm />
    </section>
  );
}
