"use client";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import Link from "next/link";
// import image from "@/public/assets/images/image.png";

// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";

// TODO move this component to other file
interface ProductCardProps {
  image: string;
  hoverImage: string;
  label: string;
  category: string;
  title: string;
  newPrice: string;
  oldPrice?: string;
  weight: string;
  rating: number;
  actions: {
    wishlist: () => void;
    quickView: () => void;
    compare: () => void;
    addToCart: () => void;
  };
}
// TODO make it use array of data instead of blocks
const ProductCard: React.FC<ProductCardProps> = ({ image, hoverImage, label, category, title, newPrice, oldPrice, weight, rating, actions }) => {
  return (
    <div className="bb-deal-card p-[12px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
      <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
        <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
          <a href="javascript:void(0)">
            <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
              <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src={image} alt={title} />
              <img className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full" src={hoverImage} alt={title} />
            </div>
          </a>
          <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
            <li className="bb-btn-group">
              <button
                onClick={actions.wishlist}
                className="w-[35px] h-[35px] flex items-center justify-center text-[#777] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]"
                title="Wishlist">
                <i className="ri-heart-line text-[18px]"></i>
              </button>
            </li>
            <li className="bb-btn-group">
              <button
                onClick={actions.quickView}
                className="w-[35px] h-[35px] flex items-center justify-center text-[#777] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]"
                title="Quick View">
                <i className="ri-eye-line text-[18px]"></i>
              </button>
            </li>
            <li className="bb-btn-group">
              <button
                onClick={actions.compare}
                className="w-[35px] h-[35px] flex items-center justify-center text-[#777] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]"
                title="Compare">
                <i className="ri-repeat-line text-[18px]"></i>
              </button>
            </li>
            <li className="bb-btn-group">
              <button
                onClick={actions.addToCart}
                className="w-[35px] h-[35px] flex items-center justify-center text-[#777] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]"
                title="Add To Cart">
                <i className="ri-shopping-bag-4-line text-[18px]"></i>
              </button>
            </li>
          </ul>
        </div>
        <div className="bb-pro-contact p-[20px]">
          <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
            <span className="font-light text-[13px] text-[#777]">{category}</span>
            <span className="bb-pro-rating">
              {Array.from({ length: 5 }, (_, i) => (
                <i key={i} className={`${i < rating ? "ri-star-fill text-[#fea99a]" : "ri-star-line text-[#777]"} text-[15px]`}></i>
              ))}
            </span>
          </div>
          <h4 className="bb-pro-title mb-[8px] text-[16px]">
            <a href="#" className="font-semibold text-[#3d4750]">
              {title}
            </a>
          </h4>
          <div className="bb-price flex justify-between">
            <div>
              <span className="new-price text-[16px] font-bold text-[#686e7d]">{newPrice}</span>
              {oldPrice && <span className="old-price text-[14px] text-[#686e7d] line-through ml-[4px]">{oldPrice}</span>}
            </div>
            <span className="last-items text-[14px] text-[#686e7d]">{weight}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DealSection2 = () => {
  const themeConfig = useSelector((state: IRootState) => state.themeConfig);
  const isRtl = themeConfig.rtlClass === "rtl" ? true : false;
  const isDark = themeConfig.isDarkMode;
  return (
    <section className="section-deal overflow-hidden py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div
              className="section-title bb-deal mb-[20px] pb-[20px] relative flex justify-between max-[991px]:pb-[0] max-[991px]:flex-col max-[991px]:justify-center max-[991px]:text-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="section-detail max-[991px]:mb-[12px]">
                <h2 className="bb-title font-quicksand mb-[0] p-[0] text-[25px] font-bold text-[#3d4750] relative inline capitalize leading-[1] tracking-[0.03rem] max-[767px]:text-[23px]">
                  Day of the <span className="text-[#6c7fd8]">deal</span>
                </h2>
                <p className="font-Poppins max-w-[400px] mt-[10px] text-[14px] text-[#686e7d] leading-[18px] font-light tracking-[0.03rem] max-[991px]:mx-[auto]">
                  Don't wait. The time will never be just right.
                </p>
              </div>
              {/* <div id="dealend" className="dealend-timer"></div> */}
            </div>
          </div>
          <div className="w-full px-3">
            <div className="bb-deal-slider -m-3">
              <div className="bb-deal-block owl-carousel flex">
                {/* Product Card */}
                <ProductCard
                  image="/assets/images/image.png"
                  hoverImage="assets/img/product/back-3.jpg"
                  label="New"
                  category="Juice"
                  title="Mixed Almond nuts juice Pack"
                  newPrice="$32"
                  oldPrice="$39"
                  weight="250 g"
                  rating={4}
                  actions={{
                    wishlist: () => console.log("Added to wishlist"),
                    quickView: () => console.log("Quick view clicked"),
                    compare: () => console.log("Compare clicked"),
                    addToCart: () => console.log("Added to cart"),
                  }}
                />
                <ProductCard
                  image="/assets/images/image.png"
                  hoverImage="assets/img/product/back-3.jpg"
                  label="New"
                  category="Juice"
                  title="Mixed Almond nuts juice Pack"
                  newPrice="$32"
                  oldPrice="$39"
                  weight="250 g"
                  rating={4}
                  actions={{
                    wishlist: () => console.log("Added to wishlist"),
                    quickView: () => console.log("Quick view clicked"),
                    compare: () => console.log("Compare clicked"),
                    addToCart: () => console.log("Added to cart"),
                  }}
                />
                <ProductCard
                  image="/assets/images/image.png"
                  hoverImage="assets/img/product/back-3.jpg"
                  label="New"
                  category="Juice"
                  title="Mixed Almond nuts juice Pack"
                  newPrice="$32"
                  oldPrice="$39"
                  weight="250 g"
                  rating={4}
                  actions={{
                    wishlist: () => console.log("Added to wishlist"),
                    quickView: () => console.log("Quick view clicked"),
                    compare: () => console.log("Compare clicked"),
                    addToCart: () => console.log("Added to cart"),
                  }}
                />
                <ProductCard
                  image="/assets/images/image.png"
                  hoverImage="assets/img/product/back-3.jpg"
                  label="New"
                  category="Juice"
                  title="Mixed Almond nuts juice Pack"
                  newPrice="$32"
                  oldPrice="$39"
                  weight="250 g"
                  rating={4}
                  actions={{
                    wishlist: () => console.log("Added to wishlist"),
                    quickView: () => console.log("Quick view clicked"),
                    compare: () => console.log("Compare clicked"),
                    addToCart: () => console.log("Added to cart"),
                  }}
                />
                {/* <ProductCard
                  image="/assets/images/image.png"
                  hoverImage="/assets/images/abouts.png"
                  label="New"
                  category="Juice"
                  title="Mixed Almond nuts juice Pack"
                  newPrice="$32"
                  oldPrice="$39"
                  weight="250 g"
                  rating={4}
                  actions={{
                    wishlist: () => console.log("Added to wishlist"),
                    quickView: () => console.log("Quick view clicked"),
                    compare: () => console.log("Compare clicked"),
                    addToCart: () => console.log("Added to cart"),
                  }}
                /> */}
                {/* <div className="bb-deal-card p-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="bb-pro-box bg-white border border-solid border-gray-200 rounded-2xl">
                    <div className="bb-pro-img relative border-b border-solid border-gray-200 overflow-hidden rounded-t-2xl">
                      <span className="flags absolute top-2 left-1.5 z-5">
                        <span className="text-xs text-gray-500 font-medium uppercase">New</span>
                      </span>
                      <a href="#">
                        <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="/assets/images/image.png" alt="product-1" />
                      </a>
                      <ul className="bb-pro-actions absolute left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition duration-300">
                        <li className="bb-btn-group">
                          <button title="Wishlist" className="action-btn">
                            <i className="ri-heart-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Quick View" className="action-btn">
                            <i className="ri-eye-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <a href="compare.html" title="Compare" className="action-btn">
                            <i className="ri-repeat-line text-lg text-gray-500"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Add To Cart" className="action-btn">
                            <i className="ri-shopping-bag-4-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-5">
                      <div className="bb-pro-subtitle flex justify-between mb-2">
                        <a href="#" className="text-xs text-gray-500 font-light">
                          Chocos
                        </a>
                        <span className="bb-pro-rating">
                          {[...Array(4)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-sm text-[#fea99a]"></i>
                          ))}
                          <i className="ri-star-line text-sm text-gray-500"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-2 text-base font-semibold text-gray-800">
                        <a href="#">Mixed Fruits Chocolates Pack</a>
                      </h4>
                      <div className="bb-price flex justify-between">
                        <div>
                          <span className="new-price text-lg font-bold text-gray-700">$25</span>
                          <span className="old-price text-sm text-gray-500 line-through ml-2">$30</span>
                        </div>
                        <span className="last-items text-sm text-gray-500">1 Pack</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bb-deal-card p-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="bb-pro-box bg-white border border-solid border-gray-200 rounded-2xl">
                    <div className="bb-pro-img relative border-b border-solid border-gray-200 overflow-hidden rounded-t-2xl">
                      <span className="flags absolute top-2 left-1.5 z-5">
                        <span className="text-xs text-gray-500 font-medium uppercase">New</span>
                      </span>
                      <a href="#">
                        <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="/assets/images/image.png" alt="product-1" />
                      </a>
                      <ul className="bb-pro-actions absolute left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition duration-300">
                        <li className="bb-btn-group">
                          <button title="Wishlist" className="action-btn">
                            <i className="ri-heart-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Quick View" className="action-btn">
                            <i className="ri-eye-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <a href="compare.html" title="Compare" className="action-btn">
                            <i className="ri-repeat-line text-lg text-gray-500"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Add To Cart" className="action-btn">
                            <i className="ri-shopping-bag-4-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-5">
                      <div className="bb-pro-subtitle flex justify-between mb-2">
                        <a href="#" className="text-xs text-gray-500 font-light">
                          Chocos
                        </a>
                        <span className="bb-pro-rating">
                          {[...Array(4)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-sm text-[#fea99a]"></i>
                          ))}
                          <i className="ri-star-line text-sm text-gray-500"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-2 text-base font-semibold text-gray-800">
                        <a href="#">Mixed Fruits Chocolates Pack</a>
                      </h4>
                      <div className="bb-price flex justify-between">
                        <div>
                          <span className="new-price text-lg font-bold text-gray-700">$25</span>
                          <span className="old-price text-sm text-gray-500 line-through ml-2">$30</span>
                        </div>
                        <span className="last-items text-sm text-gray-500">1 Pack</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bb-deal-card p-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                  <div className="bb-pro-box bg-white border border-solid border-gray-200 rounded-2xl">
                    <div className="bb-pro-img relative border-b border-solid border-gray-200 overflow-hidden rounded-t-2xl">
                      <span className="flags absolute top-2 left-1.5 z-5">
                        <span className="text-xs text-gray-500 font-medium uppercase">New</span>
                      </span>
                      <a href="#">
                        <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src="/assets/images/image.png" alt="product-1" />
                      </a>
                      <ul className="bb-pro-actions absolute left-0 right-0 bottom-0 flex items-center justify-center opacity-0 transition duration-300">
                        <li className="bb-btn-group">
                          <button title="Wishlist" className="action-btn">
                            <i className="ri-heart-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Quick View" className="action-btn">
                            <i className="ri-eye-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                        <li className="bb-btn-group">
                          <a href="compare.html" title="Compare" className="action-btn">
                            <i className="ri-repeat-line text-lg text-gray-500"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <button title="Add To Cart" className="action-btn">
                            <i className="ri-shopping-bag-4-line text-lg text-gray-500"></i>
                          </button>
                        </li>
                      </ul>
                    </div>
                    <div className="bb-pro-contact p-5">
                      <div className="bb-pro-subtitle flex justify-between mb-2">
                        <a href="#" className="text-xs text-gray-500 font-light">
                          Chocos
                        </a>
                        <span className="bb-pro-rating">
                          {[...Array(4)].map((_, i) => (
                            <i key={i} className="ri-star-fill text-sm text-[#fea99a]"></i>
                          ))}
                          <i className="ri-star-line text-sm text-gray-500"></i>
                        </span>
                      </div>
                      <h4 className="bb-pro-title mb-2 text-base font-semibold text-gray-800">
                        <a href="#">Mixed Fruits Chocolates Pack</a>
                      </h4>
                      <div className="bb-price flex justify-between">
                        <div>
                          <span className="new-price text-lg font-bold text-gray-700">$25</span>
                          <span className="old-price text-sm text-gray-500 line-through ml-2">$30</span>
                        </div>
                        <span className="last-items text-sm text-gray-500">1 Pack</span>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div className="bb-deal-card p-[12px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
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
                <div className="bb-deal-card p-[12px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
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
                <div className="bb-deal-card p-[12px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
