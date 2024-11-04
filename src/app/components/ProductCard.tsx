
import React from "react";
import { IconType } from "react-icons";

interface ProductCardProps {
  Icon: IconType;
  title: string;
  description: string;
  actionText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ Icon, title, description, actionText }) => {
  return (
    <div className="flex flex-col items-center text-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
      <div className="flex items-center justify-center w-12 h-12 border border-gray-300 rounded-lg p-2 mb-2">
        <Icon size={24} className="text-black" />
      </div>
      <h2 className="text-xs font-bold mt-2 w-3/4">{title}</h2>
      <p className="text-xs mt-2 w-4/5">{description}</p>
      <p className="text-xs mt-2 font-bold text-[#EF2AF2]">{actionText}</p>
    </div>
  );
};

export default ProductCard;
