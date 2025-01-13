"use client"
import React, { useState } from "react";

interface QtyButtonProps {
    initialQty?: number;
}

const QtyPlusMinus: React.FC<QtyButtonProps> = ({ initialQty = 1 }) => {
    const [quantity, setQuantity] = useState(initialQty);

    const handleIncrement = () => {
        setQuantity((prevQty) => prevQty + 1);
    };

    const handleDecrement = () => {
        setQuantity((prevQty) => (prevQty > 1 ? prevQty - 1 : 1));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value, 10);
        if (!isNaN(value) && value > 0) {
            setQuantity(value);
        } else {
            setQuantity(1);
        }
    };

    return (
        <div className="qty-plus-minus qty-plus-minus m-[2px] w-[85px] h-[40px] py-[7px] border-[1px] border-solid border-[#eee] overflow-hidden relative flex items-center justify-between bg-[#fff] rounded-[10px]">
            <button className="dec bb-qtybtn" onClick={handleDecrement}>
                -
            </button>
            <input
                // type="number"
                value={quantity}
                onChange={handleChange}
                className="qty-input text-[#777] float-left text-[14px] h-auto m-[0] p-[0] text-center w-[32px] outline-[0] font-normal leading-[35px] rounded-[10px]"
                type="text"
                name="bb-qtybtn"
            // value="1"
            />
            <button className="inc bb-qtybtn" onClick={handleIncrement}>
                +
            </button>
        </div>
    );
};

export default QtyPlusMinus;

