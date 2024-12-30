"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "@/store";
import { toggleRTL, toggleSidebar, toggleTheme } from "@/store/themeConfigSlice";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../dropdown";
import { getTranslation } from "../../../ni18n/i18n";

export const Header = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const router = useRouter();
  const { t, i18n, initLocale } = getTranslation();

  useEffect(() => {
    const selector = document.querySelector('ul.horizontal-menu a[href="' + window.location.pathname + '"]');
    if (selector) {
      const all: any = document.querySelectorAll("ul.horizontal-menu .nav-link.active");
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove("active");
      }

      let allLinks = document.querySelectorAll("ul.horizontal-menu a.active");
      for (let i = 0; i < allLinks.length; i++) {
        const element = allLinks[i];
        element?.classList.remove("active");
      }
      selector?.classList.add("active");

      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link");
        if (ele) {
          ele = ele[0];
          setTimeout(() => {
            ele?.classList.add("active");
          });
        }
      }
    }
  }, [pathname]);

  const isRtl = useSelector((state: IRootState) => state.themeConfig.rtlClass) === "rtl";

  const themeConfig = useSelector((state: IRootState) => state.themeConfig);

  const setLocale = (flag: string) => {
    if (flag.toLowerCase() === "ae") {
      dispatch(toggleRTL("rtl"));
    } else {
      dispatch(toggleRTL("ltr"));
    }
    router.refresh();
  };

  return (
    <header className={`z-40 dark:bg-[#121212] ${themeConfig.semidark && themeConfig.menu === "horizontal" ? "dark" : ""} `}>
      <div className="">
        <div className="relative flex w-full items-center bg-white px-5 py-2.5 dark:bg-black">
          <div className="horizontal-logo flex items-center justify-between ltr:mr-2 rtl:ml-2 ">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img className="inline w-[25px] h-[24px] rounded-full ltr:-ml-1 rtl:-mr-1 scale-150" src="/favicon.png" alt="logo" />
            </Link>
            <button
              type="button"
              className="collapse-icon mx-2 flex flex-none rounded-full text-white opacity-90 bg-[#2276c9] p-2 hover:bg-white-light/90 hover:text-primary ltr:ml-2 rtl:mr-2  dark:text-[#d0d2d6] dark:hover:bg-dark/60 dark:hover:text-primary lg:hidden"
              onClick={() => dispatch(toggleSidebar())}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 7L4 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path opacity="0.5" d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M20 17L4 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            <div className="hidden px-10 gap-8 md:flex">
              <Link href={"/#"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("Home")}
              </Link>
              <Link href={"/#OurServices"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("OurServices")}
              </Link>

              <Link href={"/#GeneralTrade"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("GeneralTrade")}
              </Link>
              <Link href={"/#Contracting"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("Contracting")}
              </Link>
              <Link href={"/#CommercialAgencies"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("CommercialAgencies")}
              </Link>
              <Link href={"/#ContactUs"} className=" rounded-md hover:bg-primary p-2 hover:text-white text-[#0E0A2C]/75 dark:text-white/75">
                {t("ContactUs")}
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-end space-x-1.5 ltr:ml-auto rtl:mr-auto rtl:space-x-reverse dark:text-[#d0d2d6] sm:flex-1 ltr:sm:ml-0 sm:rtl:mr-0 lg:space-x-2 px-4">
            <div>
              {themeConfig.theme === "light" ? (
                <button
                  className={`${
                    themeConfig.theme === "light" &&
                    "flex items-center rounded-full text-white opacity-90 bg-[#2276c9] p-2 hover:bg-white-light/90 hover:text-primary  dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("dark"))}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M12 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M4 12L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M22 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity="0.5" d="M19.7778 4.22266L17.5558 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity="0.5" d="M4.22217 4.22266L6.44418 6.25424" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity="0.5" d="M6.44434 17.5557L4.22211 19.7779" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity="0.5" d="M19.7778 19.7773L17.5558 17.5551" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              ) : (
                ""
              )}
              {themeConfig.theme === "dark" && (
                <button
                  className={`${
                    themeConfig.theme === "dark" &&
                    "flex items-center rounded-full text-white opacity-90 bg-[#2276c9] p-2 hover:bg-white-light/90 hover:text-primary  dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("system"))}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21.0672 11.8568L20.4253 11.469L21.0672 11.8568ZM12.1432 2.93276L11.7553 2.29085V2.29085L12.1432 2.93276ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75V1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75ZM15.5 14.25C12.3244 14.25 9.75 11.6756 9.75 8.5H8.25C8.25 12.5041 11.4959 15.75 15.5 15.75V14.25ZM20.4253 11.469C19.4172 13.1373 17.5882 14.25 15.5 14.25V15.75C18.1349 15.75 20.4407 14.3439 21.7092 12.2447L20.4253 11.469ZM9.75 8.5C9.75 6.41182 10.8627 4.5828 12.531 3.57467L11.7553 2.29085C9.65609 3.5593 8.25 5.86509 8.25 8.5H9.75ZM12 2.75C11.9115 2.75 11.8077 2.71008 11.7324 2.63168C11.6686 2.56527 11.6538 2.50244 11.6503 2.47703C11.6461 2.44587 11.6482 2.35557 11.7553 2.29085L12.531 3.57467C13.0342 3.27065 13.196 2.71398 13.1368 2.27627C13.0754 1.82126 12.7166 1.25 12 1.25V2.75ZM21.7092 12.2447C21.6444 12.3518 21.5541 12.3539 21.523 12.3497C21.4976 12.3462 21.4347 12.3314 21.3683 12.2676C21.2899 12.1923 21.25 12.0885 21.25 12H22.75C22.75 11.2834 22.1787 10.9246 21.7237 10.8632C21.286 10.804 20.7293 10.9658 20.4253 11.469L21.7092 12.2447Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              )}
              {themeConfig.theme === "system" && (
                <button
                  className={`${
                    themeConfig.theme === "system" &&
                    "flex items-center rounded-full text-white opacity-90 bg-[#2276c9] p-2 hover:bg-white-light/90 hover:text-primary  dark:hover:bg-dark/60"
                  }`}
                  onClick={() => dispatch(toggleTheme("light"))}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 9C3 6.17157 3 4.75736 3.87868 3.87868C4.75736 3 6.17157 3 9 3H15C17.8284 3 19.2426 3 20.1213 3.87868C21 4.75736 21 6.17157 21 9V14C21 15.8856 21 16.8284 20.4142 17.4142C19.8284 18 18.8856 18 17 18H7C5.11438 18 4.17157 18 3.58579 17.4142C3 16.8284 3 15.8856 3 14V9Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path opacity="0.5" d="M22 21H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <path opacity="0.5" d="M15 15H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              )}
            </div>

            <div className="dropdown shrink-0">
              <button
                className="block p-2 rounded-full text-white opacity-90 bg-[#2276c9] hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                type="button"
                onClick={() => {
                  const lang = i18n.language === "en" ? "ar" : "en";
                  initLocale(lang);
                  i18n.changeLanguage(lang);
                  setLocale(lang);
                  dispatch(toggleRTL(lang !== "en" ? "rtl" : "ltr"));
                }}>
                <div className="h-5 w-5 rounded-full ">{t(i18n.language === "en" ? "ar" : "en")}</div>
              </button>
            </div>
          </div>
          {/* <div className=' gap-3 hidden md:flex items-center bg-[#2376C9] p-[8px] rounded-xl ltr:ml-auto rtl:mr-auto'>
                        <div>
                            <svg className='size-6' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_2041_2787)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.13 28.1051L22.2949 20.2701L23.2968 19.2683C23.8563 18.7087 24.6004 18.4004 25.3919 18.4004C26.1833 18.4004 26.9275 18.7087 27.487 19.2683L31.1318 22.913C31.6913 23.4726 31.9996 24.2167 31.9996 25.0081C31.9996 25.7998 31.6913 26.5437 31.1318 27.1033L30.13 28.1051Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.3877 2.36282L5.3895 1.36105C5.94907 0.801453 6.69321 0.493164 7.48466 0.493164C8.27612 0.493164 9.02026 0.801453 9.57983 1.36105L13.2248 5.00574C14.3799 6.16086 14.3799 8.04071 13.2248 9.19608L12.223 10.1979L4.3877 2.36282Z" fill="white" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.7521 29.4198C26.1085 31.6106 22.7091 32.0887 18.8578 30.7933C15.5585 29.6834 11.9088 27.2397 8.58119 23.9121C5.25356 20.5844 2.8096 16.9348 1.69993 13.6352C0.404503 9.7842 0.882687 6.38486 3.07345 3.74121L10.9464 11.6141C9.25464 14.2514 11.6872 17.3732 13.4036 19.0895C15.1202 20.8059 18.242 23.2387 20.879 21.5467L28.7521 29.4198Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2041_2787">
                                        <rect width="31.0127" height="31.0127" fill="white" transform="translate(0.987305 0.493164)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="text-white opacity-80 text-base font-normal font-['IBM Plex Sans Arabic'] leading-snug">
                            {t("OurPhones")}
                        </div>
                        <div className="flex flex-col gap-2 items-center">
                            <Link
                                href={'tel:+9647714220077'}
                                className="text-white opacity-80 text-xs font-normal font-['IBM Plex Sans Arabic'] leading-none">
                                <bdi>
                                    +964 771 4220 077
                                </bdi>
                            </Link>
                            <Link
                                href={'tel:+9647814220077'}
                                className="text-white opacity-80 text-xs font-normal font-['IBM Plex Sans Arabic'] leading-none">
                                <bdi>
                                    +964 781 4220 077
                                </bdi>
                            </Link>

                        </div>
                    </div> */}
        </div>
      </div>
    </header>
  );
};
