import React from "react";
import productList from "../mock-data/productList.json";
import Product from "./Product";
import "../index.css";
/**
 * This page contains a summary of all the Accounts and
 * show the details of a selected account
 *
 */
export default function ProductList({ onProductSelected }) {
  return (
    <div className="flex flex-col gap-4 border border-gray-400 border-dashed p-8 rounded-xl">
      <section className="flex gap-8 flex-wrap justify-center md:justify-start">
        {productList.products.map((product) => (
          <div
            key={product.id}
            onClick={() => {
              onProductSelected(product.id);
            }}
          >
            <Product product={product} />
          </div>
        ))}
      </section>
    </div>
  );
}
