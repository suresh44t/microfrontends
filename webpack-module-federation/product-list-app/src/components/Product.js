import React from "react";

export default function Product({ product }) {
  return (
    <div
      className={`bg-white h-20 w-64 shadow-lg rounded-xl relative border-l-2 border-${product.color}-500 hover:bg-${product.color}-100 cursor-pointer `}
    >
      <span
        className={`absolute bg-${product.color}-500 text-white px-4 py-1 rounded-full font-bold -top-3 left-4 text-xs uppercase`}
      >
        {product.price}
      </span>
      <div className="flex flex-col space-y-6 h-full justify-center pl-4">
        <div>
          <h2 className={`text-base text-${product.color}-500`}>
            {product.title}
          </h2>
        </div>
      </div>
    </div>
  );
}
