
"use client"
import { cn, getPathImages, UploadType, UploadTypeSizeProduct } from "@/src/lib/utils";
import { IProductGroup } from "@/src/services/MasterData/ProductGroup";
import React, { useState, useEffect, useRef, FC } from "react";
import Slider from "react-slick";


interface SliderProductProps {
    data?: IProductGroup
}
const SliderProduct: FC<SliderProductProps> = ({ data }) => {
    const [nav1, setNav1] = useState<any>(null);
    const [nav2, setNav2] = useState<any>(null);

    const [slideIndex, setSlideIndex] = useState(0);
    const [updateCount, setUpdateCount] = useState(0);
    let sliderRef1 = useRef<any>(null);
    let sliderRef2 = useRef<any>(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        // Initialize zoom functionality if needed
        // Example: $('.zoom-image-hover').zoom(); // Uncomment and use appropriate library

    }, []);
    const getImageSrc = (imageCode: string | undefined) => {
        return getPathImages({
            imageCode,
            type: UploadType.Product,
        }).find(it => it.includes(UploadTypeSizeProduct.Size360x360));
    };
    const images = [
        {
            src: getImageSrc(data?.imageCode),
            title: data?.title,
        },
        ...(data?.products?.filter(item => item.imageCode != null).map(item => ({
            src: getImageSrc(item.imageCode),
            title: item.firstName,
        })) || []),
    ];
 
    return (
        <div className="slider-container flex flex-col gap-1 ">
            <Slider
                asNavFor={nav1}
                ref={slider => {
                    sliderRef1 = slider as any;
                }}

                {...
                {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                    rtl: true,
                    focusOnSelect: false,
                    afterChange: () => setUpdateCount(updateCount + 1),
                    beforeChange: (current, next) => setSlideIndex(next)
                }
                }
            >

                {images?.map((item, index) => {
                    return <div
                        key={index}
                        className="single-slide zoom-image-hover">
                        <img
                            className={(cn(
                                "transition-all duration-[0.3s] ease delay-[0s] cursor-pointer w-full",
                                "img-responsive rounded-xl",
                                { "hover:border-primary hover:border-2 hover:rounded-xl ": slideIndex === index },
                            ))}
                            src={item.src}
                            alt={item.title}
                        />

                    </div>
                })}

            </Slider>
            <Slider
                asNavFor={nav2}
                ref={slider => {
                    sliderRef2 = slider as any;
                }}
                // slidesToShow={3}
                // swipeToSlide={true}
                // focusOnSelect={true}

                {...
                {
                    infinite: true,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    rtl: true,
                    adaptiveHeight: true,
                    focusOnSelect: false,
                    swipeToSlide: false
                    // afterChange: () => setUpdateCount(updateCount + 1),
                    // beforeChange: (current, next) => setSlideIndex(next)
                }
                }
            >
                {images.map((item, index) => {
                    return <div
                        key={index}
                        className={(cn(
                            "single-slide px-[10px] block cursor-pointer",
                        ))}
                        onClick={() => {
                            (sliderRef1 as any)?.slickGoTo(index)
                        }}

                    >
                        <img
                            className={(cn(
                                "img-responsive border-[1px] border-solid border-transparent hover:border-primary  transition-all duration-[0.3s] ease delay-[0s] cursor-pointer rounded-xl ",
                                { "border-primary  ": slideIndex === index },
                            ))}
                            src={item.src}
                            alt={item.title}
                        />
                    </div>
                })
                }

            </Slider>
        </div>
    );
}

export default SliderProduct






