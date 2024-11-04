
import React from "react";
import Image from "next/image";

function MainImage() {
  return (
    <div className="w-full sm:w-[400px] flex justify-center">
      <div className="max-w-full h-auto overflow-hidden mx-auto">
        <Image
          src="/images/image1.jpeg"
          alt="Main product image"
          layout="responsive"
          width={600}
          height={300}
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
}

export default MainImage;

