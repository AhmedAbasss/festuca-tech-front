"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import Breadcrumb from "./_components/_Breadcrumb";
import Cart from "./_components/_Cart";
import RelatedProducts from "./_components/_RelatedProducts";

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });

  return (
    <div className="overflow-hidden">
      <Breadcrumb />
      <Cart />
      <RelatedProducts />
    </div>
  );
};

export default Page;
