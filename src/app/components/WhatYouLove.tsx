


import React from "react";
import Image from "next/image";

function WhatYouLove() {
  return (
    <div className="lg:mx-8 flex justify-center"> 
      <div className="mt-32 flex flex-col items-start space-y-6 w-full max-w-[1100px]"> 
        <div className="text-left"> 
          <p className="font-bold text-xs text-[#4D4D4D]">
            Shop Smarter, Live Better!
          </p>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            Find What You Love
          </h2>
        </div>

        <div className="flex gap-10"> 
          <div className="w-10/12">
            <div className="w-full h-[260px] overflow-hidden rounded-lg">
              <Image
                src="/images/image.jpg"
                alt="Latest in Electronics"
                layout="responsive"
                width={400}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">Electronics on Sale</h2>
            <p className="text-gray-500 text-xs">Discounts, New Releases</p>
          </div>

          <div className="">
            <div className="w-full h-[260px] overflow-hidden rounded-lg">
              <Image
                src="/images/image9.jpeg"
                alt="Latest in Electronics"
                layout="responsive"
                width={400}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">Fashion for Everyone</h2>
            <p className="text-gray-500 text-xs">Men's, Women's, Kids'</p>
          </div>
        </div>




        <div className="flex gap-10"> 
          <div className="w-1/2">
            <div className="w-full h-[260px] overflow-hidden rounded-lg">
              <Image
                src="/images/image10.jpg"
                alt="Latest in Electronics"
                layout="responsive"
                width={400}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">Electronics on Sale</h2>
            <p className="text-gray-500 text-xs">Discounts, New Releases</p>
          </div>

          <div className="w-1/2">
            <div className="w-full h-[260px] overflow-hidden rounded-lg">
              <Image
                src="/images/image312.jpeg"
                alt="Latest in Electronics"
                layout="responsive"
                width={400}
                height={260}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-2 text-lg font-semibold">Fashion for Everyone</h2>
            <p className="text-gray-500 text-xs">Men's, Women's, Kids'</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatYouLove;



// components/WhatYouLove.js

// import React from "react";
// import CategoryCard from "@/app/components/shareComponents/CategoryCard";

// function WhatYouLove() {
//   const categories = [
//     {
//       imageSrc: "/images/image.jpg",
//       title: "Electronics on Sale",
//       description: "Discounts, New Releases",
//     },
//     {
//       imageSrc: "/images/image9.jpeg",
//       title: "Fashion for Everyone",
//       description: "Men's, Women's, Kids'",
//     },
//     {
//       imageSrc: "/images/image10.jpg",
//       title: "Home Essentials",
//       description: "Furniture, Decor, Appliances",
//     },
//     {
//       imageSrc: "/images/image312.jpeg",
//       title: "Outdoor and Sports",
//       description: "Adventure Gear, Equipment",
//     },
//   ];

//   return (
//     <div className="lg:mx-8 flex justify-center">
//       <div className="mt-32 flex flex-col items-start space-y-6 w-full max-w-[1100px]">
//         <div className="text-left">
//           <p className="font-bold text-xs text-[#4D4D4D]">
//             Shop Smarter, Live Better!
//           </p>
//           <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
//             Find What You Love
//           </h2>
//         </div>

//         <div className="flex gap-10">
//           {categories.slice(0, 2).map((category, index) => (
//             <div key={index} className="w-10/12">
//               <CategoryCard {...category} />
//             </div>
//           ))}
//         </div>

//         <div className="flex gap-10">
//           {categories.slice(2, 4).map((category, index) => (
//             <div key={index} className="w-1/2">
//               <CategoryCard {...category} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatYouLove;








 