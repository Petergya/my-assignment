// import React from "react";

// function Customers() {
//   return (

// <div className="flex justify-center gap-x-8 mt-24">
//   <div className="border-2 bg-[#FCFCFC] rounded-lg px-16 text-left p-6 min-w-[341px]">
//     <p className="text-xs">Over 50,000 happy customers</p>
//     <div>
//       <h1 className="text-2xl font-bold mt-2">78,513</h1>
//     </div>
//   </div>

//   <div className="border-2 bg-[#FCFCFC] rounded-lg px-16 text-left p-6 min-w-[341px]">
//     <p className="text-xs">85% customer satisfaction rate</p>
//     <h1 className="text-2xl font-bold mt-2">99%</h1>
//   </div>

//   <div className="border-2 bg-[#FCFCFC] rounded-lg px-16 text-left p-6 min-w-[341px]">
//     <p className="text-xs">More than 2 million products sold</p>
//     <h1 className="text-2xl font-bold mt-2">5.5 million</h1>
//   </div>
// </div>

  
//   );
// }



import React from "react";
import StatCard from "./CustomerCard";

function Customers() {
  const stats = [
    { title: "Over 50,000 happy customers", value: "78,513" },
    { title: "85% customer satisfaction rate", value: "99%" },
    { title: "More than 2 million products sold", value: "5.5 million" },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mt-12 md:mt-24 px-4 max-w-full overflow-x-hidden">
      {stats.map((stat, index) => (
        <StatCard key={index} title={stat.title} value={stat.value} />
      ))}
    </div>
  );
}

export default Customers;


