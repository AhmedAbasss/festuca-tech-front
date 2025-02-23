import React from "react";

const Cart: React.FC = () => {
  return (
    <section className="section-cart py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          {/* Summary Section */}
          <div className="min-[992px]:w-[33.33%] w-full px-[12px] mb-[24px]">
            <div
              className="bb-cart-sidebar-block p-[20px] bg-[#f8f8fb] border-[1px] border-solid border-[#eee] rounded-[20px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200">
              <div className="bb-sb-title mb-[20px]">
                <h3 className="font-quicksand tracking-[0.03rem] leading-[1.2] text-[20px] font-bold text-[#3d4750]">Summary</h3>
              </div>
              <div className="bb-sb-blok-contact">
                <form action="#" method="post">
                  {/* Country Select */}
                  <div className="input-box mb-[30px]">
                    <label className="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]">Country *</label>
                    <div className="custom-select py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] bg-[#fff] leading-[26px]">
                      <select>
                        <option value="option1">Country 1</option>
                        <option value="option2">Country 2</option>
                        <option value="option3">Country 3</option>
                        <option value="option4">Country 4</option>
                        <option value="option5">Country 5</option>
                      </select>
                    </div>
                  </div>
                  {/* State/Province Select */}
                  <div className="input-box mb-[30px]">
                    <label className="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]">State/Province *</label>
                    <div className="custom-select py-[10px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] bg-[#fff] leading-[26px]">
                      <select>
                        <option value="option1">Please Select a region, state</option>
                        <option value="option2">Region/State 1</option>
                        <option value="option3">Region/State 2</option>
                        <option value="option4">Region/State 3</option>
                        <option value="option5">Region/State 4</option>
                        <option value="option6">Region/State 5</option>
                        <option value="option7">Region/State 6</option>
                      </select>
                    </div>
                  </div>
                  {/* Zip/Postal Code Input */}
                  <div className="input-box mb-[30px]">
                    <label htmlFor="Zip-code" className="mb-[12px] inline-block text-[14px] font-medium text-[#3d4750] leading-[26px]">
                      Zip/Postal Code *
                    </label>
                    <input
                      type="text"
                      placeholder="Zip/Postal Code"
                      className="w-full py-[10px] px-[15px] leading-[26px] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px] text-[14px] font-normal text-[#686e7d] bg-[#fff]"
                      id="Zip-code"
                    />
                  </div>
                </form>
                {/* Cart Summary */}
                <div className="bb-cart-summary">
                  <div className="inner-summary">
                    <ul>
                      <li className="mb-[12px] flex justify-between leading-[28px]">
                        <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">Sub-Total</span>
                        <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">$80.00</span>
                      </li>
                      <li className="mb-[12px] flex justify-between leading-[28px]">
                        <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">Delivery Charges</span>
                        <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">$80.00</span>
                      </li>
                      <li className="mb-[12px] flex justify-between leading-[28px]">
                        <span className="text-left font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-medium">Coupon Discount</span>
                        <span className="text-right font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] text-[#686e7d] font-semibold">
                          <a className="bb-coupon drop-coupon font-Poppins leading-[28px] tracking-[0.03rem] text-[14px] font-medium text-[#ff0000] cursor-pointer">Apply Coupon</a>
                        </span>
                      </li>
                      <li className="mb-[12px] flex justify-between leading-[28px]">
                        <div className="coupon-down-box w-full">
                          <form method="post" className="relative mb-[15px]">
                            <input
                              className="bb-coupon w-full p-[10px] text-[14px] font-normal text-[#686e7d] border-[1px] border-solid border-[#eee] outline-[0] rounded-[10px]"
                              type="text"
                              placeholder="Enter Your coupon Code"
                              name="bb-coupon"
                              required
                            />
                            <button
                              className="bb-btn-2 transition-all duration-[0.3s] ease-in-out my-[8px] mr-[8px] flex justify-center items-center absolute right-[0] top-[0] bottom-[0] font-Poppins leading-[28px] tracking-[0.03rem] py-[2px] px-[12px] text-[13px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
                              type="submit">
                              Apply
                            </button>
                          </form>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* Total Amount */}
                  <div className="summary-total border-t-[1px] border-solid border-[#eee] pt-[15px]">
                    <ul className="mb-[0]">
                      <li className="mb-[6px] flex justify-between">
                        <span className="text-left font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">Total Amount</span>
                        <span className="text-right font-Poppins text-[16px] leading-[28px] tracking-[0.03rem] font-semibold text-[#686e7d]">$80.00</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Cart Table Section */}
          <div className="min-[992px]:w-[66.66%] w-full px-[12px] mb-[24px]">
            <div
              className="bb-cart-table border-[1px] border-solid border-[#eee] rounded-[20px] overflow-hidden max-[1399px]:overflow-y-auto"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400">
              <table className="w-full max-[1399px]:w-[780px]">
                <thead>
                  <tr className="border-b-[1px] border-solid border-[#eee]">
                    <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">Product</th>
                    <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">Price</th>
                    <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">Quantity</th>
                    <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize">Total</th>
                    <th className="font-Poppins p-[12px] text-left text-[16px] font-medium text-[#3d4750] leading-[26px] tracking-[0.02rem] capitalize"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Product Rows */}
                  {[
                    {
                      id: 1,
                      image: "assets/images/gpu.webp",
                      name: "Ground Nuts Oil Pack",
                      price: "$15",
                      quantity: 1,
                      total: "$15",
                    },
                    {
                      id: 2,
                      image: "assets/images/gpu.webp",
                      name: "Organic Litchi Juice Pack",
                      price: "$25",
                      quantity: 1,
                      total: "$25",
                    },
                    {
                      id: 3,
                      image: "assets/images/gpu.webp",
                      name: "Crunchy Banana Chips",
                      price: "$12",
                      quantity: 1,
                      total: "$12",
                    },
                    {
                      id: 4,
                      image: "assets/images/gpu.webp",
                      name: "Crunchy Potato Chips",
                      price: "$25",
                      quantity: 1,
                      total: "$25",
                    },
                    {
                      id: 5,
                      image: "assets/images/gpu.webp",
                      name: "Black Pepper Spice pack",
                      price: "$32",
                      quantity: 1,
                      total: "$32",
                    },
                  ].map((product) => (
                    <tr key={product.id} className="border-b-[1px] border-solid border-[#eee]">
                      <td className="p-[12px]">
                        <a href="javascript:void(0)">
                          <div className="Product-cart flex items-center">
                            <img src={product.image} alt={product.name} className="w-[70px] border-[1px] border-solid border-[#eee] rounded-[10px]" />
                            <span className="ml-[10px] font-Poppins text-[14px] font-normal leading-[28px] tracking-[0.03rem] text-[#686e7d]">{product.name}</span>
                          </div>
                        </a>
                      </td>
                      <td className="p-[12px]">
                        <span className="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">{product.price}</span>
                      </td>
                      <td className="p-[12px]">
                        <div className="qty-plus-minus w-[85px] h-[45px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]">
                          <input
                            className="qty-input text-[#777] float-left text-[14px] h-[auto] m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                            type="text"
                            name="bb-qtybtn"
                            value={product.quantity}
                          />
                        </div>
                      </td>
                      <td className="p-[12px]">
                        <span className="price font-Poppins text-[15px] font-medium leading-[26px] tracking-[0.02rem] text-[#686e7d]">{product.total}</span>
                      </td>
                      <td className="p-[12px]">
                        <div className="pro-remove">
                          <a href="javascript:void(0)">
                            <i className="ri-delete-bin-line transition-all duration-[0.3s] ease-in-out text-[20px] text-[#686e7d] hover:text-[#ff0000]"></i>
                          </a>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Checkout Button */}
            <a
              href="checkout.html"
              className="bb-btn-2 mt-[24px] inline-flex items-center justify-center check-btn transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[8px] px-[20px] text-[14px] font-normal text-[#fff] bg-[#6c7fd8] rounded-[10px] border-[1px] border-solid border-[#6c7fd8] hover:bg-transparent hover:border-[#3d4750] hover:text-[#3d4750]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400">
              Check Out
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
