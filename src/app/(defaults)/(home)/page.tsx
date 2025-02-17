"use client";
import React, { useEffect } from "react";
import { Features } from "./_components/Features";
import { Categories } from "./_components/categories";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import { Section1 } from "./_components/section1";
import { Section1Products } from "./_components/Section1Products";
import { Section2Products } from "./_components/Section2Products";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });
  return (
    <div className="overflow-hidden">
      {/* <Home /> */}
      <Section1 />
      <Categories />
      <Section1Products />
      <Section2Products />
      {/* <DealSection2 /> */}
      {/* <DealSection /> */}
      <Features />

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
