


// import React from "react";
// import Image from "next/image";

// function ProductCategories() {
//   return (
//     <div className="">
//       <div className="mt-32 flex flex-col items-center text-center space-y-6">
//         <div>
//           <p className="font-bold text-xs text-[#4D4D4D]">
//             Discover a World of Shopping at Your Fingertips!
//           </p>
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
//             Explore Our Diverse Product Categories
//           </h2>
//         </div>

       
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">
          
        
//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image4.jpeg"
//                 alt="Latest in Electronics"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Latest in Electronics</h2>
//             <p className="text-gray-500 text-xs">Smartphones, Laptops, Gadgets</p>
//           </div>

//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image3.jpeg"
//                 alt="Trendy Fashion Finds"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Trendy Fashion Finds</h2>
//             <p className="text-gray-500 text-xs">Clothing, Accessories, Footwear</p>
//           </div>

//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image4.jpeg"
//                 alt="Stylish Home Goods"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Stylish Home Goods</h2>
//             <p className="text-gray-500 text-xs">Furniture, Decor, Appliances</p>
//           </div>

//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image3.jpeg"
//                 alt="Fitness & Health"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Fitness & Health</h2>
//             <p className="text-gray-500 text-xs">Gear, Supplements, Apparel</p>
//           </div>

//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image4.jpeg"
//                 alt="Kids & Babies"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Kids & Babies</h2>
//             <p className="text-gray-500 text-xs">Toys, Clothing, Essentials</p>
//           </div>

//           <div className="text-center">
//             <div className="w-full h-[260px] overflow-hidden rounded-lg">
//               <Image
//                 src="/images/image7.jpeg"
//                 alt="Gifts & Gadgets"
//                 layout="responsive"
//                 width={400}
//                 height={260}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h2 className="mt-2 text-lg font-semibold">Gifts & Gadgets</h2>
//             <p className="text-gray-500 text-xs">Unique Finds, Fun Items</p>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductCategories;



// components/ProductCategories.js
import React from "react";
import ProductHeader from "@/app/components/shareComponents/ProductHeader";
import ProductItem from "@/app/components/shareComponents/ProductItem";

const ProductCategories = () => {
  const products = [
    {
      src: "/images/image4.jpeg",
      alt: "Latest in Electronics",
      title: "Latest in Electronics",
      description: "Smartphones, Laptops, Gadgets",
    },
    {
      src: "/images/image3.jpeg",
      alt: "Trendy Fashion Finds",
      title: "Trendy Fashion Finds",
      description: "Clothing, Accessories, Footwear",
    },
    {
      src: "/images/image4.jpeg",
      alt: "Stylish Home Goods",
      title: "Stylish Home Goods",
      description: "Furniture, Decor, Appliances",
    },
    {
      src: "/images/image3.jpeg",
      alt: "Fitness & Health",
      title: "Fitness & Health",
      description: "Gear, Supplements, Apparel",
    },
    {
      src: "/images/image4.jpeg",
      alt: "Kids & Babies",
      title: "Kids & Babies",
      description: "Toys, Clothing, Essentials",
    },
    {
      src: "/images/imagee3.jpg",
      alt: "Gifts & Gadgets",
      title: "Gifts & Gadgets",
      description: "Unique Finds, Fun Items",
    },
  ];

  return (
    <div className="mt-32 flex flex-col items-center text-center space-y-6">
      <ProductHeader />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">
        {products.map((product, index) => (
          <ProductItem
            key={index}
            src={product.src}
            alt={product.alt}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;


