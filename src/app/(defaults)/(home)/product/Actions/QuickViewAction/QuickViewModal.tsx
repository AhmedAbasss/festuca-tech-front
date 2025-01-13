"use client"
 import React from 'react';
import SliderProduct from './SliderProduct';
import { IProductGroup } from '@/src/services/MasterData/ProductGroup';
import RatingStar from '@/src/components/common/RatingStar';
import CurrencyComponent from '@/src/components/common/CurrencyComponent';
import RowVariants from './RowVariants';
import QtyPlusMinus from './QtyPlusMinus';
import Model from '@/src/components/Model';

export interface SliderProductProps {
    data?: IProductGroup;
    isModalOpen: boolean;
    setIsModalOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const QuickViewModal: React.FC<SliderProductProps> = ({ data, isModalOpen, setIsModalOpen = () => { } }) => {


    return (
        <Model
            open={isModalOpen}
            setOpen={setIsModalOpen}
        // type='dialog'


        >
            <div className='quickview-modal'>
                <button
                    onClick={() => setIsModalOpen(false)}
                    type="button"
                    className="bb-close-modal transition-all duration-[0.3s] ease-in-out w-[16px] h-[20px] absolute top-[-2px] right-[27px] bg-[#e04e4eb3] rounded-[10px] cursor-pointer hover:bg-[#e04e4e]" title="Close"></button>


                <div className="grid grid-cols-1 md:grid-cols-7 mt-6">
                    <div className="w-full md:col-span-3 md:p-2">
                        <div className="single-pro-img single-pro-img-no-sidebar  md:border-[1px] border-solid border-[#eee] overflow-hidden md:rounded-xl">
                            <SliderProduct data={data} />
                        </div>
                    </div>
                    <div className="w-full md:col-span-4 h-full flex-col flex gap-0 p-4">

                        <h5 className="bb-quick-title">
                            <a href="product-left-sidebar.html"
                                className="font-Poppins tracking-[0.03rem] mb-[10px] block text-[#3d4750] text-[20px] leading-[30px] font-medium">
                                {data?.title}
                            </a>
                        </h5>
                        <RatingStar className="px-1 mb-[10px]" rateCount={data?.rateCount} />
                        <div className="bb-quickview-desc mb-[10px] text-[#777]">
                            {
                                data?.shortDescription
                            }
                        </div>
                        <div className="bb-quickview-price pt-[5px] pb-[10px] flex items-center justify-left">
                            <span className="new-price px-[3px] text-[16px] text-[#686e7d] font-bold">
                                {((data?.price ?? 0) - (data?.discount ?? 0)).toLocaleString()}
                                <CurrencyComponent value={data?.crName} />
                            </span>
                            <span className="old-price px-[3px] text-[14px] text-[#686e7d] line-through">
                                {data?.price?.toLocaleString()}
                                <CurrencyComponent value={data?.crName} />
                            </span>
                        </div>

                        <RowVariants product={data} />
                        {/* {
                            data?.variants?.map((variant, index) => {
                                return <RowVariants key={index} variant={variant} />
                            })
                        } */}
                        <div className="bb-quickview-qty mt-auto flex items-center gap-2 max-[360px]:justify-center mr-auto">
                            <QtyPlusMinus />
                            <div className="bb-quickview-cart ml-[4px] max-[360px]:mt-[15px] max-[360px]:ml-[0] max-[360px]:flex max-[360px]:justify-center">
                                <button type="button" className="bb-btn-1 transition-all duration-[0.3s] ease-in-out font-Poppins h-[40px] leading-[28px] tracking-[0.03rem] py-[3px] px-[20px] text-[14px] font-normal text-[#3d4750] bg-transparent rounded-[10px] border-[1px] border-solid border-[#3d4750] hover:bg-primary hover:border-primary hover:text-[#fff]">
                                    <i className="ri-shopping-bag-line px-[8px]"></i>  اضافه الى السلة
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Model>
    );
};

export default QuickViewModal;
