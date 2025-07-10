import React from "react";
import {
  fetchAllProducts,
  fetchProductById,
} from "@/domains/products/services/productService";

export const revalidate = false; // ✅ No revalidation needed (fully static)

export async function generateStaticParams() {
  const products = await fetchAllProducts();
  if (!products) return [];
  return products.map((product) => ({ id: product._id.toString() }));
}

const ProductDetailsPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = await params;
  const product = await fetchProductById(id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>
        <strong>Brand:</strong> {product.brand}
      </p>
      <p>
        <strong>Price:</strong> ${product.price}
      </p>
      <p>
        <strong>Quantity:</strong> {product.quantity}
      </p>
    </div>
  );
};

export default ProductDetailsPage;
