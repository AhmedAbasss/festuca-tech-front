import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

interface Product {
  name: string;
  rating: number;
  price: number;
  discount: number;
  originalPrice: number;
  sku: string;
  stockStatus: string;
  description: string;
  details: string[];
  information: { label: string; value: string }[];
  reviews: { name: string; rating: number; comment: string; image: string }[];
}

interface ProductComponentProps {
  product: Product;
}

const ProductComponent: React.FC<ProductComponentProps> = ({ product }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [nav, setNav] = useState<any>(null);
  let sliderRef = useRef<any>(null);

  useEffect(() => {
    setNav(sliderRef);
  }, []);

  const images = [
    { src: "assets/images/gpu.webp", title: "thing" },
    { src: "assets/images/gpu.webp", title: "thing" },
  ];

  return (
    <section className="section-product py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full">
          <div className="w-full px-[12px]">
            <div className="bb-single-pro mb-[24px]">
              <div className="flex flex-wrap mx-[-12px]">
                <div className="min-[992px]:w-[41.66%] w-full px-[12px] mb-[24px]">
                  <div className="single-pro-slider sticky top-[0] p-[15px] border-[1px] border-solid border-[#eee] rounded-[24px] max-[991px]:max-w-[500px] max-[991px]:m-auto">
                    <div className="single-product-cover">
                      {[...Array(1)].map((_, index) => (
                        <div key={index} className="single-slide zoom-image-hover rounded-tl-[15px] rounded-tr-[15px]">
                          <img
                            className="img-responsive rounded-tl-[15px] rounded-tr-[15px]"
                            // src={`assets/img/new-product/${index + 1}.jpg`}
                            src={`assets/images/gpu.webp`}
                            alt={`product-${index + 1}`}
                          />
                        </div>
                      ))}
                    </div>
                    {/* <div className="single-nav-thumb w-full overflow-hidden flex">
                      {[...Array(3)].map((_, index) => (
                        <div key={index} className="single-slide px-[10px] block">
                          <img
                            className="img-responsive border-[1px] border-solid border-transparent transition-all duration-[0.3s] ease delay-[0s] cursor-pointer rounded-[15px]"
                            // src={`assets/img/new-product/${index + 1}.jpg`}
                            src={`assets/images/gpu.webp`}
                            alt={`product-${index + 1}`}
                          />
                        </div>
                      ))}
                    </div> */}
                    <div className="slider-container flex flex-col gap-1">
                      <Slider
                        asNavFor={nav}
                        ref={(slider) => {
                          sliderRef = slider as any;
                        }}
                        // slidesToShow={3}
                        // swipeToSlide={true}
                        // focusOnSelect={true}

                        {...{
                          infinite: true,
                          speed: 500,
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          rtl: true,
                          adaptiveHeight: true,
                          focusOnSelect: false,
                          swipeToSlide: false,
                          // afterChange: () => setUpdateCount(updateCount + 1),
                          // beforeChange: (current, next) => setSlideIndex(next)
                        }}>
                        {images.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={"single-slide px-[10px] block cursor-pointer"}
                              onClick={() => {
                                (sliderRef as any)?.slickGoTo(index);
                              }}>
                              <img
                                className={
                                  `img-responsive border-[1px] border-solid border-transparent hover:border-primary  transition-all duration-[0.3s] ease delay-[0s] cursor-pointer rounded-xl ` +
                                  { "border-primary  ": slideIndex === index }
                                }
                                src={item.src}
                                alt={item.title}
                              />
                            </div>
                          );
                        })}
                      </Slider>
                    </div>
                  </div>
                </div>
                <div className="min-[992px]:w-[58.33%] w-full px-[12px] mb-[24px]">
                  <div className="bb-single-pro-contact">
                    <div className="bb-sub-title mb-[20px]">
                      <h4 className="font-quicksand text-[22px] tracking-[0.03rem] font-bold leading-[1.2] text-[#3d4750]">{product.name}</h4>
                    </div>
                    <div className="bb-single-rating mb-[12px]">
                      <span className="bb-pro-rating mr-[10px]">
                        {[...Array(5)].map((_, index) => (
                          <i
                            key={index}
                            className={`ri-star-${index < product.rating ? "fill" : "line"} float-left text-[15px] mr-[3px] ${
                              index < product.rating ? "text-[#fea99a]" : "text-[#777]"
                            }`}></i>
                        ))}
                      </span>
                      <span className="bb-read-review">
                        |&nbsp;&nbsp;
                        <a href="#bb-spt-nav-review" className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem] text-[#6c7fd8]">
                          992 Ratings
                        </a>
                      </span>
                    </div>
                    <p className="font-Poppins text-[15px] font-light leading-[28px] tracking-[0.03rem]">{product.description}</p>
                    <div className="bb-single-price-wrap flex justify-between py-[10px]">
                      <div className="bb-single-price py-[15px]">
                        <div className="price mb-[8px]">
                          <h5 className="font-quicksand leading-[1.2] tracking-[0.03rem] text-[20px] font-extrabold text-[#3d4750]">
                            ${product.price} <span className="text-[#3d4750] text-[20px]">-{product.discount}%</span>
                          </h5>
                        </div>
                        <div className="mrp">
                          <p className="font-Poppins text-[16px] font-light text-[#686e7d] leading-[28px] tracking-[0.03rem]">
                            M.R.P. : <span className="text-[15px] line-through">${product.originalPrice}</span>
                          </p>
                        </div>
                      </div>
                      <div className="bb-single-price py-[15px]">
                        <div className="sku mb-[8px]">
                          <h5 className="font-quicksand text-[18px] font-extrabold leading-[1.2] tracking-[0.03rem] text-[#3d4750]">SKU#: {product.sku}</h5>
                        </div>
                        <div className="stock">
                          <span className="text-[18px] text-[#6c7fd8]">{product.stockStatus}</span>
                        </div>
                      </div>
                    </div>
                    <div className="bb-single-list mb-[30px]">
                      <ul className="my-[-8px] pl-[18px]">
                        {product.details.map((detail, index) => (
                          <li key={index} className="my-[8px] font-Poppins text-[14px] font-light leading-[28px] tracking-[0.03rem] text-[#777] list-disc">
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bb-single-pro-weight mb-[24px]">
                      <div className="pro-title mb-[12px]">
                        <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] text-[16px] font-bold uppercase text-[#3d4750]">Weight</h4>
                      </div>
                      <div className="bb-pro-variation-contant">
                        <ul className="flex flex-wrap m-[-2px]">
                          {["250g", "500g", "1kg", "2kg"].map((weight, index) => (
                            <li
                              key={index}
                              className="my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation">
                              <span className="font-Poppins text-[#686e7d] font-light text-[14px] leading-[28px] tracking-[0.03rem]">{weight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="bb-single-qty flex flex-wrap m-[-2px]">
                      <div className="qty-plus-minus m-[2px] w-[85px] h-[40px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]">
                        <input
                          className="qty-input text-[#777] float-left text-[14px] h-auto m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                          type="text"
                          name="bb-qtybtn"
                          value="1"
                        />
                      </div>
                      <div className="buttons m-[2px]">
                        <a
                          href="javascript:void(0)"
                          className="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] flex font-Poppins leading-[28px] tracking-[0.03rem] py-[6px] px-[25px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]">
                          View Cart
                        </a>
                      </div>
                      <ul className="bb-pro-actions my-[2px] flex">
                        <li className="bb-btn-group">
                          <a
                            href="javascript:void(0)"
                            title="heart"
                            className="transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">
                            <i className="ri-heart-line text-[16px] leading-[10px] text-[#777]"></i>
                          </a>
                        </li>
                        <li className="bb-btn-group">
                          <a
                            href="javascript:void(0)"
                            title="Quick View"
                            className="bb-modal-toggle transition-all duration-[0.3s] ease-in-out w-[40px] h-[40px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] hover:bg-[#6c7fd8] border-[1px] border-solid border-[#eee] rounded-[10px]">
                            <i className="ri-eye-line text-[16px] leading-[10px] text-[#777]"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bb-single-pro-tab">
              <div className="bb-pro-tab mb-[24px]">
                <ul className="bb-pro-tab-nav flex flex-wrap mx-[-20px] max-[991px]:justify-center" id="ProTab">
                  <li className="nav-item relative leading-[28px]">
                    <a className="nav-link px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block active" href="#detail">
                      Detail
                    </a>
                  </li>
                  <li className="nav-item relative leading-[28px]">
                    <a className="nav-link px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block" href="#information">
                      Information
                    </a>
                  </li>
                  <li className="nav-item relative leading-[28px]">
                    <a className="nav-link px-[20px] font-Poppins text-[16px] text-[#686e7d] font-medium capitalize leading-[28px] tracking-[0.03rem] block" href="#reviews">
                      Reviews
                    </a>
                  </li>
                </ul>
              </div>
              <div className="tab-content">
                <div className="tab-pro-pane" id="detail">
                  <div className="bb-inner-tabs border-[1px] border-solid border-[#eee] p-[15px] rounded-[20px]">
                    <div className="bb-details">
                      <p className="mb-[12px] font-Poppins text-[#686e7d] leading-[28px] tracking-[0.03rem] font-light">{product.details.join(" ")}</p>
                      <div className="details-info">
                        <ul className="list-disc pl-[20px] mb-[0]">
                          {product.details.map((detail, index) => (
                            <li key={index} className="py-[5px] text-[15px] text-[#686e7d] font-Poppins leading-[28px] font-light">
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tab-pro-pane" id="information">
                  <div className="bb-inner-tabs border-[1px] border-solid border-[#eee] p-[15px] rounded-[20px]">
                    <div className="information">
                      <ul className="list-disc pl-[20px]">
                        {product.information.map((info, index) => (
                          <li key={index} className="font-Poppins text-[15px] font-light tracking-[0.03rem] leading-[28px] text-[#686e7d] py-[5px]">
                            <span className="inline-flex min-w-[130px] font-medium">{info.label}</span> {info.value}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pro-pane" id="reviews">
                  <div className="bb-inner-tabs border-[1px] border-solid border-[#eee] p-[15px] rounded-[20px]">
                    <div className="bb-reviews">
                      {product.reviews.map((review, index) => (
                        <div key={index} className="reviews-bb-box flex mb-[24px] max-[575px]:flex-col">
                          <div className="inner-image mr-[12px] max-[575px]:mr-[0] max-[575px]:mb-[12px]">
                            <img src={review.image} alt={`img-${index + 1}`} className="w-[50px] h-[50px] max-w-[50px] rounded-[10px]" />
                          </div>
                          <div className="inner-contact">
                            <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] mb-[5px] text-[16px] font-bold text-[#3d4750]">{review.name}</h4>
                            <div className="bb-pro-rating flex">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`ri-star-${i < review.rating ? "fill" : "line"} float-left text-[15px] mr-[3px] ${
                                    i < review.rating ? "text-[#fea99a]" : "text-[#777]"
                                  }`}></i>
                              ))}
                            </div>
                            <p className="font-Poppins text-[14px] leading-[26px] font-light tracking-[0.03rem] text-[#686e7d]">{review.comment}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bb-reviews-form">
                      <h3 className="font-quicksand tracking-[0.03rem] leading-[1.2] mb-[8px] text-[20px] font-bold text-[#3d4750]">Add a Review</h3>
                      <div className="bb-review-rating flex mb-[12px]">
                        <span className="pr-[10px] font-Poppins text-[15px] font-semibold leading-[26px] tracking-[0.02rem] text-[#3d4750]">Your ratting :</span>
                        <div className="bb-pro-rating">
                          {[...Array(5)].map((_, index) => (
                            <i key={index} className={`ri-star-${index < 4 ? "fill" : "line"} float-left text-[15px] mr-[3px] ${index < 4 ? "text-[#fea99a]" : "text-[#777]"}`}></i>
                          ))}
                        </div>
                      </div>
                      <form action="#">
                        <div className="input-box mb-[24px]">
                          <input
                            type="text"
                            placeholder="Name"
                            name="your-name"
                            className="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                          />
                        </div>
                        <div className="input-box mb-[24px]">
                          <input
                            type="email"
                            placeholder="Email"
                            name="your-email"
                            className="w-full h-[50px] border-[1px] border-solid border-[#eee] pl-[20px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"
                          />
                        </div>
                        <div className="input-box mb-[24px]">
                          <textarea
                            name="your-comment"
                            placeholder="Enter Your Comment"
                            className="w-full h-[100px] border-[1px] border-solid border-[#eee] py-[20px] pl-[20px] pr-[10px] outline-[0] text-[14px] font-normal text-[#777] rounded-[20px] p-[10px]"></textarea>
                        </div>
                        <div className="input-button">
                          <a
                            href="javascript:void(0)"
                            className="bb-btn-2 transition-all duration-[0.3s] ease-in-out h-[40px] inline-flex font-Poppins leading-[28px] tracking-[0.03rem] py-[4px] px-[15px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]">
                            View Cart
                          </a>
                        </div>
                      </form>
                    </div>
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

export default ProductComponent;
