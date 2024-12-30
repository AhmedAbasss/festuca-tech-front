import { Metadata } from "next";
import React from "react";
import { Home } from "./_components/_Home";
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
