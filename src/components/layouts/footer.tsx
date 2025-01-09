"use client";

import Link from "next/link";

const Footer = () => {
  return (
    // <div className="mt-auto flex justify-between max-md:flex-col-reverse gap-4 items-center p-6 md:px-24  text-center text-white opacity-90 bg-[#054fbf] ">
    //   <div>Open Code All rights reserved © {new Date().getFullYear()}</div>
    //   <div className="flex gap-5 ">
    //     <Link target="_blank" href={"https://www.facebook.com/appNameiq"} className="hover:scale-105 cursor-pointer">
    //       <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_2049_11741)">
    //           <path
    //             fill-rule="evenodd"
    //             clip-rule="evenodd"
    //             d="M24.4847 12.1008C24.4931 5.71043 19.3515 0.523542 13.0014 0.515168C6.64847 0.508227 1.49317 5.6801 1.48474 12.0719C1.47712 17.8456 5.67641 22.6374 11.1716 23.5128L11.1822 15.4279L8.26447 15.424L8.26888 12.0808L11.1895 12.0847L11.1929 9.53341C11.1967 6.63434 12.9164 5.03543 15.5424 5.0389C16.8015 5.04056 18.1163 5.26795 18.1163 5.26795L18.1126 8.11384L16.6623 8.11193C15.2351 8.11005 14.7883 9.00203 14.7871 9.91761L14.7843 12.088L17.9722 12.0922L17.459 15.4347L14.7784 15.4312L14.7677 23.5161C20.2652 22.6552 24.4771 17.8745 24.4847 12.1008Z"
    //             fill="white"
    //             fill-opacity="0.87"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_2049_11741">
    //             <rect width="24" height="24" fill="white" transform="translate(1 0.5) rotate(0.0755606)" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     </Link>
    //     <Link target="_blank" href={"https://www.instagram.com/appNameiq"} className="hover:scale-105 cursor-pointer">
    //       <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path
    //           d="M13.499 1.45982C10.5139 1.45588 10.1385 1.46914 8.96556 1.51984C7.79261 1.57329 6.99349 1.75649 6.29326 2.02782C5.55877 2.30297 4.89325 2.73523 4.34321 3.29437C3.78297 3.84321 3.34901 4.50752 3.07152 5.24107C2.79835 5.93921 2.61167 6.73922 2.5565 7.90789C2.5027 9.08345 2.48846 9.45743 2.48452 12.4467C2.48058 15.4332 2.49383 15.8072 2.54454 16.9801C2.59799 18.1517 2.78119 18.9508 3.05251 19.6511C3.33344 20.3747 3.708 20.9884 4.31907 21.6011C4.92876 22.2138 5.54151 22.5913 6.26439 22.8728C6.96528 23.146 7.76254 23.3326 8.93397 23.3878C10.1081 23.4416 10.4821 23.4559 13.47 23.4598C16.4579 23.4637 16.8305 23.4505 18.0048 23.3998C19.175 23.3463 19.9769 23.1631 20.6771 22.8918C21.4111 22.6165 22.0762 22.1843 22.6258 21.6252C23.2385 21.0142 23.6147 20.4014 23.8975 19.6785C24.1693 18.979 24.356 18.1804 24.4125 17.009C24.4663 15.8362 24.4806 15.4622 24.4845 12.4743C24.4884 9.48644 24.4752 9.11243 24.4245 7.93811C24.371 6.76791 24.1865 5.96742 23.9165 5.26856C23.641 4.53426 23.2088 3.86881 22.6499 3.31851C22.1016 2.75772 21.4371 2.32368 20.7032 2.04682C20.0024 1.77365 19.2024 1.58697 18.0323 1.5318C16.8581 1.478 16.4855 1.46376 13.4963 1.45982L13.5004 1.45982L13.499 1.45982ZM12.5105 3.44127L13.4978 3.44257C16.4348 3.44644 16.7826 3.45653 17.9417 3.51168C19.0141 3.56122 19.5969 3.74211 19.9844 3.8925C20.497 4.09255 20.8639 4.33228 21.2483 4.71779C21.6328 5.1033 21.8702 5.46936 22.0689 5.98387C22.2197 6.37045 22.3976 6.95368 22.4444 8.02625C22.4965 9.18544 22.507 9.53333 22.5031 12.469C22.4993 15.4046 22.4878 15.7538 22.4326 16.9129C22.3831 17.9853 22.2022 18.5667 22.0518 18.9542C21.8748 19.4316 21.5928 19.8631 21.2265 20.2168C20.841 20.6013 20.475 20.8387 19.9605 21.0374C19.5753 21.1881 18.992 21.3661 17.9181 21.4142C16.7589 21.4649 16.411 21.4768 13.474 21.4729C10.537 21.4691 10.1878 21.4562 9.02871 21.4024C7.95628 21.3515 7.37489 21.172 6.98734 21.0202C6.50976 20.8435 6.07786 20.562 5.72342 20.1963C5.3578 19.8411 5.07645 19.4085 4.90009 18.9302C4.75073 18.5437 4.57137 17.9604 4.52466 16.8879C4.47394 15.7287 4.4634 15.3808 4.46727 12.4424C4.47115 9.50542 4.4826 9.15893 4.53638 7.99988C4.5873 6.92745 4.76681 6.34468 4.91858 5.95713C5.11863 5.44452 5.35836 5.07771 5.74387 4.69322C6.12938 4.30873 6.49544 4.07133 7.00995 3.87264C7.3979 3.7219 7.97976 3.54392 9.05232 3.49583C10.0671 3.45042 10.4604 3.43719 12.5105 3.43852L12.5105 3.44127ZM19.3666 5.27631C19.1933 5.27608 19.0216 5.31 18.8613 5.37612C18.7011 5.44225 18.5555 5.53929 18.4327 5.6617C18.31 5.78411 18.2126 5.9295 18.146 6.08956C18.0795 6.24962 18.0451 6.42122 18.0449 6.59457C18.0446 6.76791 18.0786 6.9396 18.1447 7.09984C18.2108 7.26008 18.3078 7.40572 18.4303 7.52846C18.5527 7.65119 18.6981 7.74862 18.8581 7.81516C19.0182 7.88171 19.1898 7.91608 19.3631 7.91631C19.7132 7.91677 20.0491 7.77814 20.297 7.53092C20.5449 7.2837 20.6844 6.94813 20.6849 6.59805C20.6853 6.24796 20.5467 5.91203 20.2995 5.66416C20.0523 5.41629 19.7167 5.27677 19.3666 5.27631ZM13.4933 6.81132C12.7441 6.79864 11.9998 6.93514 11.3038 7.21287C10.6078 7.49061 9.97397 7.90402 9.43928 8.42905C8.90458 8.95408 8.47968 9.58024 8.18929 10.2711C7.89891 10.9619 7.74886 11.7036 7.74787 12.4529C7.74689 13.2023 7.89498 13.9444 8.18354 14.636C8.4721 15.3275 8.89535 15.9548 9.42866 16.4813C9.96196 17.0077 10.5947 17.4228 11.2899 17.7023C11.9852 17.9819 12.7291 18.1204 13.4784 18.1097C14.9615 18.0885 16.3767 17.485 17.4186 16.4295C18.4606 15.3739 19.0457 13.951 19.0476 12.4678C19.0496 10.9847 18.4682 9.5602 17.4291 8.50191C16.3899 7.44363 14.9763 6.83641 13.4933 6.81132ZM13.4907 8.79269C14.4633 8.79397 15.3955 9.18156 16.0823 9.87018C16.7692 10.5588 17.1543 11.4921 17.153 12.4646C17.1517 13.4372 16.7641 14.3695 16.0755 15.0563C15.3869 15.7431 14.4536 16.1282 13.481 16.1269C12.5085 16.1256 11.5762 15.7381 10.8894 15.0494C10.2026 14.3608 9.81748 13.4276 9.81876 12.455C9.82004 11.4824 10.2076 10.5502 10.8963 9.86334C11.5849 9.17653 12.5181 8.79141 13.4907 8.79269Z"
    //           fill="white"
    //           fill-opacity="0.87"
    //         />
    //       </svg>
    //     </Link>
    //     <Link target="_blank" href={"https://www.linkedin.com/in/appNameiq"} className="hover:scale-105 cursor-pointer">
    //       <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path
    //           d="M21.2178 3.40039L4.71777 3.40039C4.30356 3.40039 3.96777 3.73618 3.96777 4.15039L3.96777 20.6504C3.96777 21.0646 4.30356 21.4004 4.71777 21.4004L21.2178 21.4004C21.632 21.4004 21.9678 21.0646 21.9678 20.6504L21.9678 4.15039C21.9678 3.73618 21.632 3.40039 21.2178 3.40039Z"
    //           stroke="white"
    //           stroke-opacity="0.87"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path d="M12.2178 10.9004L12.2178 16.9004" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //         <path d="M9.21777 10.9004L9.21777 16.9004" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //         <path
    //           d="M12.2178 13.5254C12.2178 12.8292 12.4943 12.1615 12.9866 11.6692C13.4789 11.177 14.1466 10.9004 14.8428 10.9004C15.539 10.9004 16.2066 11.177 16.6989 11.6692C17.1912 12.1615 17.4678 12.8292 17.4678 13.5254L17.4678 16.9004"
    //           stroke="white"
    //           stroke-opacity="0.87"
    //           stroke-width="2"
    //           stroke-linecap="round"
    //           stroke-linejoin="round"
    //         />
    //         <path
    //           d="M9.21777 9.40039C9.83909 9.40039 10.3428 8.89671 10.3428 8.27539C10.3428 7.65407 9.83909 7.15039 9.21777 7.15039C8.59645 7.15039 8.09277 7.65407 8.09277 8.27539C8.09277 8.89671 8.59645 9.40039 9.21777 9.40039Z"
    //           fill="white"
    //           fill-opacity="0.87"
    //         />
    //       </svg>
    //     </Link>
    //     {/* <Link
    //                 target="_blank"
    //                 href={'https://u.wechat.com/kIGRb_UHqLfYwXJ13xosaBc'} className="hover:scale-105 cursor-pointer">
    //                 <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    //                     <path d="M13.3115 14.5918C13.9328 14.5918 14.4365 14.0881 14.4365 13.4668C14.4365 12.8455 13.9328 12.3418 13.3115 12.3418C12.6902 12.3418 12.1865 12.8455 12.1865 13.4668C12.1865 14.0881 12.6902 14.5918 13.3115 14.5918Z" fill="white" fill-opacity="0.87" />
    //                     <path d="M18.5615 14.5918C19.1828 14.5918 19.6865 14.0881 19.6865 13.4668C19.6865 12.8455 19.1828 12.3418 18.5615 12.3418C17.9402 12.3418 17.4365 12.8455 17.4365 13.4668C17.4365 14.0881 17.9402 14.5918 18.5615 14.5918Z" fill="white" fill-opacity="0.87" />
    //                     <path d="M15.9363 21.3418C14.4597 21.3411 13.0241 20.8563 11.8494 19.9616C10.6748 19.0669 9.82591 17.8117 9.43292 16.3883C9.03992 14.965 9.12449 13.4521 9.67365 12.0814C10.2228 10.7107 11.2063 9.55794 12.4733 8.79971C13.7404 8.04148 15.2211 7.71963 16.6885 7.8835C18.156 8.04737 19.5293 8.6879 20.5979 9.70695C21.6664 10.726 22.3714 12.0673 22.6047 13.5254C22.838 14.9834 22.5867 16.4777 21.8894 17.7793L22.6544 20.3818C22.6924 20.511 22.6948 20.6481 22.6615 20.7786C22.6282 20.9091 22.5604 21.0282 22.4652 21.1235C22.3699 21.2187 22.2508 21.2865 22.1203 21.3198C21.9898 21.3531 21.8527 21.3507 21.7235 21.3127L19.1238 20.5449C18.1435 21.0699 17.0484 21.3437 15.9363 21.3418Z" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                     <path d="M9.56676 16.8313C8.58286 16.7789 7.62259 16.5104 6.75426 16.0447L4.15175 16.8097C4.02253 16.8477 3.88546 16.8501 3.75496 16.8168C3.62446 16.7835 3.50534 16.7157 3.4101 16.6205C3.31486 16.5252 3.24703 16.4061 3.21372 16.2756C3.18042 16.1451 3.18287 16.008 3.22082 15.8788L3.98301 13.2791C3.54879 12.4595 3.28815 11.5592 3.21735 10.6344C3.14655 9.70959 3.2671 8.78011 3.57149 7.90396C3.87588 7.02782 4.35757 6.2238 4.9865 5.54209C5.61543 4.86037 6.37811 4.31559 7.22695 3.94174C8.07579 3.56789 8.99256 3.37299 9.92007 3.3692C10.8476 3.36541 11.7659 3.55281 12.6178 3.91971C13.4696 4.28662 14.2368 4.82514 14.8712 5.50169C15.5057 6.17824 15.994 6.9783 16.3055 7.85193" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    //                 </svg>

    //             </Link> */}
    //     <Link target="_blank" href={"https://wa.me/message/EK3RSVUH4AROE1"} className="hover:scale-105 cursor-pointer">
    //       <svg className="cursor-pointer size-6" width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <g clip-path="url(#clip0_919_3553)">
    //           <path
    //             d="M6.28125 8.23575C6.28125 7.61171 6.52915 7.01324 6.97041 6.57197C7.41167 6.13071 8.01015 5.88281 8.63419 5.88281L9.81066 8.23575L8.90478 9.59384C9.26412 10.4525 9.94688 11.1352 10.8055 11.4946L12.1636 10.5887L14.5165 11.7652C14.5165 12.3892 14.2686 12.9877 13.8274 13.4289C13.3861 13.8702 12.7876 14.1181 12.1636 14.1181C10.6035 14.1181 9.10731 13.4984 8.00415 12.3952C6.901 11.2921 6.28125 9.79585 6.28125 8.23575Z"
    //             stroke="white"
    //             stroke-width="1.17647"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //           />
    //           <path
    //             d="M6.64226 16.4912C8.21767 17.403 10.0709 17.7108 11.8565 17.3571C13.642 17.0034 15.238 16.0124 16.3468 14.5689C17.4557 13.1253 18.0018 11.3278 17.8832 9.51146C17.7646 7.69508 16.9895 5.98381 15.7024 4.69671C14.4153 3.4096 12.704 2.63451 10.8877 2.51594C9.07128 2.39737 7.27377 2.94341 5.83026 4.05227C4.38675 5.16113 3.39576 6.75711 3.04207 8.54266C2.68837 10.3282 2.9961 12.1814 3.90788 13.7569L2.93054 16.6748C2.89381 16.785 2.88848 16.9031 2.91515 17.0161C2.94181 17.1291 2.99941 17.2324 3.0815 17.3145C3.16358 17.3966 3.2669 17.4542 3.37988 17.4808C3.49287 17.5075 3.61104 17.5022 3.72116 17.4655L6.64226 16.4912Z"
    //             stroke="white"
    //             stroke-width="1.17647"
    //             stroke-linecap="round"
    //             stroke-linejoin="round"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_919_3553">
    //             <rect width="20" height="20" fill="white" transform="translate(0.398438)" />
    //           </clipPath>
    //         </defs>
    //       </svg>
    //     </Link>
    //   </div>
    // </div>

    // <footer className="bb-footer mt-[50px] max-[1199px]:mt-[35px] bg-[#f8f8fb] text-[#fff]">
    <footer className="bb-footer mt-[50px] max-[1199px]:mt-[35px] text-[#fff]">
      {/* <div className="footer-directory py-[50px] max-[1199px]:py-[35px] border-[1px] border-solid border-solid">
        <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
          <div className="flex flex-wrap w-full">
            <div className="w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="directory-title mb-[24px] text-center">
                <h4 className="font-quicksand leading-[1.2] text-[16px] font-bold text-[#3d4750] tracking-[0] uppercase">Brands Directory</h4>
              </div>
              <div className="directory-contact mb-[-24px]">
                <div className="flex flex-wrap w-full">
                  <div className="min-[992px]:w-[50%] w-full px-[12px]">
                    <div className="inner-contact mb-[24px]">
                      <ul className="flex flex-wrap">
                        <li>
                          <span className="font-Poppins leading-[28px] tracking-[0.03rem] mr-[12px] text-[14px] font-semibold text-[#686e7d] capitalize">Jewellery :</span>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Necklace
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Earrings
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Couple Rings
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Pendants
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            crystal
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Bangles
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Bracelets
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Nose pin
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Chain
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Earrings
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Couple Rings
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner-contact mb-[24px]">
                      <ul className="flex flex-wrap">
                        <li>
                          <span className="font-Poppins leading-[28px] tracking-[0.03rem] mr-[12px] text-[14px] font-semibold text-[#686e7d] capitalize">Footwear :</span>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Sport
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Formal
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Boots
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Casual
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Cowboy Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Safety Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Party Wear Shoes
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Branded
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            First copy
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Long Shoes
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="min-[992px]:w-[50%] w-full px-[12px]">
                    <div className="inner-contact mb-[24px]">
                      <ul className="flex flex-wrap">
                        <li>
                          <span className="font-Poppins leading-[28px] tracking-[0.03rem] mr-[12px] text-[14px] font-semibold text-[#686e7d] capitalize">Fashion :</span>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            T-Shirt
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Short & Jeans
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Jacket
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Dress & Frock
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Inner wear
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Hosiery
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="inner-contact mb-[24px]">
                      <ul className="flex flex-wrap">
                        <li>
                          <span className="font-Poppins leading-[28px] tracking-[0.03rem] mr-[12px] text-[14px] font-semibold text-[#686e7d] capitalize">Cosmetics :</span>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Shampoo
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Body wash
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            face wash
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Makeup kit
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Liner
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Lipstick
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Perfume
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Body Shop
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Scrub
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Hair Gel
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Hair colors
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Hair Dye
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Sunscreen
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Skin Lotion
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Liner
                          </a>
                        </li>
                        <li>
                          <a
                            href="shop-left-sidebar-col-3.html"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] text-[13px] font-normal text-[#686e7d] hover:text-[#6c7fd8] capitalize">
                            Lipstick
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
      </div> */}
      <div className="footer-container border-t-[1px] border-solid border-[#eee]">
        <div className="footer-top py-[50px] max-[1199px]:py-[35px]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="flex flex-wrap w-full max-[991px]:mb-[-30px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
              <div className="min-[992px]:w-[25%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-cat">
                <div className="bb-footer-widget bb-footer-company flex flex-col max-[991px]:mb-[24px]">
                  <img src="/logo.svg" className="bb-footer-logo max-w-[100px] mb-[30px] max-[767px]:max-w-[130px]" alt="footer logo" />
                  <img src="/logo.svg" className="bb-footer-dark-logo max-w-[100px] mb-[30px] max-[767px]:max-w-[130px] hidden" alt="footer logo" />
                  {/* <img src="/logo.svg" className="bb-footer-logo max-w-[144px] mb-[30px] max-[767px]:max-w-[130px]" alt="footer logo" />
                  <img src="/logo.svg" className="bb-footer-dark-logo max-w-[144px] mb-[30px] max-[767px]:max-w-[130px] hidden" alt="footer logo" /> */}
                  <p className="bb-footer-detail max-w-[400px] mb-[30px] p-[0] font-Poppins text-[14px] leading-[27px] font-normal text-[#686e7d] inline-block relative max-[1399px]:text-[15px] max-[1199px]:text-[14px]">
                    BlueBerry is the biggest market of grocery products. Get your daily needs from our store.
                  </p>
                  <div className="bb-app-store m-[-7px] flex flex-wrap">
                    <a href="javascript:void(0)" className="app-img">
                      <img src="assets/img/app/android.png" className="adroid max-w-[140px] m-[7px] rounded-[5px] max-[1399px]:max-w-[120px]" alt="android" />
                    </a>
                    <a href="javascript:void(0)" className="app-img">
                      <img src="assets/img/app/apple.png" className="apple max-w-[140px] m-[7px] rounded-[5px] max-[1399px]:max-w-[120px]" alt="apple" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="min-[992px]:w-[16.66%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-info">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                    Category
                  </h4>
                  <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                    {/* <div className="bb-footer-links bb-footer-dropdown hidden max-[991px]:mb-[35px]"> */}
                    <ul className="align-items-center">
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Dairy & Milk
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-banner-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Snack & Spice
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-full-width-col-5.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Fast Food
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-list-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Juice & Drinks
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-list-full-col-2.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Bakery
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center">
                        <a
                          href="shop-banner-right-sidebar-col-4.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Seafood
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="min-[992px]:w-[16.66%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-account">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                    Company
                  </h4>
                  <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                    {/* <div className="bb-footer-links bb-footer-dropdown hidden max-[991px]:mb-[35px]"> */}
                    <ul className="align-items-center">
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="about-us.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          About us
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="track-order.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Delivery
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="faq.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Legal Notice
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="terms.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Terms & conditions
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="checkout.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Secure payment
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center">
                        <a
                          href="contact-us.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="min-[992px]:w-[16.66%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-service">
                <div className="bb-footer-widget">
                  <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                    Account
                  </h4>
                  <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                    {/* <div className="bb-footer-links bb-footer-dropdown hidden max-[991px]:mb-[35px]"> */}
                    <ul className="align-items-center">
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="login.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Sign In
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="cart.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          View Cart
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="faq.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Return Policy
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="shop-left-sidebar-col-3.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Become a Vendor
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center mb-[16px] max-[991px]:mb-[15px]">
                        <a
                          href="product-left-sidebar.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Affiliate Program
                        </a>
                      </li>
                      <li className="bb-footer-link leading-[1.5] flex items-center">
                        <a
                          href="checkout.html"
                          className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] hover:text-[#6c7fd8] mb-[0] inline-block break-all tracking-[0] font-normal">
                          Payments
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="min-[992px]:w-[25%] max-[991px]:w-full w-full px-[12px] bb-footer-toggle bb-footer-cont-social">
                <div className="bb-footer-contact mb-[30px]">
                  <div className="bb-footer-widget">
                    <h4 className="bb-footer-heading font-quicksand leading-[1.2] text-[18px] font-bold mb-[20px] text-[#3d4750] tracking-[0] relative block w-full pb-[15px] capitalize border-b-[1px] border-solid border-[#eee] max-[991px]:text-[14px]">
                      Contact
                    </h4>
                    <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                      {/* <div className="bb-footer-links bb-footer-dropdown hidden max-[991px]:mb-[35px]"> */}
                      <ul className="align-items-center">
                        <li className="bb-footer-link bb-foo-location flex items-start max-[991px]:mb-[15px] mb-[16px]">
                          <span className="mt-[5px] w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <i className="ri-map-pin-line leading-[0] text-[18px] text-[#6c7fd8]"></i>
                          </span>
                          <p className="m-[0] font-Poppins text-[14px] text-[#686e7d] font-normal leading-[28px] tracking-[0.03rem]">
                            971 Lajamni, Motavarachha, Surat, Gujarat, Bharat 394101.
                          </p>
                        </li>
                        <li className="bb-footer-link bb-foo-call flex items-start max-[991px]:mb-[15px] mb-[16px]">
                          <span className="w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <i className="ri-whatsapp-line leading-[0] text-[18px] text-[#6c7fd8]"></i>
                          </span>
                          <a
                            href="tel:+009876543210"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] inline-block relative break-all tracking-[0] font-normal max-[1399px]:text-[15px] max-[1199px]:text-[14px]">
                            +00 9876543210
                          </a>
                        </li>
                        <li className="bb-footer-link bb-foo-mail flex">
                          <span className="w-[25px] basis-[auto] grow-[0] shrink-[0]">
                            <i className="ri-mail-line leading-[0] text-[18px] text-[#6c7fd8]"></i>
                          </span>
                          <a
                            href="mailto:example@email.com"
                            className="transition-all duration-[0.3s] ease-in-out font-Poppins text-[14px] leading-[20px] text-[#686e7d] inline-block relative break-all tracking-[0] font-normal max-[1399px]:text-[15px] max-[1199px]:text-[14px]">
                            example@email.com
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="bb-footer-social">
                  <div className="bb-footer-widget">
                    <div className="bb-footer-links bb-footer-dropdown max-[991px]:mb-[35px]">
                      {/* <div className="bb-footer-links bb-footer-dropdown hidden max-[991px]:mb-[35px]"> */}
                      <ul className="align-items-center flex flex-wrap items-center">
                        <Link
                          target="_blank"
                          href={"https://www.facebook.com/appNameiq"}
                          className="mr-2 hover:scale-105 cursor-pointer transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                          <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_2049_11741)">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M24.4847 12.1008C24.4931 5.71043 19.3515 0.523542 13.0014 0.515168C6.64847 0.508227 1.49317 5.6801 1.48474 12.0719C1.47712 17.8456 5.67641 22.6374 11.1716 23.5128L11.1822 15.4279L8.26447 15.424L8.26888 12.0808L11.1895 12.0847L11.1929 9.53341C11.1967 6.63434 12.9164 5.03543 15.5424 5.0389C16.8015 5.04056 18.1163 5.26795 18.1163 5.26795L18.1126 8.11384L16.6623 8.11193C15.2351 8.11005 14.7883 9.00203 14.7871 9.91761L14.7843 12.088L17.9722 12.0922L17.459 15.4347L14.7784 15.4312L14.7677 23.5161C20.2652 22.6552 24.4771 17.8745 24.4847 12.1008Z"
                                fill="white"
                                fill-opacity="0.87"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_2049_11741">
                                <rect width="24" height="24" fill="white" transform="translate(1 0.5) rotate(0.0755606)" />
                              </clipPath>
                            </defs>
                          </svg>
                        </Link>
                        <Link
                          target="_blank"
                          href={"https://www.instagram.com/appNameiq"}
                          className="mr-2 hover:scale-105 cursor-pointer transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                          <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13.499 1.45982C10.5139 1.45588 10.1385 1.46914 8.96556 1.51984C7.79261 1.57329 6.99349 1.75649 6.29326 2.02782C5.55877 2.30297 4.89325 2.73523 4.34321 3.29437C3.78297 3.84321 3.34901 4.50752 3.07152 5.24107C2.79835 5.93921 2.61167 6.73922 2.5565 7.90789C2.5027 9.08345 2.48846 9.45743 2.48452 12.4467C2.48058 15.4332 2.49383 15.8072 2.54454 16.9801C2.59799 18.1517 2.78119 18.9508 3.05251 19.6511C3.33344 20.3747 3.708 20.9884 4.31907 21.6011C4.92876 22.2138 5.54151 22.5913 6.26439 22.8728C6.96528 23.146 7.76254 23.3326 8.93397 23.3878C10.1081 23.4416 10.4821 23.4559 13.47 23.4598C16.4579 23.4637 16.8305 23.4505 18.0048 23.3998C19.175 23.3463 19.9769 23.1631 20.6771 22.8918C21.4111 22.6165 22.0762 22.1843 22.6258 21.6252C23.2385 21.0142 23.6147 20.4014 23.8975 19.6785C24.1693 18.979 24.356 18.1804 24.4125 17.009C24.4663 15.8362 24.4806 15.4622 24.4845 12.4743C24.4884 9.48644 24.4752 9.11243 24.4245 7.93811C24.371 6.76791 24.1865 5.96742 23.9165 5.26856C23.641 4.53426 23.2088 3.86881 22.6499 3.31851C22.1016 2.75772 21.4371 2.32368 20.7032 2.04682C20.0024 1.77365 19.2024 1.58697 18.0323 1.5318C16.8581 1.478 16.4855 1.46376 13.4963 1.45982L13.5004 1.45982L13.499 1.45982ZM12.5105 3.44127L13.4978 3.44257C16.4348 3.44644 16.7826 3.45653 17.9417 3.51168C19.0141 3.56122 19.5969 3.74211 19.9844 3.8925C20.497 4.09255 20.8639 4.33228 21.2483 4.71779C21.6328 5.1033 21.8702 5.46936 22.0689 5.98387C22.2197 6.37045 22.3976 6.95368 22.4444 8.02625C22.4965 9.18544 22.507 9.53333 22.5031 12.469C22.4993 15.4046 22.4878 15.7538 22.4326 16.9129C22.3831 17.9853 22.2022 18.5667 22.0518 18.9542C21.8748 19.4316 21.5928 19.8631 21.2265 20.2168C20.841 20.6013 20.475 20.8387 19.9605 21.0374C19.5753 21.1881 18.992 21.3661 17.9181 21.4142C16.7589 21.4649 16.411 21.4768 13.474 21.4729C10.537 21.4691 10.1878 21.4562 9.02871 21.4024C7.95628 21.3515 7.37489 21.172 6.98734 21.0202C6.50976 20.8435 6.07786 20.562 5.72342 20.1963C5.3578 19.8411 5.07645 19.4085 4.90009 18.9302C4.75073 18.5437 4.57137 17.9604 4.52466 16.8879C4.47394 15.7287 4.4634 15.3808 4.46727 12.4424C4.47115 9.50542 4.4826 9.15893 4.53638 7.99988C4.5873 6.92745 4.76681 6.34468 4.91858 5.95713C5.11863 5.44452 5.35836 5.07771 5.74387 4.69322C6.12938 4.30873 6.49544 4.07133 7.00995 3.87264C7.3979 3.7219 7.97976 3.54392 9.05232 3.49583C10.0671 3.45042 10.4604 3.43719 12.5105 3.43852L12.5105 3.44127ZM19.3666 5.27631C19.1933 5.27608 19.0216 5.31 18.8613 5.37612C18.7011 5.44225 18.5555 5.53929 18.4327 5.6617C18.31 5.78411 18.2126 5.9295 18.146 6.08956C18.0795 6.24962 18.0451 6.42122 18.0449 6.59457C18.0446 6.76791 18.0786 6.9396 18.1447 7.09984C18.2108 7.26008 18.3078 7.40572 18.4303 7.52846C18.5527 7.65119 18.6981 7.74862 18.8581 7.81516C19.0182 7.88171 19.1898 7.91608 19.3631 7.91631C19.7132 7.91677 20.0491 7.77814 20.297 7.53092C20.5449 7.2837 20.6844 6.94813 20.6849 6.59805C20.6853 6.24796 20.5467 5.91203 20.2995 5.66416C20.0523 5.41629 19.7167 5.27677 19.3666 5.27631ZM13.4933 6.81132C12.7441 6.79864 11.9998 6.93514 11.3038 7.21287C10.6078 7.49061 9.97397 7.90402 9.43928 8.42905C8.90458 8.95408 8.47968 9.58024 8.18929 10.2711C7.89891 10.9619 7.74886 11.7036 7.74787 12.4529C7.74689 13.2023 7.89498 13.9444 8.18354 14.636C8.4721 15.3275 8.89535 15.9548 9.42866 16.4813C9.96196 17.0077 10.5947 17.4228 11.2899 17.7023C11.9852 17.9819 12.7291 18.1204 13.4784 18.1097C14.9615 18.0885 16.3767 17.485 17.4186 16.4295C18.4606 15.3739 19.0457 13.951 19.0476 12.4678C19.0496 10.9847 18.4682 9.5602 17.4291 8.50191C16.3899 7.44363 14.9763 6.83641 13.4933 6.81132ZM13.4907 8.79269C14.4633 8.79397 15.3955 9.18156 16.0823 9.87018C16.7692 10.5588 17.1543 11.4921 17.153 12.4646C17.1517 13.4372 16.7641 14.3695 16.0755 15.0563C15.3869 15.7431 14.4536 16.1282 13.481 16.1269C12.5085 16.1256 11.5762 15.7381 10.8894 15.0494C10.2026 14.3608 9.81748 13.4276 9.81876 12.455C9.82004 11.4824 10.2076 10.5502 10.8963 9.86334C11.5849 9.17653 12.5181 8.79141 13.4907 8.79269Z"
                              fill="white"
                              fill-opacity="0.87"
                            />
                          </svg>
                        </Link>
                        <Link
                          target="_blank"
                          href={"https://www.linkedin.com/in/appNameiq"}
                          className="mr-2 hover:scale-105 cursor-pointer transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                          <svg className="cursor-pointer" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M21.2178 3.40039L4.71777 3.40039C4.30356 3.40039 3.96777 3.73618 3.96777 4.15039L3.96777 20.6504C3.96777 21.0646 4.30356 21.4004 4.71777 21.4004L21.2178 21.4004C21.632 21.4004 21.9678 21.0646 21.9678 20.6504L21.9678 4.15039C21.9678 3.73618 21.632 3.40039 21.2178 3.40039Z"
                              stroke="white"
                              stroke-opacity="0.87"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M12.2178 10.9004L12.2178 16.9004" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.21777 10.9004L9.21777 16.9004" stroke="white" stroke-opacity="0.87" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path
                              d="M12.2178 13.5254C12.2178 12.8292 12.4943 12.1615 12.9866 11.6692C13.4789 11.177 14.1466 10.9004 14.8428 10.9004C15.539 10.9004 16.2066 11.177 16.6989 11.6692C17.1912 12.1615 17.4678 12.8292 17.4678 13.5254L17.4678 16.9004"
                              stroke="white"
                              stroke-opacity="0.87"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M9.21777 9.40039C9.83909 9.40039 10.3428 8.89671 10.3428 8.27539C10.3428 7.65407 9.83909 7.15039 9.21777 7.15039C8.59645 7.15039 8.09277 7.65407 8.09277 8.27539C8.09277 8.89671 8.59645 9.40039 9.21777 9.40039Z"
                              fill="white"
                              fill-opacity="0.87"
                            />
                          </svg>
                        </Link>

                        {/* <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                          <a
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                            <i className="ri-facebook-fill text-[16px] text-[#fff]"></i>
                          </a>
                        </li>
                        <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                          <a
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                            <i className="ri-twitter-fill text-[16px] text-[#fff]"></i>
                          </a>
                        </li>
                        <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                          <a
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                            <i className="ri-linkedin-fill text-[16px] text-[#fff]"></i>
                          </a>
                        </li>
                        <li className="bb-footer-link leading-[1.5] flex items-center pr-[5px]">
                          <a
                            href="javascript:void(0)"
                            className="transition-all duration-[0.3s] ease-in-out w-[30px] h-[30px] rounded-[5px] bg-[#3d4750] hover:bg-[#6c7fd8] capitalize flex items-center justify-center text-[15px] leading-[20px] text-[#686e7d] relative break-all font-normal">
                            <i className="ri-instagram-line text-[16px] text-[#fff]"></i>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom py-[10px] border-t-[1px] border-solid border-[#eee] max-[991px]:py-[15px]">
          <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
            <div className="flex flex-wrap w-full">
              <div className="bb-bottom-info w-full flex flex-row items-center justify-between max-[991px]:flex-col px-[12px]">
                <div className="footer-copy max-[991px]:mb-[15px]">
                  <div className="footer-bottom-copy max-[991px]:text-center">
                    <div className="bb-copy text-[#686e7d] text-[13px] tracking-[1px] text-center font-normal leading-[2]">
                      Copyright © <span className="text-[#686e7d] text-[13px] tracking-[1px] text-center font-normal" id="copyright_year"></span>
                      <a
                        className="site-name transition-all duration-[0.3s] ease-in-out font-medium text-[#6c7fd8] hover:text-[#3d4750] font-Poppins text-[15px] leading-[28px] tracking-[0.03rem]"
                        href="index.html">
                        BlueBerry
                      </a>
                      all rights reserved.
                    </div>
                  </div>
                </div>
                <div className="footer-bottom-right">
                  <div className="footer-bottom-payment flex justify-center">
                    <div className="payment-link">
                      <img src="assets/img/payment/payment.png" alt="payment" className="max-[360px]:w-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
