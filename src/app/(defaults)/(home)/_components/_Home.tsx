"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { RevealWrapper } from "next-reveal";
import { getTranslation } from "../../../../../ni18n/i18n";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
export const Home = () => {
  // const el = useRef(null);
  // const { t }: any = getTranslation();
  // useEffect(() => {
  //   const typed = new Typed(el.current, {
  //     strings: [t(`appName`)],
  //     loop: true,
  //     typeSpeed: 50,
  //     backSpeed: 100,
  //     backDelay: 1000,
  //   });

  //   return () => {
  //     // Destroy Typed instance during cleanup to stop animation
  //     typed.destroy();
  //   };
  // }, [t]);

  // const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  // const isRtl = themeConfig.rtlClass === "rtl" ? true : false;
  // const isDark = themeConfig.isDarkMode;
  return (
    // <div
    //   id="home"
    //   style={{
    //     ...(isDark && {
    //       background: "linear-gradient(46deg, #181B27 23.39%, rgba(67, 2, 87, 0.24) 41.68%, rgba(22, 25, 37, 0.00) 72.51%)",
    //     }),
    //   }}>
    //   <div className="p-8 rounded-md">
    //     <div
    //       style={{
    //         // backgroundColor: '#0A0A0A',
    //         backgroundImage: `url(./assets/images/${!isRtl ? "right" : "left"}.svg)`,
    //         backgroundRepeat: "no-repeat",
    //         // backgroundSize:'cover',
    //         backgroundPosition: isRtl ? "left" : " right",
    //         // rotate: '180deg',
    //         width: "100%",
    //         height: "100%",
    //         marginTop: "",
    //       }}
    //       className="w-full md:!h-[calc(100vh-80px)] py-10 max-md:flex max-md:flex-col gap-5  md:grid md:grid-cols-2  md:items-center  ">
    //       <div className="text-[#98430b] max-md:text-center md:text-[70px] text-3xl font-semibold font-['IBM Plex Sans Arabic'] md:leading-[91px] ">
    //         <div
    //           style={{
    //             background: "linear-gradient(180deg, #4792dd 0%, #F65400 100%)",
    //             backgroundClip: "text",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //           }}>
    //           <span ref={el} />
    //         </div>
    //         <div className="relative">
    //           {!isDark ? (
    //             <svg className="absolute inset-y-auto inset-x-[-10px] max-md:hidden" width="605" height="106" viewBox="0 0 605 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path
    //                 d="M0.605911 37.072C-1.31021 23.6432 8.96027 11.5669 22.5225 11.302L579.003 0.429011C591.228 0.190158 601.422 9.72322 602.003 21.9363L604.844 81.6951C605.468 94.8153 594.807 105.698 581.677 105.344L27.1948 90.3806C16.1892 90.0836 7.00146 81.894 5.44628 70.9948L0.605911 37.072Z"
    //                 fill="url(#paint0_linear_2049_10759)"
    //               />
    //               <defs>
    //                 <linearGradient id="paint0_linear_2049_10759" x1="301.5" y1="8.16966" x2="301.5" y2="98.9438" gradientUnits="userSpaceOnUse">
    //                   <stop stop-color="#F7F7F7" />
    //                   <stop offset="1" stop-color="#E6824E" stop-opacity="0.1" />
    //                 </linearGradient>
    //               </defs>
    //             </svg>
    //           ) : (
    //             <svg className="absolute inset-y-auto inset-x-[-10px] max-md:hidden" width="605" height="106" viewBox="0 0 605 106" fill="none" xmlns="http://www.w3.org/2000/svg">
    //               <path
    //                 d="M0.605911 37.072C-1.31021 23.6432 8.96027 11.5669 22.5225 11.302L579.003 0.429011C591.228 0.190158 601.422 9.72322 602.003 21.9363L604.844 81.6951C605.468 94.8153 594.807 105.698 581.677 105.344L27.1948 90.3806C16.1892 90.0836 7.00146 81.894 5.44628 70.9948L0.605911 37.072Z"
    //                 fill="url(#paint0_linear_2006_6228)"
    //               />
    //               <defs>
    //                 <linearGradient id="paint0_linear_2006_6228" x1="301.5" y1="8.16966" x2="301.5" y2="98.9438" gradientUnits="userSpaceOnUse">
    //                   <stop stop-color="#14141C" />
    //                   <stop offset="1" stop-color="#187BDE" stop-opacity="0.2" />
    //                 </linearGradient>
    //               </defs>
    //             </svg>
    //           )}

    //           <div className="!text-primary">{t("ForGeneralTrade")}</div>
    //         </div>
    //         <span
    //           style={{
    //             background: "linear-gradient(180deg, #D7EBFF 0%, #F65400 100%)",
    //             backgroundClip: "text",
    //             WebkitBackgroundClip: "text",
    //             WebkitTextFillColor: "transparent",
    //           }}>
    //           {t("Contracting&CommercialAgenciesCo")}
    //         </span>
    //       </div>

    //       <div className="max-md:col-span-1  w-full h-fit md:mt-36 flex items-end justify-end pb-4 px-2">
    //         <RevealWrapper opacity={0} origin={"left"} delay={300} duration={2000} distance="150px" reset={true}>
    //           <img className="" src={`/assets/images/${!isRtl ? "pikasoRight" : "pikasoLeft"}.png`} />
    //         </RevealWrapper>
    //         {/* <RowImage />  */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section className="section-hero mb-[50px] max-[1199px]:mb-[35px] py-[50px] relative bg-[#f8f8fb] overflow-hidden">
      <div className="bb-social-follow absolute left-[20px] bottom-[30px] max-[1250px]:hidden">
        <ul className="inner-links">
          <li className="p-[6px] rotate-[270deg]">
            <a
              href="javascript:void(0)"
              className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase">
              Fb
            </a>
          </li>
          <li className="p-[6px] rotate-[270deg]">
            <a
              href="javascript:void(0)"
              className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase">
              Li
            </a>
          </li>
          <li className="p-[6px] rotate-[270deg]">
            <a
              href="javascript:void(0)"
              className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase">
              Dr
            </a>
          </li>
          <li className="p-[6px] rotate-[270deg]">
            <a
              href="javascript:void(0)"
              className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[16px] font-medium text-[#777] hover:text-[#6c7fd8] leading-[28px] tracking-[0.03rem] uppercase">
              In
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full">
            <div className="hero-slider swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide slide-1">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-1 order-2 mb-[24px]">
                      <div className="hero-contact h-full flex flex-col items-start justify-center max-[991px]:items-center">
                        <p className="mb-[20px] font-Poppins text-[18px] text-[#777] font-light leading-[28px] tracking-[0.03rem] max-[1199px]:mb-[10px] max-[1199px]:text-[16px]">
                          Flat 30% Off
                        </p>
                        <h1 className="mb-[20px] font-quicksand text-[50px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[1199px]:mb-[10px] max-[1199px]:text-[38px] max-[991px]:text-center max-[991px]:text-[45px] max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]">
                          Explore <span className="relative text-[#6c7fd8]">Healthy</span>
                          <br />& Fresh Fruits
                        </h1>
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-2 order-1 mb-[24px]">
                      <div className="hero-image pr-[50px] relative max-[991px]:px-[50px] max-[575px]:px-[30px] flex justify-center max-[420px]:p-[0]">
                        <img
                          src="assets/img/hero/hero-1.png"
                          alt="hero"
                          className="w-full pb-[50px] opacity-[1] max-[1199px]:pr-[30px] max-[991px]:pr-[0] max-[575px]:pb-[30px] max-[420px]:pb-[15px]"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 300 300"
                          className="animate-shape w-[120%] absolute top-[-50px] right-[-50px] z-[-1] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]">
                          <linearGradient id="shape_1" x1="100%" x2="0%" y1="100%" y2="0%"></linearGradient>
                          <path d="">
                            <animate repeatCount="indefinite" attributeName="d" dur="15s" values="" />
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide slide-2">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-1 order-2 mb-[24px]">
                      <div className="hero-contact h-full flex flex-col items-start justify-center max-[991px]:items-center">
                        <p className="mb-[20px] font-Poppins text-[18px] text-[#777] font-light leading-[28px] tracking-[0.03rem] max-[1199px]:mb-[10px] max-[1199px]:text-[16px]">
                          Flat 20% Off
                        </p>
                        <h2 className="mb-[20px] font-quicksand text-[50px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[1199px]:mb-[10px] max-[1199px]:text-[38px] max-[991px]:text-center max-[991px]:text-[45px] max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]">
                          Explore <span className="relative text-[#6c7fd8]">Warm</span>
                          <br />
                          Fast Food & Snacks
                        </h2>
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-2 order-1 mb-[24px]">
                      <div className="hero-image pr-[50px] relative max-[991px]:px-[50px] max-[575px]:px-[30px] flex justify-center max-[420px]:p-[0]">
                        <img
                          src="assets/img/hero/hero-2.png"
                          alt="hero"
                          className="w-full pb-[50px] opacity-[1] max-[1199px]:pr-[30px] max-[991px]:pr-[0] max-[575px]:pb-[30px] max-[420px]:pb-[15px]"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 300 300"
                          className="animate-shape w-[120%] absolute top-[-50px] right-[-50px] z-[-1] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]">
                          <linearGradient id="shape_2" x1="80%" x2="0%" y1="80%" y2="0%"></linearGradient>
                          <path d="">
                            <animate repeatCount="indefinite" attributeName="d" dur="15s" values="" />
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide slide-3">
                  <div className="flex flex-wrap w-full mb-[-24px]">
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-1 order-2 mb-[24px]">
                      <div className="hero-contact h-full flex flex-col items-start justify-center max-[991px]:items-center">
                        <p className="mb-[20px] font-Poppins text-[18px] text-[#777] font-light leading-[28px] tracking-[0.03rem] max-[1199px]:mb-[10px] max-[1199px]:text-[16px]">
                          Flat 30% Off
                        </p>
                        <h2 className="mb-[20px] font-quicksand text-[50px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[1199px]:mb-[10px] max-[1199px]:text-[38px] max-[991px]:text-center max-[991px]:text-[45px] max-[767px]:text-[40px] max-[575px]:text-[35px] max-[420px]:text-[30px] max-[360px]:text-[28px]">
                          Explore <span className="relative text-[#6c7fd8]">Organic</span>
                          <br />& Fresh Vegetables
                        </h2>
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] max-[1199px]:py-[3px] max-[1199px]:px-[15px] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]">
                          Shop Now
                        </a>
                      </div>
                    </div>
                    <div className="min-[992px]:w-[50%] w-full px-[12px] min-[992px]:order-2 order-1 mb-[24px]">
                      <div className="hero-image pr-[50px] relative max-[991px]:px-[50px] max-[575px]:px-[30px] flex justify-center max-[420px]:p-[0]">
                        <img
                          src="assets/img/hero/hero-3.png"
                          alt="hero"
                          className="w-full pb-[50px] opacity-[1] max-[1199px]:pr-[30px] max-[991px]:pr-[0] max-[575px]:pb-[30px] max-[420px]:pb-[15px]"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 300 300"
                          className="animate-shape w-[120%] absolute top-[-50px] right-[-50px] z-[-1] max-[1399px]:right-[-30px] max-[1199px]:w-[125%] max-[991px]:w-[100%] max-[991px]:top-[0] max-[575px]:right-[0] max-[420px]:w-[110%] max-[420px]:right-[-30px]">
                          <linearGradient id="shape_3" x1="80%" x2="0%" y1="80%" y2="0%"></linearGradient>
                          <path d="">
                            <animate repeatCount="indefinite" attributeName="d" dur="15s" values="" />
                          </path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-white"></div>
              <div className="swiper-buttons">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
              </div>
            </div>
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
