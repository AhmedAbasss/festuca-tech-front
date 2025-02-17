"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IRootState } from "@/store";
import { useSelector } from "react-redux";

export const Section1 = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const isRtl = themeConfig.rtlClass === "rtl" ? true : false;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    rtl: isRtl,
    nextArrow: <></>,
    prevArrow: <></>,
    autoplay: false,
    adaptiveHeight: true,
    pauseOnHover: true,

    customPaging: (_: any) => (
      <div
        style={{
          transform: "skew(340deg)",
        }}
        className="bg-gray-400/45 h-[6px] md:h-[12px] w-full hover:bg-primary transition-colors duration-300 "></div>
    ),
  };

  return (
    <section className="section-hero mb-[50px] max-[1199px]:mb-[35px] py-[50px] relative bg-secondary-light dark:bg-secondary-dark overflow-hidden">
      <div className="bb-social-follow absolute left-[20px] bottom-[30px] max-[1250px]:hidden">
        <ul className="inner-links">
          {["Fb", "Li", "Dr", "In"].map((item) => (
            <li key={item} className="p-[6px] rotate-[270deg]">
              <a
                href="javascript:void(0)"
                className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <Slider {...settings}>
              {[
                {
                  title: "Healthy",
                  subtitle: "Flat 30% Off",
                  image: "assets/images/banner.jpg",
                },
                {
                  title: "Warm",
                  subtitle: "Flat 20% Off",
                  image: "assets/images/banner.jpg",
                },
                {
                  title: "Organic",
                  subtitle: "Flat 30% Off",
                  image: "assets/images/banner.jpg",
                },
              ].map((slide, index) => (
                <div key={index} className="!flex flex-wrap w-full mb-[-24px]">
                  <div className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div
                      className="h-full flex flex-col items-start justify-center max-[991px]:items-center"
                      // className="hero-contact h-full flex flex-col items-start justify-center max-[991px]:items-center"
                    >
                      <p className="mb-[20px] font-Poppins text-[18px] text-[#777] font-light leading-[28px] tracking-[0.03rem] max-[1199px]:mb-[10px] max-[1199px]:text-[16px]">
                        {slide.subtitle}
                      </p>
                      <h1 className="mb-[20px] font-quicksand text-[50px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[1199px]:mb-[10px]">
                        Explore <span className="relative text-[#6c7fd8]">{slide.title}</span>
                        <br />& Fresh Fruits
                      </h1>
                      <a
                        href="shop-left-sidebar-col-3.html"
                        className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]">
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px]">
                    <div
                      // className="hero-image pr-[50px] relative flex justify-center"
                      className="pr-[50px] relative flex justify-center">
                      <img src={slide.image} alt="hero" className="w-full pb-[50px] opacity-[1]" />
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="bb-scroll-Page absolute right-[-15px] bottom-[75px] rotate-[270deg] max-[575px]:hidden">
        <span className="scroll-bar transition-all duration-[0.3s] ease-in-out relative max-[1250px]:hidden">
          <a href="javascript:void(0)" className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium leading-[28px] tracking-[0.03rem] text-[#686e7d]">
            Scroll Page
          </a>
        </span>
      </div>
    </section>
  );
};
