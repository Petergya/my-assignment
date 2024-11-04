import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-screen py-10 lg:py-16 bg-[url('/images/hero.jpeg')] bg-cover bg-center">
      {/* Dark overlay for the background image */}
      <div className="absolute inset-0 bg-black opacity-80"></div> {/* Increased opacity for a darker effect */}

      {/* Sidebar */}
      <div className="absolute top-0 left-0 h-full w-64 bg-black p-6  flex-col justify-center hidden md:block"> {/* Fixed width sidebar */}
        {/* You can add sidebar content here if needed */}
      </div>

      {/* Main Content */}
      <div className="relative w-2/3 container md:mx-10  mx-4 flex flex-col-reverse lg:flex-row md:items-center lg:gap-10 justify-start items-start h-full lg:px-0 py-[2rem] lg:py-8">
  <div className="w-full  text-white flex flex-col justify-start items-start"> {/* Align items to the start */}
    <h1 className="font-semibold text-2xl lg:text-4xl leading-normal text-left ">
      Discover Your Next Favorite Product!
    </h1>

    <div className="flex flex-col lg:flex-row space-y-4 lg:space-x-4 lg:space-y-0 mt-6 lg:mt-10 justify-start">
      <a href="/explore" className="inline-block">
        <button className="mt-10 text-black font-semibold py-3 px-4 w-full md:w-auto bg-[url('/images/Background.png')] bg-cover bg-center rounded">
          Sign Up for Free
        </button>
      </a>
    </div>
  </div>

  <div className="w-full lg:w-1/2 mt-6 sm:mt-12"></div>
</div>

    </section>
  );
}

export default Hero;
