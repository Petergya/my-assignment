

import React from "react";
import Image from "next/image";

function MainImage() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-[400px] h-auto overflow-hidden">
        <Image
          src="/images/image1.jpeg"
          alt="Main product image"
          layout="intrinsic"        
          width={400}               
          height={250}              
          className="w-[300px] h-auto object-cover"  
        />
      </div>
    </div>
  );
}

export default MainImage;


