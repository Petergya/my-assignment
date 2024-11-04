// import React from "react";
// import { IoFlashSharp } from "react-icons/io5";
// import { BsStars } from "react-icons/bs";
// import { IoIosLock } from "react-icons/io";
// import { FaHeart } from "react-icons/fa";


// function Products() {
//   return (
//     <div className="mt-32  ">
//        <div className="flex flex-col items-center justify-center text-center gap-2">
//   <p className="font-bold text-xs text-[#4D4D4D]">Shop the Best Deals</p>
//   <h2 className="text-xl font-bold ">Discover Your Perfect Product Today!</h2>
// </div>

        
// <div className="flex justify-center gap-x-6 mt-10">


// <div className="w-1/6 flex flex-col items-center text-center ">
//   <div>
    
// <IoFlashSharp size={32} className="text-black border border-gray-300 rounded-xl p-1" />

//   </div>
//   <h2 className="text-xs mt-2 font-bold">Electronics Hub</h2>
//   <p className="text-xs mt-2">Explore cutting-edge technology and gadgets that enhance your lifestyle.</p>
//   <p className="text-xs mt-2 font-bold text-[#EF2AF2]">Shop Electronics Now</p>
// </div>


// <div className="w-1/6 flex flex-col items-center text-center">
//   <div>
//   <BsStars size={32} className="text-black border border-gray-300 rounded-xl p-1" />
//   </div>
//   <h2 className="text-xs mt-2 font-bold">Home Essentials</h2>
//   <p className="text-xs mt-2">Transform your living space with our high-quality home goods that combine functionality and design.</p>
//   <p className="text-xs mt-2 font-bold text-[#EF2AF2]">Explore Home Goods</p>
// </div>


// <div className="w-1/6 flex flex-col items-center text-center">
//   <div>
//   <IoIosLock  size={32} className="text-black border border-gray-300 rounded-xl p-1" />
//   </div>
//   <h2 className="text-xs mt-2 font-bold">Home Essentials</h2>
//   <p className="text-xs mt-2">Transform your living space with our high-quality home goods that combine functionality and design.</p>
//   <p className="text-xs mt-2 font-bold text-[#EF2AF2]">Explore Home Goods</p>
// </div>


// <div className="w-1/6 flex flex-col items-center text-center">
//   <div>
//   <FaHeart  size={32} className="text-black border border-gray-300 rounded-xl p-1"/>
//   </div>
//   <h2 className="text-xs mt-2 font-bold">Exclusive Offers</h2>
//   <p className="text-xs mt-2">Don't miss out on our limited-time promotions that guarantee unbeatable prices.</p>
//   <p className="text-xs mt-2 font-bold text-[#EF2AF2]">View All Promotions</p>
// </div>


      
//     </div>
//     </div>
    
//   );
// }

// export default Products;



// Products.js
import React from "react";
import { IoFlashSharp } from "react-icons/io5";
import { BsStars } from "react-icons/bs";
import { IoIosLock } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import ProductCard from "./ProductCard";

function Products() {
  const productData = [
    {
      Icon: IoFlashSharp,
      title: "Electronics Hub",
      description: "Explore cutting-edge technology and gadgets that enhance your lifestyle.",
      actionText: "Shop Electronics Now",
    },
    {
      Icon: BsStars,
      title: "Fashion Forward",
      description: "Step into style with our trendy clothing and accessories curated just for you.",
      actionText: "Browse Fashion Trends",
    },
    {
      Icon: IoIosLock,
      title: "Home Essentials",
      description: "Transform your living space with our high-quality home goods that combine functionality and design.",
      actionText: "Explore Home Goods",
    },
    {
      Icon: FaHeart,
      title: "Exclusive Offers",
      description: "Don't miss out on our limited-time promotions with unbeatable prices.",
      actionText: "View All Promotions",
    },
  ];

  return (
    <div className="mt-32">
      <div className="flex flex-col items-center text-center">
        <p className="font-bold text-xs text-[#4D4D4D]">Shop the Best Deals</p>
        <h2 className="text-xl font-bold">Discover Your Perfect Product Today!</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-y-8 mt-10">
        {productData.map((product, index) => (
          <ProductCard
            key={index}
            Icon={product.Icon}
            title={product.title}
            description={product.description}
            actionText={product.actionText}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;


