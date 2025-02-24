"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import Breadcrumb from "./_components/_Breadcrumb";
import AboutUs from "./_components/_AboutUs";
import { Features } from "./_components/_Features";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });

  return (
    <div className="overflow-hidden">
      <Breadcrumb />
      <AboutUs />
      <Features />
    </div>
  );
};

export default Page;
