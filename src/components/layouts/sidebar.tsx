"use client";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { toggleSidebar } from "@/store/themeConfigSlice";
import { IRootState } from "@/store";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { getTranslation } from "../../../ni18n/i18n";
import { useSession } from "next-auth/react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { t } = getTranslation();
  const pathname = usePathname();
  const [currentMenu, setCurrentMenu] = useState<string>("");
  const [errorSubMenu, setErrorSubMenu] = useState(false);
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const semidark = useSelector((state: IRootState) => state.themeConfig.semidark);
  const toggleMenu = (value: string) => {
    setCurrentMenu((oldValue) => {
      return oldValue === value ? "" : value;
    });
  };

  useEffect(() => {
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    if (selector) {
      selector.classList.add("active");
      const ul: any = selector.closest("ul.sub-menu");
      if (ul) {
        let ele: any = ul.closest("li.menu").querySelectorAll(".nav-link") || [];
        if (ele.length) {
          ele = ele[0];
          setTimeout(() => {
            ele.click();
          });
        }
      }
    }
  }, []);

  useEffect(() => {
    setActiveRoute();
    if (window.innerWidth < 1024 && themeConfig.sidebar) {
      dispatch(toggleSidebar());
    }
  }, [pathname]);

  const setActiveRoute = () => {
    let allLinks = document.querySelectorAll(".sidebar ul a.active");
    for (let i = 0; i < allLinks.length; i++) {
      const element = allLinks[i];
      element?.classList.remove("active");
    }
    const selector = document.querySelector('.sidebar ul a[href="' + window.location.pathname + '"]');
    selector?.classList.add("active");
  };
  const isDark = useSelector((state: IRootState) => state.themeConfig).theme == "dark";

  return (
    <div className={semidark ? "dark" : ""}>
      <nav
        className={`sidebar md:hidden fixed top-0 bottom-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all duration-300 ${
          semidark ? "text-white-dark" : ""
        }`}>
        <div
          style={{
            background: isDark ? "radial-gradient(88.85% 76.15% at 100% 1.59%, rgba(251, 15, 0, 0.10) 0%, rgba(255, 0, 0, 0.00) 100%), var(--basic-bg, #272727)" : "#F7F7F7",
          }}
          className="h-full  ">
          <div className="flex items-center justify-between px-4 py-3">
            <Link href="/" className="main-logo flex shrink-0 items-center">
              <img className="inline  w-[50px] h-[50px] rounded-full ltr:-ml-1 rtl:-mr-1 scale-150" src="/favicon.png" alt="logo" />
              {/* <span className="align-middle text-2xl font-semibold ltr:ml-1.5 rtl:mr-1.5 dark:text-white-light lg:inline">{t('Open Code')}</span> */}
            </Link>

            <button
              type="button"
              className="collapse-icon flex h-8 w-8 items-center rounded-full transition duration-300 hover:bg-gray-500/10 rtl:rotate-180 dark:text-white-light dark:hover:bg-dark-light/10"
              onClick={() => dispatch(toggleSidebar())}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="m-auto h-5 w-5">
                <path d="M13 19L7 12L13 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path opacity="0.5" d="M16.9998 19L10.9998 12L16.9998 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
          <PerfectScrollbar className="relative h-[calc(100vh-80px)]">
            <ul className="relative space-y-0.5 p-4 py-0 font-semibold mt-10">
              <li className="nav-item">
                <ul>
                  <li className="nav-item">
                    <Link href="/" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("Home")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#OurServices" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("OurServices")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#GeneralTrade" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("GeneralTrade")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#Contracting" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("Contracting")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#CommercialAgencies" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("CommercialAgencies")}</span>
                      </div>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/#ContactUs" className="group">
                      <div className="flex items-center">
                        <span className="text-black ltr:pl-3 rtl:pr-3 dark:text-[#FFFFFF99] dark:group-hover:text-white-dark">{t("ContactUs")}</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </PerfectScrollbar>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
