import React, { Suspense, useState } from "react";
const ProductList = React.lazy(() =>
  import("ProductListApp_Remote/ProductList")
);
const ProductDetails = React.lazy(() =>
  import("ProductDetailsApp_Remote/ProductDetails")
);

export default function ProductsPage() {
  let [selectedProduct, setSelectedProduct] = useState(1);

  const handleProductSelected = (productId) => {
    setSelectedProduct(productId);
  };
  return (
    <main className="px-4 py-8">
      <div className="flex gap-8 flex-col md:flex-row">
        <Suspense fallback={<h1>Error Loading Product List</h1>}>
          <ProductList onProductSelected={handleProductSelected} />
        </Suspense>
        <Suspense fallback={<h1>Error Loading Product Details</h1>}>
          <ProductDetails selectedProductId={selectedProduct} />
        </Suspense>
      </div>
    </main>
  );
}
