import React from "react";
import Link from "next/link";
import { ProductItem } from "@/components/common/productItem";

const exampleData = [
  {
    title: "Geforce RTX 3060 ventus 2x",
    description: "High-quality wireless headphones with noise cancellation and long battery life.",
    url: "/gg",
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
    url: "/gg",
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
    url: "/gg",
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
    url: "/gg",
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
    url: "/gg",
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

const RelatedProducts: React.FC = () => {
  return (
    <section className="section-related-product py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="section-title mb-[20px] pb-[20px] z-[5] relative flex flex-col items-center text-center max-[991px]:pb-[0]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="section-detail max-[991px]:mb-[12px]">
                <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                  Related <span className="text-[#6c7fd8]">Product</span>
                </h2>
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Browse The Collection of Top Products.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full px-[12px]">
            <div className="bb-deal-slider m-[-12px]">
              <div className="flex flex-wrap mx-[-12px] mb-[-24px]">
                <div
                  className="min-[1200px]:w-[20%] min-[992px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200">
                  <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                    <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                      <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                        <span className="text-[14px] text-[#777] font-medium uppercase">New</span>
                      </span>
                      <a href="javascript:void(0)">
                        <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                          <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="assets/img/product/1.jpg" alt="product-1" />
                          <img
                            className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                            src="assets/img/product/back-1.jpg"
                            alt="product-1"
                          />
                        </div>
                      </a>
                      <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="compare.html" title="Compare" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Add To Cart" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-[20px]">
                      <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
                          Chocos
                        </a>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                        <a
                          href="product-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
                          Mixed Fruits Chocolates Pack
                        </a>
                      </h4>
                      <div className="bb-price flex flex-wrap justify-between">
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$25</span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">$30</span>
                        </div>
                        <span className="last-items text-[14px] text-[#686e7d]">1 Pack</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="min-[1200px]:w-[20%] min-[992px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400">
                  <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                    <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                      <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                        <span className="text-[14px] text-[#777] font-medium uppercase">Hot</span>
                      </span>
                      <a href="javascript:void(0)">
                        <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                          <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="assets/img/product/2.jpg" alt="product-2" />
                          <img
                            className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                            src="assets/img/product/back-2.jpg"
                            alt="product-2"
                          />
                        </div>
                      </a>
                      <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="compare.html" title="Compare" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Add To Cart" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-[20px]">
                      <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
                          Juice
                        </a>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                        <a
                          href="product-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
                          Organic Apple Juice Pack
                        </a>
                      </h4>
                      <div className="bb-price flex flex-wrap justify-between">
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$15</span>
                          <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">3 Left</span>
                        </div>
                        <span className="last-items text-[14px] text-[#686e7d]">100 ml</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="min-[1200px]:w-[20%] min-[992px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600">
                  <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                    <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                      <a href="javascript:void(0)">
                        <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                          <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="assets/img/product/3.jpg" alt="product-3" />
                          <img
                            className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                            src="assets/img/product/back-3.jpg"
                            alt="product-3"
                          />
                        </div>
                      </a>
                      <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="compare.html" title="Compare" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Add To Cart" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-[20px]">
                      <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
                          Juice
                        </a>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                        <a
                          href="product-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
                          Mixed Almond nuts juice Pack
                        </a>
                      </h4>
                      <div className="bb-price flex flex-wrap justify-between">
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$32</span>
                          <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">$39</span>
                        </div>
                        <span className="last-items text-[14px] text-[#686e7d]">250 g</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="min-[1200px]:w-[20%] min-[992px]:w-[25%] min-[768px]:w-[33.33%] w-[50%] max-[480px]:w-full px-[12px] mb-[24px] pro-bb-content"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800">
                  <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                    <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                      <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                        <span className="text-[14px] text-[#777] font-medium uppercase">Sale</span>
                      </span>
                      <a href="javascript:void(0)">
                        <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                          <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="assets/img/product/4.jpg" alt="product-4" />
                          <img
                            className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                            src="assets/img/product/back-4.jpg"
                            alt="product-4"
                          />
                        </div>
                      </a>
                      <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="compare.html" title="Compare" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-repeat-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
                          <a href="javascript:void(0)" title="Add To Cart" className="w-[35px] h-[35px] flex items-center justify-center">
                            <i className="ri-shopping-bag-4-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-[20px]">
                      <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[13px] leading-[16px] text-[#777] font-light tracking-[0.03rem]">
                          Fruits
                        </a>
                        <span className="bb-pro-rating">
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-fill float-left text-[15px] mr-[3px] leading-[18px] text-[#fea99a]"></i>
                          <i className="ri-star-line float-left text-[15px] mr-[3px] leading-[18px] text-[#777]"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-[8px] text-[16px] leading-[18px]">
                        <a
                          href="product-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-[15px] leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
                          Fresh Mango Slice Juice
                        </a>
                      </h4>
                      <div className="bb-price flex flex-wrap justify-between">
                        <div className="inner-price mx-[-3px]">
                          <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">$25</span>
                          <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">Out Of Stock</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="w-full">
            <div className="bb-shop-pro-inner">
              <div className="flex flex-wrap mx-[-12px] mb-[-24px]">
                {/* <div className="w-full px-[12px]">
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
                </div> */}

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

export default RelatedProducts;
