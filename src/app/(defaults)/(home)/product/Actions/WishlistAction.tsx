"use client"
import { useWishlistCreateMutation, useWishlistRemoveMutation } from '@/src/services/Activity/Wishlist';
import { getDataWithRevalidateTag } from '@/src/services/revalidateTag';
import { IProduct } from '@/src/services/System/Home/type';
import React, { useTransition } from 'react'
import { toast } from 'sonner';

const WishlistAction = ({ data }: { data: IProduct }) => {
    const [WishlistCreate] = useWishlistCreateMutation()
    const [WishlistRemove] = useWishlistRemoveMutation()
    const [isPendingWishlist, setPendingWishlist] = useTransition()
    const handleAddWishlist = () => {
        setPendingWishlist(async () => {
            try {
                if (data.shopperActivity.inWishlist) {
                    await WishlistRemove({ groupid: data.id }).unwrap()
                    toast.success('Removed from wishlist', {
                        style: {
                            backgroundColor: '#4caf50',
                            color: '#fff'
                        }
                    })
                    getDataWithRevalidateTag({
                        tag: 'HomeGetData'
                    })
                } else {
                    await WishlistCreate({ groupid: data.id }).unwrap()

                    getDataWithRevalidateTag({
                        tag: 'HomeGetData'
                    })
                    toast.success('Added to wishlist', {
                        style: {
                            backgroundColor: '#4caf50',
                            color: '#fff'
                        }
                    })
                }
            } catch (error) {
                toast.error('Failed to add to wishlist', {
                    style: {
                        backgroundColor: '#f44336',
                        color: '#fff'
                    }
                })
            }


        })

    };

    return (
        <li
            onClick={handleAddWishlist}
            className="bb-btn-group transition-all duration-[0.3s] ease-in-out w-[35px] h-[35px] mx-[2px] flex items-center justify-center text-[#fff] bg-[#fff] border-[1px] border-solid border-[#eee] rounded-[10px]">
            <div title="Wishlist" className="w-[35px] h-[35px] flex items-center justify-center">
                {
                    isPendingWishlist ? (
                        <i className="ri-loader-2-line animate-spin text-[18px] text-[#777] leading-[10px]"></i>
                    ) : (
                        <i className={`${data.shopperActivity.inWishlist ? 'ri-heart-fill text-danger' : 'ri-heart-line text-[#777]'} transition-all duration-[0.3s] ease-in-out text-[18px]  leading-[10px]`}></i>
                    )
                }
                {/* <i className="ri-heart-line transition-all duration-[0.3s] ease-in-out text-[18px] text-[#777] leading-[10px]"></i> */}
            </div>
        </li>
    )
}

export default WishlistAction