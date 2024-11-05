// components/ProductItem.tsx
import React from "react";
import Image from "next/image";

interface ProductItemProps {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ src, alt, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-full h-[260px] overflow-hidden rounded-lg">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={400}
          height={260}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="mt-2 text-lg font-semibold">{title}</h2>
      <p className="text-gray-500 text-xs">{description}</p>
    </div>
  );
};

export default ProductItem;



