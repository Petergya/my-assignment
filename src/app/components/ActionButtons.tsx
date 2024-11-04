import React from "react";

function ActionButtons() {
  return (
    <div className="flex flex-col lg:flex-row space-y-2 lg:space-x-4 lg:space-y-0 mt-6 lg:mt-10 justify-center lg:justify-start">
      <a href="/" className="inline-block">
        <button className="bg-white font-semibold py-1 px-4 w-full md:w-auto border-2 rounded-md">
          Discover More Deals
        </button>
      </a>
      <a href="/" className="inline-block">
        <button className="bg-[#EF2A82] font-semibold text-white border-2 border-primary py-1 px-8 w-full rounded-md">
          Start Shopping Today
        </button>
      </a>
    </div>
  );
}

export default ActionButtons;
