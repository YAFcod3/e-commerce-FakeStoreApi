"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  product: Product;
  fill?: boolean;
};

function ProductImage({ product, fill }: Props) {
  const [loading, setLoading] = useState(false);

  return (
    <>
      {fill ? (
        <Image
        onLoad={() => setLoading(false)}
          src={product.image}
          fill
          alt={product.title}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${
          loading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        } `}
        />
      ) : (
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 
        ${
          loading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        } `}
        onLoad={() => setLoading(false)}
        />
      )}
    </>
  );
}

export default ProductImage;
