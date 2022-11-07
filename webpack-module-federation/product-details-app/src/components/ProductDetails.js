import React from "react";
import productDetails from "../mock-data/productDetails.json";
import "../index.css";

export default function ProductDetails({ selectedProductId }) {
  const details = productDetails[selectedProductId];
  console.log({selectedProductId})

  return (
    <div className="rounded-xl bg-white shadow-lg text-white">
      <div className="flex rounded-tl-xl flex-col">
        <div
          className={`flex-1 bg-${details.color}-500 px-4 py-8 rounded-t-xl shadow`}
        >
          <span
            className={`bg-${details.color}-700 px-4 py-1 rounded-full text-xs uppercase`}
          >
            {details.price}
          </span>
          <h1 className="text-2xl mt-2"> {details.title}</h1>
        </div>
        <div className="flex-1 text-sm text-gray-500 my-4 px-4">
          {details.description}
        </div>
      </div>
    </div>
  );
}
