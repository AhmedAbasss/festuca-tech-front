"use client";
import { PropsWithChildren, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleRTL, toggleTheme, toggleMenu, toggleLayout, toggleAnimation, toggleNavbar, toggleSemidark } from "@/store/themeConfigSlice";
import { IRootState } from "@/store";
import { Toaster } from "sonner";
import Loading from "../layouts/loading";
import { getTranslation } from "../../../ni18n/i18n";

function App({ children }: PropsWithChildren) {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const dispatch = useDispatch();
  const { initLocale } = getTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(toggleTheme(localStorage.getItem("theme") || (themeConfig.theme as any)));
    dispatch(toggleMenu(localStorage.getItem("menu") || themeConfig.menu));
    dispatch(toggleLayout(localStorage.getItem("layout") || themeConfig.layout));
    // TODO: RTL
    // dispatch(toggleRTL(localStorage.getItem('rtlClass') || themeConfig.rtlClass));
    dispatch(toggleRTL("rtl"));
    dispatch(toggleAnimation(localStorage.getItem("animation") || themeConfig.animation));
    dispatch(toggleNavbar(localStorage.getItem("navbar") || themeConfig.navbar));
    dispatch(toggleSemidark(localStorage.getItem("semidark") || themeConfig.semidark));
    // locale
    // initLocale(themeConfig.locale);
    initLocale("ar");

    setIsLoading(false);
  }, [
    dispatch,
    initLocale,
    themeConfig.theme,
    themeConfig.menu,
    themeConfig.layout,
    themeConfig.rtlClass,
    themeConfig.animation,
    themeConfig.navbar,
    themeConfig.locale,
    themeConfig.semidark,
  ]);

  return (
    <>
      {isLoading ? <Loading /> : children}
      <Toaster position={themeConfig.rtlClass == "rtl" ? "bottom-left" : "bottom-right"} />
    </>
  );
}

export default App;
