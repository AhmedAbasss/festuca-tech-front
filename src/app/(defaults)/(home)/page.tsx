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

// export interface IProduct extends IEntity {
//   title: string;
//   description: string;
//   shortDescription: string;
//   systemCategoryId: number;
//   systemCategoryTitle: string;
//   storeCategoryId: number;
//   storeCategoryTitle: string;
//   imageCode: string;
//   brand: null | string;
//   origin: null | string;
//   manufacturer: null | string;
//   crId: number;
//   crName: string;
//   priceTypeId: number;
//   priceName: string;
//   price: number;
//   ePrice: number;
//   discount: number;
//   eDiscount: number;
//   discountStartAt: string;
//   discountEndAt: null | string;
//   rate: number;
//   rateCount: number;
//   commentCount: number;
//   wishlistCount: number;
//   isPublished: boolean;
//   publishAt: string;
//   storeId: number;
//   storeName: string;
//   storeImageCode: string;
//   pin?: string | null;
//   tags: string[];
//   variants: IVariants[];
//   products: IProducts[];
//   productCount: number;
//   availableProductCount: number;
//   isAvailable: boolean;
//   notifyQty: number;
//   purchasedQty: number;
//   salesQty: number;
//   stockQty: number;
//   orderQty: number;
//   cartQty: number;
//   orderCount: number;
//   offerCount: number;
//   cartCount: number;
//   shopperActivity: IShopperActivity;
//   isDisabled: boolean;
//   disableAt: null | string;
// }

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
      {/* {data?.map((item, index) => {
        return <div key={index}>{item.dataType == DataType.Product && <RowItem data={item.data as IProduct[]} />}</div>;
      })} */}
      {/* <RowItem data={item.data as IProduct[]} /> */}
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
