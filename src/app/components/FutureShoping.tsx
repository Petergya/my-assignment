
// import React from "react";
// import TitleSection from "./TitleSection";
// import ActionButtons from "./ActionButtons";
// import UserAvatars from "./UserAvatars";
// import CommunityMessage from "./CommunityMessage";
// import MainImage from "./MainImage";

// function FutureShopping() {
//   return (
//     <div className="w-full max-w-[100vw] overflow-hidden px-4 lg:px-8 flex flex-col lg:flex-row justify-center lg:gap-x-8 mt-32">
//       <div className="flex flex-col items-center lg:items-start space-y-6"> 
//         <TitleSection />
//         <ActionButtons />
//         <div className="flex gap-x-4 items-center">
//           <UserAvatars />
//           <CommunityMessage />
//         </div>
//       </div>
//       <div className="w-full lg:w-auto flex justify-center mt-8 lg:mt-0">
//         <div className="w-full max-w-[200%] h-[400px]">
//           <MainImage />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FutureShopping;


// import React from "react";
// import TitleSection from "./TitleSection";
// import ActionButtons from "./ActionButtons";
// import UserAvatars from "./UserAvatars";
// import CommunityMessage from "./CommunityMessage";
// import MainImage from "./MainImage";

// function FutureShopping() {
//   return (
//     <div className="w-full max-w-[100vw] overflow-hidden px-12 lg:px-16 flex flex-col lg:flex-row justify-center lg:gap-x-32 mt-32">
//       {/* Content section */}
//       <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6">
//         <TitleSection />
//         <ActionButtons />
//         <div className="flex gap-x-4 items-center">
//           <UserAvatars />
//           <CommunityMessage />
//         </div>
//       </div>

//       {/* Image section */}
//       <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
//         <div className="w-full max-w-full h-auto">
//           <MainImage />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FutureShopping;

import React from "react";
import TitleSection from "./TitleSection";
import ActionButtons from "./ActionButtons";
import UserAvatars from "./UserAvatars";
import CommunityMessage from "./CommunityMessage";
import MainImage from "./MainImage";

function FutureShopping() {
  return (
    <div className="w-full max-w-[100vw] overflow-hidden px-12 lg:px-16 flex flex-col lg:flex-row items-center lg:items-start justify-center lg:gap-x-32">
      {/* Content section */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start space-y-6 lg:self-center">
        <TitleSection />
        <ActionButtons />
        <div className="flex gap-x-4 items-center">
          <UserAvatars />
          <CommunityMessage />
        </div>
      </div>

      {/* Image section */}
      <div className="w-full lg:w-1/2 flex justify-center mt-8 lg:mt-24">
        <div className="w-full max-w-full h-auto">
          <MainImage />
        </div>
      </div>
    </div>
  );
}

export default FutureShopping;
