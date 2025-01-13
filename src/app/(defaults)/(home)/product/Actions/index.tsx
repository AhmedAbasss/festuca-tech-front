import React from 'react'
import WishlistAction from './WishlistAction'
import { IProduct } from '@/src/services/System/Home/type'
import QuickViewAction from './QuickViewAction'
 
const Actions = ({ data }: { data: IProduct }) => {
    return (
        <ul className="bb-pro-actions transition-all duration-[0.3s] ease-in-out my-[0] mx-[auto] absolute z-[9] left-[0] right-[0] bottom-[0] flex flex-row items-center justify-center opacity-[0]">
            <WishlistAction data={data} />
            <QuickViewAction data={data as any} />

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
    )
}

export default Actions