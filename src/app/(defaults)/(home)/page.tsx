import React from "react";
import { DealSection2 } from "./_components/_DealSection2";
import { Features } from "./_components/Features";
import { DealSection } from "./_components/_DealSection";
import { Categories } from "./_components/_categories";

const Page = async () => {
  return (
    <div className="overflow-hidden">
      {/* <Home /> */}
      <Categories />
      <DealSection2 />
      <DealSection />
      <Features />
      {/* <RowItem data={data as IProduct[]} />  */}

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
