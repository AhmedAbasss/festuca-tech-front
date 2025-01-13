"use client";
import { cn } from '@/src/lib/utils';
import { IProductGroup, IProducts } from '@/src/services/MasterData/ProductGroup';
import { IProduct } from '@/src/services/System/Home/type';
import React, { useState } from 'react';
import { SelectedProps } from './RowVariants';

const TabButton = ({
    list,
    selected,
    setSelected,
    product,
    index
}: {
    list: any[],
    selected: SelectedProps[],
    setSelected: React.Dispatch<React.SetStateAction<SelectedProps[]>>,
    product?: IProducts[],
    index: number
}) => {

    const handleClick = (item: any) => {
        const updatedSelected = [...selected]; // Create a shallow copy of the array
        if (selected[index]?.value === item.value) {
            updatedSelected[index] = { value: '', product: [] }; // Deselect if already selected
        } else {
            updatedSelected[index] = { value: item.value, product: product }; // Select the new item
        }
        setSelected(updatedSelected); // Update the state with the new reference
    };

console.log(product);


    return (
        <div className="bb-pro-variation-contant">
            <ul className="flex flex-wrap m-[-2px]">
                {list.map((item, idx) => (
                    <li
                        key={idx}
                        onClick={() => handleClick(item)}
                        className={cn(
                            "transition-all duration-300 ease-in-out",
                            "font-Poppins font-light text-[14px] leading-[28px] tracking-[0.03rem] text-[#686e7d]",
                            "my-[10px] mx-[2px] py-[2px] px-[15px] border-[1px] border-solid border-[#eee] rounded-[10px] cursor-pointer active-variation",
                            { "bg-primary text-white": selected[index]?.value === item.value }
                        )}
                    >
                        {item.value}
                    </li>
                ))}
            </ul>
            {/* {JSON.stringify(product?.find(it => it.variants.some(i => i.value == selected[index].value)))} */}
        </div>
    );
};

export default TabButton;
