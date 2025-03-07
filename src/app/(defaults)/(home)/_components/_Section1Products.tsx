"use client";
import { ProductItem } from "@/components/common/productItem";
import React from "react";
import "remixicon/fonts/remixicon.css";

const exampleData = [
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/Products",
    label: "NEW",
    image: "/assets/images/gpu.webp",
    altImage: "/assets/images/gpu.webp",
    category: "GPU",
    price: "$400",
    discount: "20%",
    stock: "available",
    note: "",
    stars: 4,
  },
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/Products",
    label: "NEW",
    image: "/assets/images/gpu.webp",
    altImage: "/assets/images/gpu.webp",
    category: "GPU",
    price: "$400",
    discount: "20%",
    stock: "available",
    note: "",
    stars: 4,
  },
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/Products",
    label: "NEW",
    image: "/assets/images/gpu.webp",
    altImage: "/assets/images/gpu.webp",
    category: "GPU",
    price: "$400",
    discount: "20%",
    stock: "available",
    note: "",
    stars: 4,
  },
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/Products",
    label: "NEW",
    image: "/assets/images/gpu.webp",
    altImage: "/assets/images/gpu.webp",
    category: "GPU",
    price: "$400",
    discount: "20%",
    stock: "available",
    note: "",
    stars: 4,
  },
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/Products",
    label: "NEW",
    image: "/assets/images/gpu.webp",
    altImage: "/assets/images/gpu.webp",
    category: "GPU",
    price: "$400",
    discount: "20%",
    stock: "available",
    note: "",
    stars: 3,
  },
];

