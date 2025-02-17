import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BannerItem {
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  bgColor: string;
  shopLink: string;
}

const bannerItems: BannerItem[] = [
  {
    imageSrc: "/assets/images/gpu.webp",
    altText: "Tasty Snack & Fast food",
    title: "Tasty Snack & Fast food",
    description: "The flavour of something special",
    bgColor: "bg-[#fbf2e5]",
    shopLink: "/shop-left-sidebar-col-3",
  },
  {
    imageSrc: "/assets/images/gpu.webp",
    altText: "Fresh Fruits & Vegetables",
    title: "Fresh Fruits & Vegetables",
    description: "A healthy meal for everyone",
    bgColor: "bg-[#ffe8ee]",
    shopLink: "/shop-left-sidebar-col-3",
  },
];

const BannerSection: React.FC = () => {
  return (
    <section className="section-banner-one overflow-hidden py-[50px] max-[1199px]:py-[35px]">
      <div className="flex flex-wrap justify-between relative items-center mx-auto min-[1400px]:max-w-[1320px] min-[1200px]:max-w-[1140px] min-[992px]:max-w-[960px] min-[768px]:max-w-[720px] min-[576px]:max-w-[540px]">
        <div className="flex flex-wrap w-full mb-[-24px]">
          {bannerItems.map((item, index) => (
            <div key={index} className="min-[992px]:w-[50%] w-full px-[12px] mb-[24px]" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <div className={`banner-box p-[30px] rounded-[20px] relative overflow-hidden ${item.bgColor}`}>
                <div className="inner-banner-box relative z-[1] flex justify-between max-[480px]:flex-col">
                  <div className="side-image px-[12px] flex items-center max-[480px]:p-[0] max-[480px]:mb-[12px] max-[480px]:justify-center">
                    <Image
                      src={item.imageSrc}
                      alt={item.altText}
                      width={280}
                      height={280}
                      className="max-w-max w-[280px] h-[280px] max-[1399px]:w-[230px] max-[1399px]:h-[230px] max-[1199px]:w-[140px] max-[1199px]:h-[140px] max-[991px]:w-[280px] max-[991px]:h-[280px] max-[767px]:h-[200px] max-[767px]:w-[200px] max-[575px]:w-full max-[575px]:h-auto max-[480px]:w-[calc(100%-70px)]"
                    />
                  </div>
                  <div className="inner-contact max-w-[250px] px-[12px] flex flex-col items-start justify-center max-[480px]:p-[0] max-[480px]:max-w-[100%] max-[480px]:text-center max-[480px]:items-center">
                    <h5 className="font-quicksand mb-[15px] text-[31px] text-[#3d4750] font-bold tracking-[0.03rem] leading-[1.2] max-[991px]:text-[28px] max-[575px]:text-[24px] max-[480px]:mb-[2px] max-[480px]:text-[22px]">
                      {item.title}
                    </h5>
                    <p className="font-Poppins text-[16px] font-light leading-[28px] tracking-[0.03rem] text-[#686e7d] mb-[15px] max-[480px]:mb-[8px] max-[480px]:text-[14px]">
                      {item.description}
                    </p>
                    <Link
                      href={item.shopLink}
                      className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins leading-[28px] tracking-[0.03rem] py-[5px] px-[15px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] hover:bg-[#6c7fd8] hover:border-[#6c7fd8] hover:text-[#fff]">
                      Shop Now
                    </Link>
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

export default BannerSection;
