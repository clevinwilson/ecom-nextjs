import React from "react";
import Cards from "./Cards";

function ProductListing() {
  return (
    <div className="flex flex-wrap justify-around">
      <Cards />
      <Cards />
      <Cards />
    </div>
  );
}

export default ProductListing;
