import React, { ReactNode } from 'react'

export const ButtonForm = ({ props, isLoading, title }: {

    title: ReactNode,
    isLoading: boolean,
    props?: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}) => {

    return (<button
        {...props}
        className={`  mt-1 flex justify-center items-center gap-1 w-fit   hover:scale-[1.01] transition-transform py-1 px-2   rounded border bg-[#2276c9] text-white  border-[#2276c9]/70  ${props?.className}`}
    >

        {title}
        {isLoading &&
            <div className="loaderDotsWhite"></div>}

    </button>

    )
}