// // components/CategoryCard.js

// import React from "react";
// import Image from "next/image";

// const CategoryCard = ({ imageSrc, title, description }) => (
//   <div className="w-full h-[260px] overflow-hidden rounded-lg">
//     <Image
//       src={imageSrc}
//       alt={title}
//       layout="responsive"
//       width={400}
//       height={260}
//       className="w-full h-full object-cover"
//     />
//     <h2 className="mt-2 text-lg font-semibold">{title}</h2>
//     <p className="text-gray-500 text-xs">{description}</p>
//   </div>
// );

// export default CategoryCard;


// components/CategoryCard.tsx

import React from "react";
import Image from "next/image";

interface CategoryCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, title, description }) => (
  <div className="w-full h-[260px] overflow-hidden rounded-lg">
    <Image
      src={imageSrc}
      alt={title}
      layout="responsive"
      width={400}
      height={260}
      className="w-full h-full object-cover"
    />
    <h2 className="mt-2 text-lg font-semibold">{title}</h2>
    <p className="text-gray-500 text-xs">{description}</p>
  </div>
);

export default CategoryCard;



