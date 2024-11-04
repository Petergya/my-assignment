

import ProductCategories from "@/app/components/ProductCategories";
import Customers from "@/app/components/Customers";
import Destination from "@/app/components/Destination";
import Hero from "@/app/components/Hero";
import FutureShoping from "@/app/components/FutureShoping";
import WhatYouLove from "@/app/components/WhatYouLove";
import Products from "@/app/components/Products";



export default function Home() {
  return (
    <>
    <Hero/>
    <Customers/>
    <Products/>
    <FutureShoping/>
    <ProductCategories/>
    <WhatYouLove/>
    <Destination/>
   </>
  );
}