export const Section1Products = () => {
  return (
    <section className="section-shop pb-[50px] max-[1199px]:pb-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full px-[12px]">
          <div className="bb-shop-overlay hidden w-full h-screen fixed top-[0] left-[0] bg-[#000000cc]"></div>
          <div className="bb-shop-sidebar transition-all duration-[0.3s] ease-in-out w-[300px] h-screen p-[0] fixed top-[0] left-[0] z-[17] translate-x-[-100%] bg-[#fff] overflow-auto">
            <div className="sidebar-filter-title p-[15px] flex justify-between items-center">
              <h5 className="font-quicksand text-[18px] font-bold tracking-[0.03rem] leading-[1.2] text-[#3d4750]">Filters</h5>
              <a
                className="filter-close transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[22px] font-medium text-[#ff0000]"
                href="javascript:void(0)">
                ×
              </a>
            </div>
            <div className="bb-shop-wrap border-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
              <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
                <div className="bb-sidebar-title mb-[20px]">
                  <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">Category</h3>
                </div>
                <div className="bb-sidebar-contact">
                  <ul>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          clothes
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Bags
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Shoes
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Cosmetics
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Electrics
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Phone
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          Watch
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
                <div className="bb-sidebar-title mb-[20px]">
                  <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">Weight</h3>
                </div>
                <div className="bb-sidebar-contact">
                  <ul>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          200gm pack
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          500gm pack
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          1kg pack
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block mb-[14px]">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          5kg pack
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                    <li className="relative block">
                      <div className="bb-sidebar-block-item relative">
                        <input type="checkbox" className="w-full h-[calc(100%-5px)] absolute opacity-[0] cursor-pointer z-[999] top-[50%] left-[0] translate-y-[-50%]" />
                        <a href="javascript:void(0)" className="ml-[30px] block text-[#777] text-[14px] leading-[20px] font-normal capitalize cursor-pointer">
                          10kg pack
                        </a>
                        <span className="checked absolute top-[0] left-[0] h-[18px] w-[18px] bg-[#fff] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[5px] overflow-hidden"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
                <div className="bb-sidebar-title mb-[20px]">
                  <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">Color</h3>
                </div>
                <div className="bb-color-contact">
                  <ul>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px] color-sidebar-active">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-1 w-[22px] h-[22px] block rounded-[20px] bg-[#c4d6f9]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-2 w-[22px] h-[22px] block rounded-[20px] bg-[#ff748b]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-3 w-[22px] h-[22px] block rounded-[20px] bg-[#000000]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-4 w-[22px] h-[22px] block rounded-[20px] bg-[#2bff4a]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-5 w-[22px] h-[22px] block rounded-[20px] bg-[#ff7c5e]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-6 w-[22px] h-[22px] block rounded-[20px] bg-[#f155ff]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-7 w-[22px] h-[22px] block rounded-[20px] bg-[#ffef00]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-8 w-[22px] h-[22px] block rounded-[20px] bg-[#c89fff]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-9 w-[22px] h-[22px] block rounded-[20px] bg-[#7bfffa]"></span>
                      </div>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out inline-block p-[2px] rounded-[20px] cursor-pointer mr-[5px] w-[26px] h-[26px]">
                      <div className="bb-sidebar-block-item relative">
                        <span className="pro-color-10 w-[22px] h-[22px] block rounded-[20px] bg-[#56ffc1]"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bb-sidebar-block p-[20px] border-b-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
                <div className="bb-sidebar-title mb-[20px]">
                  <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">Price</h3>
                </div>
                <div className="bb-price-range">
                  <div className="price-range-slider relative w-full mb-[7px]">
                    <p className="range-value m-[0]">
                      <input
                        type="text"
                        id="amount"
                        className="w-full bg-[#fff] text-[#000] text-[16px] mb-[15px] font-initial border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  p-[10px] text-center outline-[0] rounded-[10px]"
                      />
                    </p>
                    <div id="slider-range" className="range-bar"></div>
                  </div>
                </div>
              </div>
              <div className="bb-sidebar-block p-[20px]">
                <div className="bb-sidebar-title mb-[20px]">
                  <h3 className="font-quicksand text-[18px] tracking-[0.03rem] leading-[1.2] font-bold text-[#3d4750]">Tags</h3>
                </div>
                <div className="bb-tags">
                  <ul className="flex flex-wrap m-[-5px]">
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Clothes
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Fruits
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Snacks
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Dairy
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Seafood
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Toys
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        perfume
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        jewelry
                      </a>
                    </li>
                    <li className="transition-all duration-[0.3s] ease-in-out m-[5px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] rounded-[10px] hover:bg-[#6c7fd8] cursor-pointer">
                      <a href="javascript:void(0)" className="font-Poppins text-[13px] capitalize font-light leading-[28px] tracking-[0.03rem] text-[#686e7d]">
                        Bags
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="bb-shop-pro-inner">
              <div className="flex flex-wrap mx-[-12px] mb-[-24px]">
                <div className="w-full px-[12px]">
                  <div className="bb-pro-list-top my-[24px] rounded-[20px] flex bg-primary-light dark:bg-secondary-dark border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  justify-between">
                    <div className="flex flex-wrap w-full">
                      <div className="w-[50%] px-[12px] max-[420px]:w-full">
                        <div className="bb-bl-btn py-[10px] flex max-[420px]:justify-center">
                          <button
                            type="button"
                            className="grid-btn btn-filter h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent mr-[5px]"
                            title="filter">
                            <i className="ri-equalizer-2-line text-[20px]"></i>
                          </button>
                          <button
                            type="button"
                            className="grid-btn btn-grid-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent mr-[5px] active"
                            title="grid">
                            <i className="ri-apps-line text-[20px]"></i>
                          </button>
                          <button type="button" className="grid-btn btn-list-100 h-[38px] w-[38px] flex justify-center items-center border-[0] p-[5px] bg-transparent" title="grid">
                            <i className="ri-list-unordered text-[20px]"></i>
                          </button>
                        </div>
                      </div>
                      <div className="w-[50%] px-[12px] max-[420px]:w-full">
                        <div className="bb-select-inner h-full py-[10px] flex items-center justify-end max-[420px]:justify-center">
                          <div className="custom-select w-[130px] mr-[30px] flex justify-end text-[#777]  items-center text-[14px] relative max-[420px]:w-[100px] max-[420px]:justify-left">
                            <select>
                              <option selected disabled>
                                Sort by
                              </option>
                              <option value="1">Position</option>
                              <option value="2">Relevance</option>
                              <option value="3">Name, A to Z</option>
                              <option value="4">Name, Z to A</option>
                              <option value="5">Price, low to high</option>
                              <option value="6">Price, high to low</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {exampleData.map((item) => (
                  <ProductItem
                    data={{
                      title: item.title,
                      description: item.description,
                      url: item.url,
                      label: item.label,
                      image: item.image,
                      altImage: item.altImage,
                      category: item.category,
                      price: item.price,
                      discount: item.discount,
                      stock: item.stock,
                      note: item.note,
                      stars: item.stars,
                    }}
                  />
                ))}

                <div className="w-full px-[12px]">
                  <div className="bb-pro-pagination mb-[24px] flex justify-between max-[575px]:flex-col max-[575px]:items-center">
                    <p className="font-Poppins text-[15px] text-[#686e7d] font-light leading-[28px] tracking-[0.03rem] max-[575px]:mb-[10px]">Showing 1-12 of 21 item(s)</p>
                    <ul className="flex">
                      <li className="leading-[28px] mr-[6px] active">
                        <a
                          href="javascript:void(0)"
                          className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-primary-light font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  hover:bg-[#3d4750] hover:text-[#fff]">
                          1
                        </a>
                      </li>
                      <li className="leading-[28px] mr-[6px]">
                        <a
                          href="javascript:void(0)"
                          className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-primary-light font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  hover:bg-[#3d4750] hover:text-[#fff]">
                          2
                        </a>
                      </li>
                      <li className="leading-[28px] mr-[6px]">
                        <a
                          href="javascript:void(0)"
                          className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-primary-light font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  hover:bg-[#3d4750] hover:text-[#fff]">
                          3
                        </a>
                      </li>
                      <li className="leading-[28px] mr-[6px]">
                        <a
                          href="javascript:void(0)"
                          className="transition-all duration-[0.3s] ease-in-out w-[32px] h-[32px] font-light text-[#777] leading-[32px] bg-primary-light font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D]  hover:bg-[#3d4750] hover:text-[#fff]">
                          4
                        </a>
                      </li>
                      <li className="leading-[28px]">
                        <a
                          href="javascript:void(0)"
                          className="next transition-all duration-[0.3s] ease-in-out w-[auto] h-[32px] px-[13px] font-light text-[#fff] leading-[30px] bg-[#3d4750] font-Poppins tracking-[0.03rem] text-[15px] flex text-center align-top justify-center items-center rounded-[10px] border-[1px] border-solid border-[#eee] dark:border-[#494E5D] ">
                          Next <i className="ri-arrow-right-s-line transition-all duration-[0.3s] ease-in-out ml-[10px] text-[16px] w-[8px] text-[#fff]"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
