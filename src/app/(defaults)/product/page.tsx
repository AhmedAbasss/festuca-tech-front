"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPageTitle } from "@/store/themeConfigSlice";
import { useTranslation } from "react-i18next";
import Breadcrumb from "./_components/_Breadcrumb";
import ProductComponent from "./_components/_Product";

const sampleProduct = {
  name: "Smartphone XYZ",
  rating: 4,
  price: 499,
  discount: 10,
  originalPrice: 550,
  sku: "XYZ-12345",
  stockStatus: "In Stock",
  description: "A high-quality smartphone with the latest features.",
  details: ["6.5-inch OLED Display", "128GB Storage", "5G Connectivity"],
  information: [
    { label: "Brand", value: "XYZ" },
    { label: "Warranty", value: "1 Year" },
  ],
  reviews: [
    {
      name: "John Doe",
      rating: 5,
      comment: "Excellent product!",
      image: "/assets/images/gpu.webp",
    },
    {
      name: "Jane Smith",
      rating: 4,
      comment: "Good value for money.",
      image: "/assets/images/gpu.webp",
    },
  ],
};

const Page = async () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setPageTitle(t("home")));
  });
  return (
    <div className="overflow-hidden">
      <Breadcrumb />
      <ProductComponent product={sampleProduct} />
    </div>
  );
};

export default Page;
