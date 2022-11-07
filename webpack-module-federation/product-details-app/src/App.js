import React from "react";
import ProductDetails from "./components/ProductDetails";

export default function App() {

  return (
    <main className="m-8">
      <div className="p-8 border border-gray-200 rounded-xl relative">
        <span className="absolute -top-2 bg-gray-300 rounded-full px-4 text-xs">
          Product Details App
        </span>

        <div className="mb-10">
          <ProductDetails selectedProductId={1} />
        </div>
        <ProductDetails selectedProductId={2} />
      </div>
    </main>
  );
}
