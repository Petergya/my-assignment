



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


