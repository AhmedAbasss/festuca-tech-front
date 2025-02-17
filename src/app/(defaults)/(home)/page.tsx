"use client";
import React, { useEffect } from "react";
import { Features } from "./_components/_Features";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import { Section1Products } from "./_components/_Section1Products";
import { Section2Products } from "./_components/_Section2Products";
import { Section1 } from "./_components/_Section1";
import { Categories } from "./_components/_Categories";
import BannerSection from "./_components/_Banner";
import Banner2 from "./_components/_Banner2";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });
  return (
    <div className="overflow-hidden">
      <Section1 />
      <Categories />
      <Section1Products />
      <BannerSection />
      <Banner2 />
      <Section2Products />
      <Features />
    </div>
  );
};

export default Page;
