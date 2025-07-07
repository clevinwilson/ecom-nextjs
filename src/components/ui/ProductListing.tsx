import React from "react";
import Cards from "./Cards";
import { fetchAllProducts } from "@/domains/products/services/productService";

export const revalidate = 10;

async function ProductListing() {
  const products = await fetchAllProducts();
  return (
    <div className="flex flex-wrap justify-around">
      {products?.map((product, index) => {
        return <Cards product={product} key={index} />;
      })}
    </div>
  );
}

export default ProductListing;
