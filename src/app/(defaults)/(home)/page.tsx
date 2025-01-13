import { Metadata } from "next";
import React from "react";
import { DealSection2 } from "./_components/_DealSection2";
import { Features } from "./_components/Features";
import { DataType, IProduct } from "./product/type";
import RowItem from "./product/RowItem";
import Link from "next/link";

const data: IProduct[] = [
  {
    id: 17,
    createAt: "2024-12-02T23:36:24.802766",
    updateAt: "2025-01-02T22:31:30.192264",
    isRemoved: false,
    removeAt: null,
    title: "mac book 14 inc pro",
    description:
      '<p><span style="color: rgb(236, 236, 236); background-color: rgb(33, 33, 33);">Elevate your productivity with the&nbsp;MacBook Pro 14-inch. Featuring the groundbreaking&nbsp;M1 Pro or M1 Max chip, a&nbsp;Liquid Retina XDR display, and advanced thermal efficiency, this laptop redefines performance and portability. Ideal for professionals seeking speed, power, and reliability in one sleek package. Order now and experience the future of computing!</span></p>',
    shortDescription: "Elevate your productivity with the MacBook Pro 14-inch. x chip,",
    systemCategoryId: 1,
    systemCategoryTitle: "الالكترونيات",
    storeCategoryId: 15,
    storeCategoryTitle: "اكسسوارات موبايل",
    imageCode: "57fc448e12e047caa2eea1de01ed3cbf",
    brand: "ban",
    origin: null,
    manufacturer: null,
    crId: 1,
    crName: "IQD",
    priceTypeId: 12,
    priceName: "مفرد",
    price: 500000,
    ePrice: 500000,
    discount: 50000,
    eDiscount: 50000,
    discountStartAt: "2025-01-01T00:00:00",
    discountEndAt: "2025-02-01T00:00:00",
    rate: 1,
    rateCount: 1,
    commentCount: 0,
    wishlistCount: 2,
    isPublished: true,
    publishAt: "2024-12-31T21:30:19.316848",
    storeId: 14,
    storeName: "Abbas  ",
    storeImageCode: "51c7464b9c0a44c5b959fc04e13112c5",
    pin: null,
    tags: [],
    variants: [
      {
        key: "color",
        values: [{ value: "black" }, { value: "red" }],
      },
      {
        key: "stoge",
        values: [{ value: "500ssd" }, { value: "1t-ssd" }, { value: "2t-ssd" }],
      },
      {
        key: "Ram",
        values: [{ value: "16" }, { value: "32" }],
      },
    ],
    // products: [],
    products: [
      {
        groupId: 17,
        firstName: "mac book 14 inc pro",
        secondName: "black / 500ssd",
        barcode: null,
        systemCategoryId: 1,
        systemCategoryTitle: "الالكترونيات",
        storeCategoryId: 15,
        storeCategoryTitle: "اكسسوارات موبايل",
        costCrId: 1,
        costCrName: "IQD",
        cost: 5200000,
        hasExpiry: false,
        location: null,
        description: null,
        reminder: null,
        notifyQty: null,
        purchasedQty: 33,
        salesQty: 0,
        stockQty: 33,
        orderQty: 0,
        cartQty: 4,
        orderCount: 0,
        offerCount: 0,
        cartCount: 3,
        wishlistCount: 2,
        rate: 1,
        rateCount: 1,
        commentCount: 0,
        imageCode: "2b3ecc824fc540719935325608c9ae5f",
        pin: null,
        storeId: 14,
        properties: {
          gender: null,
          type: null,
          brand: null,
          origin: null,
          company: null,
          manufacturer: null,
          amount: null,
          dosage: null,
          model: null,
          color: null,
          size: null,
          weight: null,
        },
        variants: [
          {
            key: "Ram",
            values: [{ value: "16" }, { value: "32" }],
          },
        ],
        attributes: [],
        prices: [
          {
            priceTypeId: 12,
            priceTypeName: "مفرد",
            crId: 1,
            crName: "IQD",
            price: 5200000,
            ePrice: 5200000,
            profitPercent: 0,
            minProfitPercent: 0,
            autoChangePrice: false,
            isEComPrice: true,
            discount: 0,
            eDiscount: 0,
            discountStartAt: null,
            discountEndAt: null,
            hasDiscount: false,
            isDiscountActive: false,
          },
        ],
        stocks: [],
        activePriceTypeIds: [12],
        productGroupPriceTypeId: 12,
        isAvailable: false,
        isDisabled: false,
        disableAt: null,
        id: 43,
        createAt: "2024-12-02T23:36:24.810064",
        updateAt: "2024-12-23T22:16:45.768061",
        isRemoved: true,
        removeAt: "2025-01-02T22:31:30.199367",
      },
    ],
    productCount: 12,
    availableProductCount: 4,
    isAvailable: true,
    notifyQty: 0,
    purchasedQty: 72,
    salesQty: 0,
    stockQty: 72,
    orderQty: 0,
    cartQty: 1,
    orderCount: 0,
    offerCount: 0,
    cartCount: 1,
    shopperActivity: {
      inCart: true,
      inWishlist: false,
      isRated: false,
      isReviewed: false,
      rate: null,
      comment: null,
    },
    isDisabled: false,
    disableAt: null,
  },
  {
    id: 17,
    createAt: "2024-12-02T23:36:24.802766",
    updateAt: "2025-01-02T22:31:30.192264",
    isRemoved: false,
    removeAt: null,
    title: "mac book 14 inc pro",
    description:
      '<p><span style="color: rgb(236, 236, 236); background-color: rgb(33, 33, 33);">Elevate your productivity with the&nbsp;MacBook Pro 14-inch. Featuring the groundbreaking&nbsp;M1 Pro or M1 Max chip, a&nbsp;Liquid Retina XDR display, and advanced thermal efficiency, this laptop redefines performance and portability. Ideal for professionals seeking speed, power, and reliability in one sleek package. Order now and experience the future of computing!</span></p>',
    shortDescription: "Elevate your productivity with the MacBook Pro 14-inch. x chip,",
    systemCategoryId: 1,
    systemCategoryTitle: "الالكترونيات",
    storeCategoryId: 15,
    storeCategoryTitle: "اكسسوارات موبايل",
    imageCode: "57fc448e12e047caa2eea1de01ed3cbf",
    brand: "ban",
    origin: null,
    manufacturer: null,
    crId: 1,
    crName: "IQD",
    priceTypeId: 12,
    priceName: "مفرد",
    price: 500000,
    ePrice: 500000,
    discount: 50000,
    eDiscount: 50000,
    discountStartAt: "2025-01-01T00:00:00",
    discountEndAt: "2025-02-01T00:00:00",
    rate: 1,
    rateCount: 1,
    commentCount: 0,
    wishlistCount: 2,
    isPublished: true,
    publishAt: "2024-12-31T21:30:19.316848",
    storeId: 14,
    storeName: "Abbas  ",
    storeImageCode: "51c7464b9c0a44c5b959fc04e13112c5",
    pin: null,
    tags: [],
    variants: [
      {
        key: "color",
        values: [{ value: "black" }, { value: "red" }],
      },
      {
        key: "stoge",
        values: [{ value: "500ssd" }, { value: "1t-ssd" }, { value: "2t-ssd" }],
      },
      {
        key: "Ram",
        values: [{ value: "16" }, { value: "32" }],
      },
    ],
    // products: [],
    products: [
      {
        groupId: 17,
        firstName: "mac book 14 inc pro",
        secondName: "black / 500ssd",
        barcode: null,
        systemCategoryId: 1,
        systemCategoryTitle: "الالكترونيات",
        storeCategoryId: 15,
        storeCategoryTitle: "اكسسوارات موبايل",
        costCrId: 1,
        costCrName: "IQD",
        cost: 5200000,
        hasExpiry: false,
        location: null,
        description: null,
        reminder: null,
        notifyQty: null,
        purchasedQty: 33,
        salesQty: 0,
        stockQty: 33,
        orderQty: 0,
        cartQty: 4,
        orderCount: 0,
        offerCount: 0,
        cartCount: 3,
        wishlistCount: 2,
        rate: 1,
        rateCount: 1,
        commentCount: 0,
        imageCode: "2b3ecc824fc540719935325608c9ae5f",
        pin: null,
        storeId: 14,
        properties: {
          gender: null,
          type: null,
          brand: null,
          origin: null,
          company: null,
          manufacturer: null,
          amount: null,
          dosage: null,
          model: null,
          color: null,
          size: null,
          weight: null,
        },
        variants: [
          {
            key: "Ram",
            values: [{ value: "16" }, { value: "32" }],
          },
        ],
        attributes: [],
        prices: [
          {
            priceTypeId: 12,
            priceTypeName: "مفرد",
            crId: 1,
            crName: "IQD",
            price: 5200000,
            ePrice: 5200000,
            profitPercent: 0,
            minProfitPercent: 0,
            autoChangePrice: false,
            isEComPrice: true,
            discount: 0,
            eDiscount: 0,
            discountStartAt: null,
            discountEndAt: null,
            hasDiscount: false,
            isDiscountActive: false,
          },
        ],
        stocks: [],
        activePriceTypeIds: [12],
        productGroupPriceTypeId: 12,
        isAvailable: false,
        isDisabled: false,
        disableAt: null,
        id: 43,
        createAt: "2024-12-02T23:36:24.810064",
        updateAt: "2024-12-23T22:16:45.768061",
        isRemoved: true,
        removeAt: "2025-01-02T22:31:30.199367",
      },
    ],
    productCount: 12,
    availableProductCount: 4,
    isAvailable: true,
    notifyQty: 0,
    purchasedQty: 72,
    salesQty: 0,
    stockQty: 72,
    orderQty: 0,
    cartQty: 1,
    orderCount: 0,
    offerCount: 0,
    cartCount: 1,
    shopperActivity: {
      inCart: true,
      inWishlist: false,
      isRated: false,
      isReviewed: false,
      rate: null,
      comment: null,
    },
    isDisabled: false,
    disableAt: null,
  },
];

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
      {/* <RowItem data={data as IProduct[]} />  */}

      {/* <About />
      <OurService />
      <GeneralTrade />
      <Contracting />
      <CommercialAgencies />
      <ContactUs /> */}
    </div>
    // <div>
    //   {/* {item.dataType == DataType.Category && (
    //       <CategoryComponent data={item.data as ICategory[]} displayType={item.displayType} displayWay={item.displayWay} title={item.title} />
    //     )} */}

    //   <section className="bg-[#ffffff] section-product-tabs overflow-hidden">
    //     <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
    //       <div className="flex justify-between items-center w-full my-2 px-4">
    //         {/* <h2 className=" font-bold text-[#3d4750]  text-start capitalize leading-[1] tracking-[0.03rem] text-medium md:text-2xl">
    //           50000000 .<span className="text-[#6c7fd8]">{" ("}{item.dataType}{"). "}</span>
    //         </h2>
    //         <Link
    //             className="font-Poppins text-medium font-bold text-[#686e7d] hover:text-primary capitalize leading-[28px] tracking-[0.03rem] flex justify-center items-center"
    //             href={{
    //               pathname: "/product",
    //               query: {
    //                 title: data.title,
    //                 data: JSON.stringify(data.data),
    //                 displayType: data.displayType,
    //                 displayWay: data.id,
    //               },
    //             }}>
    //             <div>المزيد</div>
    //             <ChevronDown className="rotate-90 size-6" />
    //           </Link>*/}
    //       </div>
    //       <RowItem data={data as IProduct[]} />
    //     </div>
    //   </section>
    // </div>
  );
};

export default Page;
