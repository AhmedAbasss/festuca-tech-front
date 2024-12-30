"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { RevealWrapper } from "next-reveal";
import { getTranslation } from "../../../../../ni18n/i18n";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
export const Home = () => {
  const el = useRef(null);
  const { t }: any = getTranslation();
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [t(`appName`)],
      loop: true,
      typeSpeed: 50,
      backSpeed: 100,
      backDelay: 1000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [t]);

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const isRtl = themeConfig.rtlClass === "rtl" ? true : false;
  const isDark = themeConfig.isDarkMode;
  return (
    <div
      id="home"
      style={{
        ...(isDark && {
          background: "linear-gradient(46deg, #181B27 23.39%, rgba(67, 2, 87, 0.24) 41.68%, rgba(22, 25, 37, 0.00) 72.51%)",
        }),
      }}>
      <div className="p-8 rounded-md">
        <div
          style={{
            // backgroundColor: '#0A0A0A',
            backgroundImage: `url(./assets/images/${!isRtl ? "right" : "left"}.svg)`,
            backgroundRepeat: "no-repeat",
            // backgroundSize:'cover',
            backgroundPosition: isRtl ? "left" : " right",
            // rotate: '180deg',
            width: "100%",
            height: "100%",
            marginTop: "",
          }}
          className="w-full md:!h-[calc(100vh-80px)] py-10 max-md:flex max-md:flex-col gap-5  md:grid md:grid-cols-2  md:items-center  ">
          <div className="text-[#98430b] max-md:text-center md:text-[70px] text-3xl font-semibold font-['IBM Plex Sans Arabic'] md:leading-[91px] ">
            <div
              style={{
                background: "linear-gradient(180deg, #4792dd 0%, #F65400 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              <span ref={el} />
            </div>
            <div className="relative">
              {!isDark ? (
                <svg className="absolute inset-y-auto inset-x-[-10px] max-md:hidden" width="605" height="106" viewBox="0 0 605 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.605911 37.072C-1.31021 23.6432 8.96027 11.5669 22.5225 11.302L579.003 0.429011C591.228 0.190158 601.422 9.72322 602.003 21.9363L604.844 81.6951C605.468 94.8153 594.807 105.698 581.677 105.344L27.1948 90.3806C16.1892 90.0836 7.00146 81.894 5.44628 70.9948L0.605911 37.072Z"
                    fill="url(#paint0_linear_2049_10759)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_2049_10759" x1="301.5" y1="8.16966" x2="301.5" y2="98.9438" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#F7F7F7" />
                      <stop offset="1" stop-color="#E6824E" stop-opacity="0.1" />
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg className="absolute inset-y-auto inset-x-[-10px] max-md:hidden" width="605" height="106" viewBox="0 0 605 106" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M0.605911 37.072C-1.31021 23.6432 8.96027 11.5669 22.5225 11.302L579.003 0.429011C591.228 0.190158 601.422 9.72322 602.003 21.9363L604.844 81.6951C605.468 94.8153 594.807 105.698 581.677 105.344L27.1948 90.3806C16.1892 90.0836 7.00146 81.894 5.44628 70.9948L0.605911 37.072Z"
                    fill="url(#paint0_linear_2006_6228)"
                  />
                  <defs>
                    <linearGradient id="paint0_linear_2006_6228" x1="301.5" y1="8.16966" x2="301.5" y2="98.9438" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#14141C" />
                      <stop offset="1" stop-color="#187BDE" stop-opacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
              )}

              <div className="!text-primary">{t("ForGeneralTrade")}</div>
            </div>
            <span
              style={{
                background: "linear-gradient(180deg, #D7EBFF 0%, #F65400 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
              {t("Contracting&CommercialAgenciesCo")}
            </span>
          </div>

          <div className="max-md:col-span-1  w-full h-fit md:mt-36 flex items-end justify-end pb-4 px-2">
            <RevealWrapper opacity={0} origin={"left"} delay={300} duration={2000} distance="150px" reset={true}>
              <img className="" src={`/assets/images/${!isRtl ? "pikasoRight" : "pikasoLeft"}.png`} />
            </RevealWrapper>
            {/* <RowImage />  */}
          </div>
        </div>
      </div>
    </div>
  );
};
