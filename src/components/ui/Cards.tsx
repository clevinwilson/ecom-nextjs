import { Product } from "@/domains/products/type";
import Image from "next/image";
import React from "react";
import Link from "next/link";

function Cards({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-10">
        <Image
          className="rounded-t-lg"
          src="/profile.png"
          alt=""
          width={40}
          height={40}
        />
        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {product.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {product.price}
          </p>
          Buy now
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </div>
      </div>
    </Link>
  );
}

export default Cards;
