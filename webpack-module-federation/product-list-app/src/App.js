import React, { useState } from "react";
import ProductList from "./components/ProductList";

/**
 * Main Component of the application.
 * Contains all the routing configurations
 *
 */
export default function App() {

  return (
    <main className="m-8">
      <div className=" p-8 border border-gray-200 rounded-xl relative">
        <span className="absolute -top-2 bg-gray-300 rounded-full px-4 text-xs">
          Product List App
        </span>
        <ProductList />
      </div>
    </main>
  );
}
