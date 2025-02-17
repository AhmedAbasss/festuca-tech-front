"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { IRootState } from "@/store";
import { useSelector } from "react-redux";

const CategorySlider = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const isRtl = themeConfig.rtlClass === "rtl";

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rtl: isRtl,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: true,
    adaptiveHeight: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1300, // Large screens
        settings: { slidesToShow: 5 },
      },
      {
        breakpoint: 1200, // Large screens
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 992, // Medium screens
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // Mobile
        settings: { slidesToShow: 2 },
      },
    ],
    customPaging: () => <div className="bg-gray-400/45 hidden h-[6px] md:h-[12px] w-full hover:bg-primary transition-colors duration-300"></div>,
  };

  const categories = [
    { id: 1, name: "Vegetables", imgSrc: "assets/images/category1.svg", bgColor: "#fef1f1", items: 485 },
    { id: 2, name: "Fruits", imgSrc: "assets/images/category1.svg", bgColor: "#e1fcf2", items: 291 },
    { id: 3, name: "Cold Drinks", imgSrc: "assets/images/category1.svg", bgColor: "#f4f1fe", items: 49 },
    { id: 4, name: "Bakery", imgSrc: "assets/images/category1.svg", bgColor: "#fbf9e4", items: 8 },
    { id: 5, name: "Dairy", imgSrc: "assets/images/category1.svg", bgColor: "#e8f0fe", items: 76 },
    { id: 6, name: "Meat", imgSrc: "assets/images/category1.svg", bgColor: "#f9e9e1", items: 120 },
    { id: 7, name: "Seafood", imgSrc: "assets/images/category1.svg", bgColor: "#dff6ff", items: 60 },
    { id: 8, name: "Snacks", imgSrc: "assets/images/category1.svg", bgColor: "#fff3e6", items: 200 },
  ];

  return (
    <Slider {...settings} className="bb-category-slider">
      {categories.map((category) => (
        <div key={category.id} className="p-[8px] md:p-[15px]">
          <Link href="shop-left-sidebar-col-3.html">
            <div
              className="bb-category-box py-[20px] rounded-[20px] flex flex-col items-center text-center"
              style={{ backgroundColor: category.bgColor }}
              data-aos="flip-left"
              data-aos-duration="1000">
              <div className="category-image mb-[12px]">
                <img src={category.imgSrc} alt={category.name} className="w-[50px] h-[50px] md:w-[65px] md:h-[65px]" />
              </div>
              <div className="category-sub-contact">
                <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                  <Link href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                    {category.name}
                  </Link>
                </h5>
                <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">{category.items} items</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </Slider>
  );
};

export const Categories = () => {
  return (
    <section className="section-category pt-[50px] md:pt-[35px] mb-[24px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <CategorySlider />
          </div>
        </div>
      </div>
    </section>
  );
};
