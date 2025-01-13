"use client";
import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

export const Categories = () => {
  // const options = {
  //   margin: 30,
  //   responsiveClass: true,
  //   nav: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 1000,
  //   navText: ["<", ">"],
  //   responsive: {
  //     0: {
  //       items: 1,
  //     },
  //     600: {
  //       items: 2,
  //     },
  //     1000: {
  //       items: 3,
  //     },
  //   },
  // };

  // useEffect(() => {
  //   AOS.init();
  // }, []);

  return (
    <section className="section-category pt-[50px] max-[1199px]:pt-[35px] mb-[24px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="bb-category-6-colum owl-carousel">
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="200">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/1.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      vegetables
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">485 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="400">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/2.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Fruits
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="600">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/3.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Cold Drinks
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">49 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-4 bg-[#fbf9e4]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="800">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/4.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Bakery
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">08 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="400">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/2.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Fruits
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="600">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/3.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Cold Drinks
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">49 items</p>
                </div>
              </div>
            </div>
            {/* <OwlCarousel className="owl-theme" {...options}>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-1 bg-[#fef1f1]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="200">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/1.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      vegetables
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">485 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="400">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/2.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Fruits
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="600">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/3.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Cold Drinks
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">49 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-4 bg-[#fbf9e4]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="800">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/4.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Bakery
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">08 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-2 bg-[#e1fcf2]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="400">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/2.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Fruits
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">291 items</p>
                </div>
              </div>
              <div
                className="bb-category-box p-[30px] rounded-[20px] flex flex-col items-center text-center max-[1399px]:p-[20px] category-items-3 bg-[#f4f1fe]"
                data-aos="flip-left"
                data-aos-duration="1000"
                data-aos-delay="600">
                <div className="category-image mb-[12px]">
                  <img
                    src="assets/img/category/3.svg"
                    alt="category"
                    className="w-[50px] h-[50px] max-[1399px]:h-[65px] max-[1399px]:w-[65px] max-[1199px]:h-[50px] max-[1199px]:w-[50px]"
                  />
                </div>
                <div className="category-sub-contact">
                  <h5 className="mb-[2px] text-[16px] font-quicksand text-[#3d4750] font-semibold tracking-[0.03rem] leading-[1.2]">
                    <a href="shop-left-sidebar-col-3.html" className="font-Poppins text-[16px] font-medium leading-[1.2] tracking-[0.03rem] text-[#3d4750] capitalize">
                      Cold Drinks
                    </a>
                  </h5>
                  <p className="font-Poppins text-[13px] text-[#686e7d] leading-[25px] font-light tracking-[0.03rem]">49 items</p>
                </div>
              </div>
            </OwlCarousel> */}
          </div>
        </div>
      </div>
    </section>
  );
};
