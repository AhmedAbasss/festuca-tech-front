"use client";
import Link from "next/link";
import React from "react";
import "remixicon/fonts/remixicon.css";

interface dataTypes {
  data: {
    title: string;
    description: string;
    url: string;
    label: string;
    image: string;
    altImage: string;
    category: string;
    price: string;
    discount: string;
    stock: string;
    note: string;
    stars: number;
  };
}

export const ProductItem: React.FC<dataTypes> = ({ data }) => {
  return (
    <div
      className="min-[1200px]:w-[20%] min-[992px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300">
      <div className="bb-pro-box border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[20px]">
        <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D]  z-[4]">
          <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
            <span className="text-[14px] text-[#777] font-medium uppercase">{data?.label}</span>
          </span>
          <Link href={data?.url}>
            <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
              <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src={data?.image} alt="product-1" />
              <img className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src={data?.altImage} alt="product-1" />
            </div>
          </Link>
          <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-primary-light dark:bg-primary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px]">
              <Link href="javascript:void(0)" title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
              </Link>
            </li>
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-primary-light dark:bg-primary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px]">
              <Link href="javascript:void(0)" title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
              </Link>
            </li>
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-primary-light dark:bg-primary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px]">
              <Link href="compare.html" title="Compare" className="w-[35px] h-[35px] flex items-center justify-center">
                <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
              </Link>
            </li>
            <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-primary-light dark:bg-primary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px]">
              <Link href="javascript:void(0)" title="Add To Cart" className="w-[35px] h-[35px] flex items-center justify-center">
                <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
              </Link>
            </li>
          </ul>
        </div>

        <div className="bb-pro-contact p-[20px]">
          <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
            <Link href={data?.url} className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
              {data?.category}
            </Link>

            <Link href={data?.url}>
              <span className="bb-pro-rating">
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={"float-left text-[15px] mr-[3px] leading-[18px] " + (index < data?.stars ? "ri-star-fill text-[#fea99a]" : "ri-star-line text-[#777]")}
                  />
                ))}
              </span>
            </Link>
          </div>
          <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
            <Link
              href={data?.url}
              className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] dark:text-primary-light font-semibold tracking-[0.03rem]">
              {data?.title}
            </Link>
          </h4>
          <p className="hidden font-Poppins text-[14px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem]">{data?.description}</p>
          <div className="bb-price flex flex-wrap justify-between">
            <Link href={data?.url}>
              <div className="inner-price mx-[-3px]">
                <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">{data?.price}</span>
                <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">{data?.discount}</span>
                <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">{data?.stock}</span>
              </div>
              <span className="last-items text-[14px] text-[#686e7d]">{data?.note}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
