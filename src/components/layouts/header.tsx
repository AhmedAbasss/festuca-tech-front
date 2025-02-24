"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { IRootState } from "@/store";
import { toggleRTL, toggleSidebar, toggleTheme } from "@/store/themeConfigSlice";
import { usePathname, useRouter } from "next/navigation";
import Dropdown from "../dropdown";
import { getTranslation } from "../../../ni18n/i18n";

// TODO move this component to other file
interface MenuItem {
  label: React.ReactNode;
  url: string;
}
interface MainMenuProps {
  menuItems: MenuItem[];
}
export const MainMenu: React.FC<MainMenuProps> = ({ menuItems }) => {
  return (
    <div className="bb-main-menu relative flex flex-[auto] justify-start max-[991px]:hidden" id="navbarSupportedContent">
      <ul className="navbar-nav flex flex-wrap flex-row">
        {menuItems.map((item, index) => (
          <li key={index} className="nav-item flex items-center font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] mr-[45px]">
            <Link className="nav-link font-Poppins p-[0] leading-[28px] text-[15px] font-medium tracking-[0.03rem] text-secbg-secondary flex" href={item.url}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

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
    <header className="bb-header relative z-[5] border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
      <div className="top-header bg-secondary dark:bg-secondary-dark py-[6px] max-[991px]:hidden">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="inner-top-header flex justify-between">
                <div className="col-left-bar">
                  <Link
                    href="shop-left-sidebar-col-3.html"
                    className="transition-all duration-[0.3s] ease-in-out font-Poppins font-light text-[14px] text-[#fff] leading-[28px] tracking-[0.03rem]">
                    Flat 50% Off On Grocery Shop.
                  </Link>
                </div>
                <div className="col-right-bar flex">
                  <div className="cols px-[12px]">
                    <Link href="faq.html" className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] text-[#fff] font-light leading-[28px] tracking-[0.03rem]">
                      Help?
                    </Link>
                  </div>
                  <div className="cols px-[12px]">
                    <Link
                      href="track-order.html"
                      className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] text-[#fff] font-light leading-[28px] tracking-[0.03rem]">
                      Track Order
                    </Link>
                  </div>
                  <div className="cols px-[12px]">
                    <div className="custom-dropdown relative z-[5]">
                      <Link
                        className="bb-dropdown-toggle transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] text-[#fff] relative pr-[15px] font-light leading-[28px] tracking-[0.03rem]"
                        href="#">
                        Language
                      </Link>
                      <ul className="dropdown transition-all duration-[0.3s] ease-in-out min-w-[150px] py-[10px] px-[10px] mt-[25px] absolute z-[16] text-left opacity-[0] invisible left-[0] right-[auto] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] block rounded-[10px]">
                        <li className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                          <Link
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out text-[13px] text-[#686e7d] hover:text-[#6c7fd8] font-normal font-Poppins py-[12px] block leading-[28px] tracking-[0.03rem]">
                            English
                          </Link>
                        </li>
                        <li className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                          <Link
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out text-[13px] text-[#686e7d] hover:text-[#6c7fd8] font-normal font-Poppins py-[12px] block leading-[28px] tracking-[0.03rem]">
                            Hindi
                          </Link>
                        </li>
                        <li className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                          <Link
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out text-[13px] text-[#686e7d] hover:text-[#6c7fd8] font-normal font-Poppins py-[12px] block leading-[28px] tracking-[0.03rem]">
                            Gujarati
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="cols px-[12px]">
                    <div className="custom-dropdown relative z-[5]">
                      <Link
                        className="bb-dropdown-toggle transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] text-[#fff] relative pr-[15px] font-light leading-[28px] tracking-[0.03rem]"
                        href="#">
                        Currency
                      </Link>
                      <ul className="dropdown transition-all duration-[0.3s] ease-in-out min-w-[150px] py-[10px] px-[10px] mt-[25px] absolute z-[16] text-left opacity-[0] invisible left-[0] right-[auto] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] block rounded-[10px]">
                        <li className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                          <Link
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out text-[13px] text-[#686e7d] hover:text-[#6c7fd8] font-normal font-Poppins py-[12px] block leading-[28px] tracking-[0.03rem]">
                            USD $
                          </Link>
                        </li>
                        <li className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                          <Link
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out text-[13px] text-[#686e7d] hover:text-[#6c7fd8] font-normal font-Poppins py-[12px] block leading-[28px] tracking-[0.03rem]">
                            EUR €
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-header bg-primary-light dark:bg-primary-dark py-[20px] max-[991px]:py-[15px]">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="inner-bottom-header flex justify-between max-[767px]:flex-col">
                <div className="cols bb-logo-detail flex max-[767px]:justify-between">
                  <div className="header-logo flex items-center max-[575px]:justify-center">
                    <Link href="index.html">
                      {/* <img src="/logo.svg" alt="logo" className="light w-[50px] max-[991px]:w-[115px] block" /> */}
                      <img src="/logo.svg" alt="logo" className="light w-[50px] max-[991px]:w-[115px] block" />
                      <img src="/logo.svg" alt="logo" className="dark w-[50px] max-[991px]:w-[115px] hidden" />
                    </Link>
                  </div>
                  <Link
                    href="javascript:void(0)"
                    className="bb-sidebar-toggle bb-category-toggle hidden max-[991px]:flex max-[991px]:items-center max-[991px]:ml-[20px] max-[991px]:border-[1px] max-[991px]:border-solid max-[991px]:border-[#eee] dark:border-[#494E5D] max-[991px]:w-[40px] max-[991px]:h-[40px] max-[991px]:rounded-[15px] justify-center transition-all duration-[0.3s] ease-in-out font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                    <svg className="svg-icon h-[30px] w-[30px] max-[991px]:w-[22px] max-[991px]:h-[22px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <path
                        className="fill-[#6c7fd8]"
                        d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z"
                      />
                    </svg>
                  </Link>
                </div>
                <div className="cols flex justify-center">
                  <div className="header-search w-[600px] max-[1399px]:w-[500px] max-[1199px]:w-[400px] max-[991px]:w-full max-[991px]:min-w-[300px] max-[767px]:py-[15px] max-[480px]:min-w-[auto]">
                    <form className="bb-btn-group-form flex relative max-[991px]:ml-[20px] max-[767px]:m-[0]" action="#">
                      <div className="inner-select border-r-[1px] border-solid border-[#eee] dark:border-[#494E5D] h-full px-[20px] flex items-center absolute top-[0] left-[0] max-[991px]:hidden">
                        <div className="custom-select w-[100px] capitalize text-[#777] flex items-center justify-between transition-all duration-[0.2s] ease-in text-[14px] relative">
                          vegetables
                          <select>
                            <option value="option1">vegetables</option>
                            <option value="option2">Cold Drinks</option>
                            <option value="option3">Fruits</option>
                            <option value="option4">Bakery</option>
                          </select>
                        </div>
                      </div>
                      <input
                        className="form-control bb-search-bar bg-primary-light dark:bg-primary-dark block w-full min-h-[45px] h-[48px] py-[10px] pr-[10px] pl-[160px] max-[991px]:min-h-[40px] max-[991px]:h-[40px] max-[991px]:p-[10px] text-[14px] font-normal leading-[1] text-[#777] rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] tracking-[0.5px]"
                        placeholder="Search products..."
                        type="text"
                      />
                      <button
                        className="submit absolute top-[0] left-[auto] right-[0] flex items-center justify-center w-[45px] h-full bg-transparent text-[#555] text-[16px] rounded-[0] outline-[0] border-[0] padding-[0]"
                        type="submit">
                        <i className="ri-search-line text-[18px] leading-[12px] text-[#555]"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="cols bb-icons flex justify-center">
                  <div className="bb-flex-justify max-[575px]:flex max-[575px]:justify-between">
                    <div className="bb-header-buttons h-full flex justify-end items-center">
                      <div className="bb-acc-drop relative">
                        <Link
                          href="javascript:void(0)"
                          className="bb-header-btn bb-header-user dropdown-toggle bb-user-toggle transition-all duration-[0.3s] ease-in-out relative flex w-[auto] items-center whitespace-nowrap ml-[30px] max-[1199px]:ml-[20px] max-[767px]:ml-[0]"
                          title="Account">
                          <div className="header-icon relative flex">
                            <svg
                              className="svg-icon w-[30px] h-[30px] max-[1199px]:w-[25px] max-[1199px]:h-[25px] max-[991px]:w-[22px] max-[991px]:h-[22px]"
                              viewBox="0 0 1024 1024"
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                className="fill-[#6c7fd8]"
                                d="M512.476 648.247c-170.169 0-308.118-136.411-308.118-304.681 0-168.271 137.949-304.681 308.118-304.681 170.169 0 308.119 136.411 308.119 304.681C820.594 511.837 682.645 648.247 512.476 648.247L512.476 648.247zM512.476 100.186c-135.713 0-246.12 109.178-246.12 243.381 0 134.202 110.407 243.381 246.12 243.381 135.719 0 246.126-109.179 246.126-243.381C758.602 209.364 648.195 100.186 512.476 100.186L512.476 100.186zM935.867 985.115l-26.164 0c-9.648 0-17.779-6.941-19.384-16.35-2.646-15.426-6.277-30.52-11.142-44.95-24.769-87.686-81.337-164.13-159.104-214.266-63.232 35.203-134.235 53.64-207.597 53.64-73.555 0-144.73-18.537-208.084-53.922-78 50.131-134.75 126.68-159.564 214.549 0 0-4.893 18.172-11.795 46.4-2.136 8.723-10.035 14.9-19.112 14.9L88.133 985.116c-9.415 0-16.693-8.214-15.47-17.452C91.698 824.084 181.099 702.474 305.51 637.615c58.682 40.472 129.996 64.267 206.966 64.267 76.799 0 147.968-23.684 206.584-63.991 124.123 64.932 213.281 186.403 232.277 329.772C952.56 976.901 945.287 985.115 935.867 985.115L935.867 985.115z"
                              />
                            </svg>
                          </div>
                          <div className="bb-btn-desc flex flex-col ml-[10px] max-[1199px]:hidden">
                            <span className="bb-btn-title font-Poppins transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-secbg-secondary mb-[4px] tracking-[0.6px] capitalize font-medium whitespace-nowrap">
                              Account
                            </span>
                            <span className="bb-btn-stitle font-Poppins transition-all duration-[0.3s] ease-in-out text-[14px] leading-[16px] font-semibold text-secbg-secondary tracking-[0.03rem] whitespace-nowrap">
                              Login
                            </span>
                          </div>
                        </Link>
                        <ul className="bb-dropdown-menu min-w-[150px] py-[10px] px-[5px] transition-all duration-[0.3s] ease-in-out mt-[25px] absolute z-[16] text-left opacity-[0] right-[auto] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] block rounded-[10px]">
                          <li className="py-[4px] px-[15px] m-[0] font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                            <Link
                              className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] hover:text-[#6c7fd8] leading-[22px] block w-full font-normal tracking-[0.03rem]"
                              href="register.html">
                              Register
                            </Link>
                          </li>
                          <li className="py-[4px] px-[15px] m-[0] font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                            <Link
                              className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] hover:text-[#6c7fd8] leading-[22px] block w-full font-normal tracking-[0.03rem]"
                              href="checkout.html">
                              Checkout
                            </Link>
                          </li>
                          <li className="py-[4px] px-[15px] m-[0] font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">
                            <Link
                              className="dropdown-item transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] hover:text-[#6c7fd8] leading-[22px] block w-full font-normal tracking-[0.03rem]"
                              href="login.html">
                              Login
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link
                        href="wishlist"
                        className="bb-header-btn bb-wish-toggle transition-all duration-[0.3s] ease-in-out relative flex w-[auto] items-center ml-[30px] max-[1199px]:ml-[20px]"
                        title="Wishlist">
                        <div className="header-icon relative flex">
                          <svg
                            className="svg-icon w-[30px] h-[30px] max-[1199px]:w-[25px] max-[1199px]:h-[25px] max-[991px]:w-[22px] max-[991px]:h-[22px]"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-[#6c7fd8]"
                              d="M512 128l121.571556 250.823111 276.366222 39.111111-199.281778 200.504889L756.622222 896 512 769.536 267.377778 896l45.852444-277.617778-199.111111-200.504889 276.366222-39.111111L512 128m0-56.888889a65.962667 65.962667 0 0 0-59.477333 36.807111l-102.940445 213.703111-236.828444 35.214223a65.422222 65.422222 0 0 0-52.366222 42.979555 62.577778 62.577778 0 0 0 15.274666 64.967111l173.511111 173.340445-40.248889 240.355555a63.374222 63.374222 0 0 0 26.993778 62.577778 67.242667 67.242667 0 0 0 69.632 3.726222L512 837.290667l206.478222 107.605333a67.356444 67.356444 0 0 0 69.688889-3.726222 63.374222 63.374222 0 0 0 26.908445-62.577778l-40.277334-240.355556 173.511111-173.340444a62.577778 62.577778 0 0 0 15.246223-64.967111 65.422222 65.422222 0 0 0-52.366223-42.979556l-236.8-35.214222-102.968889-213.703111A65.848889 65.848889 0 0 0 512 71.111111z"
                              fill="#364C58"
                            />
                          </svg>
                        </div>
                        <div className="bb-btn-desc flex flex-col ml-[10px] max-[1199px]:hidden">
                          <span className="bb-btn-title font-Poppins transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-secbg-secondary mb-[4px] tracking-[0.6px] capitalize font-medium whitespace-nowrap">
                            <b className="bb-wishlist-count">3</b> items
                          </span>
                          <span className="bb-btn-stitle font-Poppins transition-all duration-[0.3s] ease-in-out text-[14px] leading-[16px] font-semibold text-secbg-secondary tracking-[0.03rem] whitespace-nowrap">
                            Wishlist
                          </span>
                        </div>
                      </Link>
                      <Link
                        href="cart"
                        className="bb-header-btn bb-cart-toggle transition-all duration-[0.3s] ease-in-out relative flex w-[auto] items-center ml-[30px] max-[1199px]:ml-[20px]"
                        title="Cart">
                        <div className="header-icon relative flex">
                          <svg
                            className="svg-icon w-[30px] h-[30px] max-[1199px]:w-[25px] max-[1199px]:h-[25px] max-[991px]:w-[22px] max-[991px]:h-[22px]"
                            viewBox="0 0 1024 1024"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              className="fill-[#6c7fd8]"
                              d="M351.552 831.424c-35.328 0-63.968 28.64-63.968 63.968 0 35.328 28.64 63.968 63.968 63.968 35.328 0 63.968-28.64 63.968-63.968C415.52 860.064 386.88 831.424 351.552 831.424L351.552 831.424 351.552 831.424zM799.296 831.424c-35.328 0-63.968 28.64-63.968 63.968 0 35.328 28.64 63.968 63.968 63.968 35.328 0 63.968-28.64 63.968-63.968C863.264 860.064 834.624 831.424 799.296 831.424L799.296 831.424 799.296 831.424zM862.752 799.456 343.264 799.456c-46.08 0-86.592-36.448-92.224-83.008L196.8 334.592 165.92 156.128c-1.92-15.584-16.128-28.288-29.984-28.288L95.2 127.84c-17.664 0-32-14.336-32-31.968 0-17.664 14.336-32 32-32l40.736 0c46.656 0 87.616 36.448 93.28 83.008l30.784 177.792 54.464 383.488c1.792 14.848 15.232 27.36 28.768 27.36l519.488 0c17.696 0 32 14.304 32 31.968S880.416 799.456 862.752 799.456L862.752 799.456zM383.232 671.52c-16.608 0-30.624-12.8-31.872-29.632-1.312-17.632 11.936-32.928 29.504-34.208l433.856-31.968c15.936-0.096 29.344-12.608 31.104-26.816l50.368-288.224c1.28-10.752-1.696-22.528-8.128-29.792-4.128-4.672-9.312-7.04-15.36-7.04L319.04 223.84c-17.664 0-32-14.336-32-31.968 0-17.664 14.336-31.968 32-31.968l553.728 0c24.448 0 46.88 10.144 63.232 28.608 18.688 21.088 27.264 50.784 23.52 81.568l-50.4 288.256c-5.44 44.832-45.92 81.28-92 81.28L385.6 671.424C384.8 671.488 384 671.52 383.232 671.52L383.232 671.52zM383.232 671.52"
                            />
                          </svg>
                          <span className="main-label-note-new"></span>
                        </div>
                        <div className="bb-btn-desc flex flex-col ml-[10px] max-[1199px]:hidden">
                          <span className="bb-btn-title font-Poppins transition-all duration-[0.3s] ease-in-out text-[12px] leading-[1] text-secbg-secondary mb-[4px] tracking-[0.6px] capitalize font-medium whitespace-nowrap">
                            <b className="bb-cart-count">4</b> items
                          </span>
                          <span className="bb-btn-stitle font-Poppins transition-all duration-[0.3s] ease-in-out text-[14px] leading-[16px] font-semibold text-secbg-secondary tracking-[0.03rem] whitespace-nowrap">
                            Cart
                          </span>
                        </div>
                      </Link>
                      <Link href="javascript:void(0)" className="bb-toggle-menu hidden max-[991px]:flex max-[991px]:ml-[20px]">
                        <div className="header-icon">
                          <i className="ri-menu-3-fill text-[22px] text-[#6c7fd8]"></i>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bb-main-menu-desk bg-primary-light dark:bg-secondary-dark py-[5px] border-t-[1px] border-solid border-[#eee] dark:border-[#494E5D] max-[991px]:hidden">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full px-[12px]">
              <div className="bb-inner-menu-desk flex max-[1199px]:relative max-[991px]:justify-between">
                <Link
                  href="javascript:void(0)"
                  className="bb-header-btn bb-sidebar-toggle bb-category-toggle transition-all duration-[0.3s] ease-in-out h-[45px] w-[45px] mr-[30px] p-[8px] flex items-center justify-center bg-primary-light dark:bg-primary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] relative max-[767px]:m-[0] max-[575px]:hidden">
                  <svg className="svg-icon w-[25px] h-[25px]" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <path
                      className="fill-[#6c7fd8]"
                      d="M384 928H192a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 608a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V640a32 32 0 0 0-32-32H192zM784 928H640a96 96 0 0 1-96-96V640a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v144a32 32 0 0 1-64 0V640a32 32 0 0 0-32-32H640a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h144a32 32 0 0 1 0 64zM384 480H192a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM192 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H192zM832 480H640a96 96 0 0 1-96-96V192a96 96 0 0 1 96-96h192a96 96 0 0 1 96 96v192a96 96 0 0 1-96 96zM640 160a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h192a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32H640z"
                    />
                  </svg>
                </Link>
                <button
                  className="navbar-toggler shadow-none hidden"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <i className="ri-menu-2-line"></i>
                </button>
                <MainMenu
                  menuItems={[
                    { label: "Home", url: "/" },
                    { label: "Categories", url: "/category" },
                    { label: "Products", url: "Products" },
                    { label: "Pages", url: "Pages.html" },
                    { label: "Blog", url: "Blog.html" },
                    {
                      label: (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            x="0"
                            y="0"
                            viewBox="0 0 64 64"
                            enableBackground="new 0 0 512 512"
                            xmlSpace="preserve"
                            className="w-[20px] h-[25px] mr-[5px] leading-[18px] align-middle">
                            <g>
                              <path
                                d="M10 16v22c0 .3.1.6.2.8.3.6 6.5 13.8 21 20h.2c.2 0 .3.1.5.1s.3 0 .5-.1h.2c14.5-6.2 20.8-19.4 21-20 .1-.3.2-.5.2-.8V16c0-.9-.6-1.7-1.5-1.9-7.6-1.9-19.3-9.6-19.4-9.7-.1-.1-.2-.1-.4-.2-.1 0-.1 0-.2-.1h-.9c-.1 0-.2.1-.3.1-.1.1-.2.1-.4.2s-11.8 7.8-19.4 9.7c-.7.2-1.3 1-1.3 1.9zm4 1.5c6.7-2.1 15-7.2 18-9.1 3 1.9 11.3 7 18 9.1v20c-1.1 2.1-6.7 12.1-18 17.3-11.3-5.2-16.9-15.2-18-17.3z"
                                fill="#000000"
                                className="fill-[#6c7fd8]"></path>
                              <path
                                d="M28.6 38.4c.4.4.9.6 1.4.6s1-.2 1.4-.6l9.9-9.9c.8-.8.8-2 0-2.8s-2-.8-2.8 0L30 34.2l-4.5-4.5c-.8-.8-2-.8-2.8 0s-.8 2 0 2.8z"
                                fill="#000000"
                                className="fill-[#6c7fd8]"></path>
                            </g>
                          </svg>
                          Offers
                        </>
                      ),
                      url: "Offers.html",
                    },
                  ]}
                />
                <div className="bb-main-menu-desk py-[5px] max-[991px]:hidden">
                  <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
                    <div className="flex flex-wrap w-full">
                      <div className="flex justify-start">
                        {themeConfig.theme === "light" ? (
                          <button
                            className={`${
                              themeConfig.theme === "light" &&
                              "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
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
                              "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
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
                              "flex items-center rounded-full bg-white-light/40 p-2 hover:bg-white-light/90 hover:text-primary dark:bg-dark/40 dark:hover:bg-dark/60"
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
                      <div className="dropdown flex justify-start shrink-0 ml-2">
                        <Dropdown
                          offset={[0, 8]}
                          placement={`${isRtl ? "bottom-start" : "bottom-end"}`}
                          btnClassName="block p-2 rounded-full bg-white-light/40 dark:bg-dark/40 hover:text-primary hover:bg-white-light/90 dark:hover:bg-dark/60"
                          button={<div className="h-5 w-5 rounded-full ">{t(i18n.language)}</div>}>
                          <ul className="grid  gap-2 !px-2 font-semibold text-dark dark:text-white-dark dark:text-white-light/90">
                            {themeConfig.languageList.map((item: any) => {
                              return (
                                <li key={item.code}>
                                  <button
                                    type="button"
                                    className={`w-full hover:text-primary ${i18n.language === item.code ? "bg-primary/10 text-primary" : ""}`}
                                    onClick={() => {
                                      initLocale(item.code);
                                      i18n.changeLanguage(item.code);
                                      setLocale(item.code);
                                      dispatch(toggleRTL(item.code !== "en" ? "rtl" : "ltr"));
                                    }}>
                                    <span className="ltr:ml-3 rtl:mr-3">{t(item.name)}</span>
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
