// import CurrencyComponent from "@/src/components/common/CurrencyComponent";
// import RatingStar from "@/src/components/common/RatingStar";
// import { IProduct } from "@/src/services/System/Home/type";
import Link from "next/link";
import { FC } from "react";
import Actions from "./Actions";
import { IProduct } from "./type";

interface ItemProps extends IProduct {
  flags: string;
  imgBack?: string;
  imageFont?: string;
  delay: number;
}
const Item: FC<ItemProps> = ({ flags, imgBack, imageFont, delay, title, storeCategoryTitle, price, rateCount, crName, discount, ...ItemProps }) => {
  return (
    <div className="w-full" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={delay}>
      <div className="bb-pro-box h-full  border border-solid border-border/30 rounded-[20px]">
        <div className="bb-pro-img overflow-hidden relative border-b border-solid border-border/30 z-[4]">
          <span className="flags transition-all duration-[0.3s] ease-in-out absolute z-[5] top-[10px] left-[6px]">
            <span className="text-[14px] text-[#777] font-medium uppercase">{flags}</span>
          </span>
          <Link rel="noopener noreferrer" href={`/assets/images/image.png`} scroll={false} prefetch={false}>
            <div className="inner-img relative block overflow-hidden pointer-events-none rounded-t-[20px]">
              <img className="main-img transition-all duration-[0.3s] ease-in-out w-full" src={`/assets/images/image.png`} alt={title} />
              <img
                className="hover-img transition-all duration-[0.3s] ease-in-out absolute z-[2] top-[0] left-[0] opacity-[0] w-full"
                src={`/assets/images/image.png`}
                alt={title}
              />
            </div>
          </Link>
          {/* <Actions data={ItemProps as IProduct} /> */}
        </div>
        <div className="bb-pro-contact md:p-[20px] p-2.5">
          <div className="bb-pro-subtitle mb-[8px] flex flex-wrap justify-between">
            <Link
              rel="noopener noreferrer"
              scroll={false}
              prefetch={false}
              href={`/assets/images/image.png`}
              className="transition-all duration-[0.3s] ease-in-out font-semibold font-Poppins text-smallest md:text-default leading-[16px] text-[#777]  tracking-[0.03rem]">
              {storeCategoryTitle}
            </Link>
            {/* <RatingStar rateCount={rateCount} /> */}
          </div>
          <h4 className="bb-pro-title mb-[8px] md:text-medium text-small leading-[18px]">
            <Link
              rel="noopener noreferrer"
              scroll={false}
              prefetch={false}
              href={`/assets/images/image.png`}
              className="transition-all duration-[0.3s] ease-in-out font-quicksand w-full block whitespace-nowrap overflow-hidden text-ellipsis text-small md:text-medium  leading-[18px] text-[#3d4750] font-semibold tracking-[0.03rem]">
              {title}
            </Link>
          </h4>
          <div className="bb-price flex flex-wrap justify-between">
            <div className="inner-price mx-[-3px]">
              <span className="new-price px-[3px] md:text-medium text-small text-[#686e7d] font-bold">
                {(price - discount).toLocaleString()}
                {/* <CurrencyComponent value={crName} /> */}
              </span>
              {discount > 0 && (
                <span className="old-price px-[3px] md:text-default text-smallest  text-[#686e7d] line-through">
                  {price.toLocaleString()}
                  {/* <CurrencyComponent value={crName} /> */}
                </span>
              )}
              {/* {ItemProps.stockQty == 0 && <span className="item-left px-[3px] md:text-default text-smallest  text-[#6c7fd8]">Out Of Stock</span>} */}
            </div>
            {/* <span className="last-items md:text-default text-smallest  text-[#686e7d]">500g</span> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
