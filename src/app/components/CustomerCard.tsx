
import React from "react";

interface StatCardProps {
  title: string;
  value: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value }) => {
  return (
    <div className="border-2 bg-[#FCFCFC] rounded-lg px-8 md:px-16 text-left p-6 min-w-[280px] md:min-w-[341px]">
      <p className="text-xs text-[#4D4D4D]">{title}</p>
      <h1 className="text-2xl font-bold mt-2">{value}</h1>
    </div>
  );
};

export default StatCard;
