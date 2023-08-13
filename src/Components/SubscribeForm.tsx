import React from 'react'

export default function SubscribeForm() {
  return (
     <div className=" grid grid-cols-2 col-span-2 sm:col-span-1 justify-center items-center ">
        <div className="flex justify-end">
          <input
            type="text"
            placeholder="Enter you email"
            className="shadow appearance-none border w-3/4 sm:w-full sm:h-12 border-slate-300 rounded  my-4  py-2 px-3 text-gray-700 mb-3  leading-tight focus:shadow-lg focus:outline-none"
          />
        </div>
        <div className="sm:m-4 mt-1 flex justify-start">
          <button className="sm:px-3 px-1 sm:py-2 py-1 sm:mx-2 mx-1 w-1/2 text-peach lg:text-lg   border-peach border-2 hover:bg-peach hover:text-white hover:scale-105 ">
            Subscribe
          </button>
        </div>
      </div>
  )
}
