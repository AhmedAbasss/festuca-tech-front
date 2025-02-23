import React from "react";

const Wishlist: React.FC = () => {
  return (
    <section className="section-wishlist py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px] bb-wish-rightside">
          {[
            {
              id: 1,
              flag: "New",
              mainImg: "assets/images/gpu.webp",
              hoverImg: "assets/images/gpu.webp",
              category: "Chocos",
              title: "Mixed Fruits Chocolates Pack",
              newPrice: "$25",
              oldPrice: "$30",
              quantity: "1 Pack",
            },
            {
              id: 2,
              flag: "Hot",
              mainImg: "assets/images/gpu.webp",
              hoverImg: "assets/images/gpu.webp",
              category: "Juice",
              title: "Organic Apple Juice Pack",
              newPrice: "$15",
              itemLeft: "3 Left",
              quantity: "100 ml",
            },
            {
              id: 3,
              mainImg: "assets/images/gpu.webp",
              hoverImg: "assets/images/gpu.webp",
              category: "Juice",
              title: "Mixed Almond nuts juice Pack",
              newPrice: "$32",
              oldPrice: "$39",
              quantity: "250 g",
            },
            {
              id: 4,
              flag: "Sale",
              mainImg: "assets/images/gpu.webp",
              hoverImg: "assets/images/gpu.webp",
              category: "Fruits",
              title: "Fresh Mango Slice Juice",
              newPrice: "$25",
              itemLeft: "Out Of Stock",
            },
          ].map((product) => (
            <div key={product.id} className="min-[992px]:w-[25%] min-[768px]:w-[50%] w-full px-[12px] mb-[24px] bb-wishlist">
              <div className="bb-pro-box bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[20px]">
                <div className="bb-pro-img overflow-hidden relative border-b-[1px] border-solid border-[#eee] z-[4]">
                  <span className="bb-remove-wish absolute right-[15px] top-[15px] z-[10]">
                    <a href="javascript:void(0)">
                      <i className="ri-close-circle-fill transition-all duration-[0.3s] ease-in-out text-[22px] text-[#686e7d] hover:text-[#6c7fd8]"></i>
                    </a>
                  </span>
                  {product.flag && (
                    <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
                      <span className="text-[14px] text-[#777] font-medium uppercase">{product.flag}</span>
                    </span>
                  )}
                  <a href="javascript:void(0)">
                    <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
                      <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src={product.mainImg} alt={`product-${product.id}`} />
                      <img
                        className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                        src={product.hoverImg}
                        alt={`product-${product.id}`}
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
                      {product.category}
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
                      {product.title}
                    </a>
                  </h4>
                  <div className="bb-price flex flex-wrap justify-between">
                    <div className="inner-price mx-[-3px]">
                      <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">{product.newPrice}</span>
                      {product.oldPrice && <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">{product.oldPrice}</span>}
                      {product.itemLeft && <span className="item-left px-[3px] text-[14px] text-[#6c7fd8]">{product.itemLeft}</span>}
                    </div>
                    {product.quantity && <span className="last-items text-[14px] text-[#686e7d]">{product.quantity}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Wishlist;
