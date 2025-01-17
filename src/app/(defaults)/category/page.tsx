"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import { Section1 } from "./_components/_section1";
import { Categories } from "./_components/_categories";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });
  return (
    <div className="overflow-hidden">
      <Categories />
      <Section1 />
    </div>
  );
};

export default Page;
