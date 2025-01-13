"use client"
import React, { useState } from 'react'
import QuickViewModal from './QuickViewModal'
import { IProductGroup } from '@/src/services/MasterData/ProductGroup'

const QuickViewAction = ({ data }: { data?: IProductGroup }) => {
    const [open, setOpen] = useState(false)
    return (<>

        <li className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
            <button
                onClick={() => { setOpen(true) }}
                title="Quick View" className="bb-modal-toggle w-[35px] h-[35px] flex items-center justify-center">
                <i className="ri-eye-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i>
            </button>
        </li>

        <QuickViewModal
            data={data}
            isModalOpen={open}
            setIsModalOpen={setOpen}
        />
    </>
    )
}

export default QuickViewAction