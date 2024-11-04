import React from "react";
import TitleSection from "./TitleSection";
import ActionButtons from "./ActionButtons";
import UserAvatars from "./UserAvatars";
import CommunityMessage from "./CommunityMessage";
import MainImage from "./MainImage";

function FutureShopping() {
  return (
    <div className="w-full flex justify-center gap-x-36 mt-32 mx-1">
      <div>
        <TitleSection />
        <ActionButtons />
        <div className="flex gap-x-4 mt-10 items-center">
          <UserAvatars />
          <CommunityMessage />
        </div>
      </div>
      <MainImage />
    </div>
  );
}

export default FutureShopping;
