import React from "react";
import Image from "next/image";

function FutureShoppingImage() {
  return (
    <div className="w-[400px]">
      <div className="max-w-[600px] h-[450px] overflow-hidden mx-auto">
        <Image
          src="/images/image1.jpeg"
          alt="Main product"
          layout="responsive"
          width={600}
          height={300}
        />
      </div>
    </div>
  );
}

export default FutureShoppingImage;
