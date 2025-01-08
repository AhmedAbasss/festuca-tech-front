import { Metadata } from "next";
import React from "react";
import { Home } from "./_components/_Home";
import { Categories } from "./_components/_categories";
import { DealSection } from "./_components/_DealSection";
import { DealSection2 } from "./_components/_DealSection2";
import { Features } from "./_components/Features";
// import { About } from "./_components/_About";
// import { OurService } from "./_components/OurService";
// import GeneralTrade from "./_components/_GeneralTrade";
// import Contracting from "./_components/_Contracting";
// import CommercialAgencies from "./_components/_CommercialAgencies";
// import { ContactUs } from "./_components/ContactUs/_ContactUs";

export const metadata: Metadata = {
  title: "Home",
};
const Page = async () => {
  return (
    <div className="overflow-hidden">
      {/* <Home /> */}
      {/* <Categories /> */}
      {/* <DealSection /> */}
      <DealSection2 />
      <Features />
      {/* <About />
      <OurService />
      <GeneralTrade />
      <Contracting />
      <CommercialAgencies />
      <ContactUs /> */}
    </div>
  );
};

export default Page;
