import React from "react";
import Image from "next/image";

function UserAvatars() {
  const avatars = [
    { src: "/images/round1.png", alt: "User 1" },
    { src: "/images/round2.png", alt: "User 2" },
    { src: "/images/round3.png", alt: "User 3" },
  ];

  return (
    <div className="flex mt-4 -space-x-2">
      {avatars.map((avatar, index) => (
        <div
          key={index}
          className="w-9 h-9 overflow-hidden rounded-full border-2 border-white"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            layout="responsive"
            width={36}
            height={36}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export default UserAvatars;
