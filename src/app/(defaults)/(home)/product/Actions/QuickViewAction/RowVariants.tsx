"use client"
import React, { useState } from 'react'
 import { IProductGroup, IProducts } from '@/src/services/MasterData/ProductGroup'
import TabButton from './TabButton'
export interface SelectedProps {

    value: string
    product?: IProducts[],


}
const RowVariants = ({

    product,
}
    : {
        product?: IProductGroup
    }
) => {
    const [selected, setSelected] = useState<SelectedProps[]>([{
        value: '',
        product: [],

    }])
    return <>
        {
            product?.variants?.map((variant, index) => {
                return <div
                    key={index}
                    className="bb-single-pro-weight mb-[10px]">
                    <div className="pro-title mb-[4px]">
                        <h4 className="font-quicksand leading-[1.2] tracking-[0.03rem] text-[16px] font-bold uppercase text-[#3d4750]">{variant.key}</h4>
                    </div>
                    <TabButton
                        index={index}
                        list={variant.values}
                        selected={selected}
                        setSelected={setSelected}
                        // product={product.products.filter((item) =>
                        //     item.stockQty > 0 &&
                        //     item.variants.map(it => it.value).includes(selected[index]?.value)
                        // )}
                        product={product.products}
                    />
                </div>
            })
        }
    </>

}

export default RowVariants

 