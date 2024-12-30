import React from 'react';

export const AddIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"
            fill="none" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
    );
};

export const UpdateIcons = ({ className, isBorder }: { className?: string, isBorder?: boolean }) => {
    return (
        isBorder ? <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ltr:mr-3 rtl:ml-3"
        >
            <path
                d="M15.2869 3.15178L14.3601 4.07866L5.83882 12.5999L5.83881 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021L2.05445 20.6042C1.92743 20.9852 2.0266 21.4053 2.31063 21.6894C2.59466 21.9734 3.01478 22.0726 3.39584 21.9456L4.19792 21.6782L7.47918 20.5844L7.47919 20.5844C8.25353 20.3263 8.6407 20.1973 9.00498 20.0237C9.43469 19.8189 9.84082 19.5679 10.2162 19.2751C10.5344 19.0269 10.8229 18.7383 11.4001 18.1612L11.4001 18.1612L19.9213 9.63993L20.8482 8.71306C22.3839 7.17735 22.3839 4.68748 20.8482 3.15178C19.3125 1.61607 16.8226 1.61607 15.2869 3.15178Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                opacity="0.5"
                d="M14.36 4.07812C14.36 4.07812 14.4759 6.04774 16.2138 7.78564C17.9517 9.52354 19.9213 9.6394 19.9213 9.6394M4.19789 21.6777L2.32178 19.8015"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg> :
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                className="h-4.5 w-4.5">
                <path
                    opacity="0.5"
                    d="M22 10.5V12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2H13.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />
                <path
                    d="M17.3009 2.80624L16.652 3.45506L10.6872 9.41993C10.2832 9.82394 10.0812 10.0259 9.90743 10.2487C9.70249 10.5114 9.52679 10.7957 9.38344 11.0965C9.26191 11.3515 9.17157 11.6225 8.99089 12.1646L8.41242 13.9L8.03811 15.0229C7.9492 15.2897 8.01862 15.5837 8.21744 15.7826C8.41626 15.9814 8.71035 16.0508 8.97709 15.9619L10.1 15.5876L11.8354 15.0091C12.3775 14.8284 12.6485 14.7381 12.9035 14.6166C13.2043 14.4732 13.4886 14.2975 13.7513 14.0926C13.9741 13.9188 14.1761 13.7168 14.5801 13.3128L20.5449 7.34795L21.1938 6.69914C22.2687 5.62415 22.2687 3.88124 21.1938 2.80624C20.1188 1.73125 18.3759 1.73125 17.3009 2.80624Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
                <path
                    opacity="0.5"
                    d="M16.6522 3.45508C16.6522 3.45508 16.7333 4.83381 17.9499 6.05034C19.1664 7.26687 20.5451 7.34797 20.5451 7.34797M10.1002 15.5876L8.4126 13.9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                />
            </svg>
    );
};
export const DeleteIcons = ({ className }: { className?: string }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <path d="M20.5001 6H3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path
                d="M18.8334 8.5L18.3735 15.3991C18.1965 18.054 18.108 19.3815 17.243 20.1907C16.378 21 15.0476 21 12.3868 21H11.6134C8.9526 21 7.6222 21 6.75719 20.1907C5.89218 19.3815 5.80368 18.054 5.62669 15.3991L5.16675 8.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
            ></path>
            <path opacity="0.5" d="M9.5 11L10 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path opacity="0.5" d="M14.5 11L14 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"></path>
            <path
                opacity="0.5"
                d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"
                stroke="currentColor"
                strokeWidth="1.5"
            ></path>
        </svg>
    );
};


export const RestoreIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M10.6634 3.47789C10.9518 3.77526 10.9445 4.25007 10.6471 4.53843L7.8508 7.25H18C18.4142 7.25 18.75 7.58579 18.75 8C18.75 8.41421 18.4142 8.75 18 8.75H7.8508L10.6471 11.4616C10.9445 11.7499 10.9518 12.2247 10.6634 12.5221C10.3751 12.8195 9.90026 12.8268 9.60289 12.5384L5.47789 8.53843C5.33222 8.39717 5.25 8.20291 5.25 8C5.25 7.79709 5.33222 7.60283 5.47789 7.46158L9.60289 3.46158C9.90026 3.17322 10.3751 3.18053 10.6634 3.47789ZM13.3366 11.4779C13.6249 11.1805 14.0997 11.1732 14.3971 11.4616L18.5221 15.4616C18.6678 15.6028 18.75 15.7971 18.75 16C18.75 16.2029 18.6678 16.3972 18.5221 16.5384L14.3971 20.5384C14.0997 20.8268 13.6249 20.8195 13.3366 20.5221C13.0482 20.2247 13.0555 19.7499 13.3529 19.4616L16.1492 16.75L6 16.75C5.58579 16.75 5.25 16.4142 5.25 16C5.25 15.5858 5.58579 15.25 6 15.25L16.1492 15.25L13.3529 12.5384C13.0555 12.2501 13.0482 11.7753 13.3366 11.4779Z"
                fill="currentColor" />
        </svg>
    );
};

export const GroupIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="21" height="21"
            viewBox="0 0 21 21" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M8 0.25C5.37665 0.25 3.25 2.37665 3.25 5C3.25 7.62335 5.37665 9.75 8 9.75C10.6234 9.75 12.75 7.62335 12.75 5C12.75 2.37665 10.6234 0.25 8 0.25ZM4.75 5C4.75 3.20507 6.20507 1.75 8 1.75C9.79493 1.75 11.25 3.20507 11.25 5C11.25 6.79493 9.79493 8.25 8 8.25C6.20507 8.25 4.75 6.79493 4.75 5Z"
                fill="currentColor" />
            <path
                d="M14 1.25C13.5858 1.25 13.25 1.58579 13.25 2C13.25 2.41421 13.5858 2.75 14 2.75C15.2426 2.75 16.25 3.75736 16.25 5C16.25 6.24264 15.2426 7.25 14 7.25C13.5858 7.25 13.25 7.58579 13.25 8C13.25 8.41421 13.5858 8.75 14 8.75C16.0711 8.75 17.75 7.07107 17.75 5C17.75 2.92893 16.0711 1.25 14 1.25Z"
                fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd"
                d="M2.67815 12.5204C4.07752 11.7208 5.96067 11.25 8 11.25C10.0393 11.25 11.9225 11.7208 13.3219 12.5204C14.7 13.3079 15.75 14.5101 15.75 16C15.75 17.4899 14.7 18.6921 13.3219 19.4796C11.9225 20.2792 10.0393 20.75 8 20.75C5.96067 20.75 4.07752 20.2792 2.67815 19.4796C1.3 18.6921 0.25 17.4899 0.25 16C0.25 14.5101 1.3 13.3079 2.67815 12.5204ZM3.42236 13.8228C2.26701 14.483 1.75 15.2807 1.75 16C1.75 16.7193 2.26701 17.517 3.42236 18.1772C4.55649 18.8253 6.17334 19.25 8 19.25C9.82666 19.25 11.4435 18.8253 12.5776 18.1772C13.733 17.517 14.25 16.7193 14.25 16C14.25 15.2807 13.733 14.483 12.5776 13.8228C11.4435 13.1747 9.82666 12.75 8 12.75C6.17334 12.75 4.55649 13.1747 3.42236 13.8228Z"
                fill="currentColor" />
            <path
                d="M17.1607 12.2674C16.7561 12.1787 16.3561 12.4347 16.2674 12.8393C16.1787 13.2439 16.4347 13.6439 16.8393 13.7326C17.6317 13.9064 18.2649 14.2048 18.6829 14.5468C19.1014 14.8892 19.25 15.2237 19.25 15.5C19.25 15.7507 19.1294 16.045 18.7969 16.3539C18.462 16.665 17.9475 16.9524 17.2838 17.1523C16.8871 17.2717 16.6624 17.69 16.7818 18.0867C16.9013 18.4833 17.3196 18.708 17.7162 18.5886C18.5388 18.3409 19.2743 17.9578 19.8178 17.4529C20.3637 16.9457 20.75 16.2786 20.75 15.5C20.75 14.6352 20.2758 13.912 19.6328 13.3859C18.9893 12.8593 18.1225 12.4783 17.1607 12.2674Z"
                fill="currentColor" />
        </svg>
    );
};

export const PrivilegesIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24"
            viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M15.0595 10.4995C15.3353 10.1905 15.3085 9.71642 14.9995 9.44055C14.6905 9.16467 14.2164 9.19151 13.9405 9.50049L10.9286 12.8739L10.0595 11.9005C9.78358 11.5915 9.30947 11.5647 9.00049 11.8405C8.69151 12.1164 8.66467 12.5905 8.94055 12.8995L10.3691 14.4995C10.5114 14.6589 10.7149 14.75 10.9286 14.75C11.1422 14.75 11.3457 14.6589 11.488 14.4995L15.0595 10.4995Z"
                fill="currentColor"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 1.25C11.0625 1.25 10.1673 1.55658 8.72339 2.05112L7.99595 2.30014C6.51462 2.8072 5.3714 3.19852 4.55303 3.53099C4.14078 3.69846 3.78637 3.86067 3.50098 4.02641C3.22634 4.1859 2.95082 4.38484 2.76363 4.65154C2.5786 4.91516 2.48293 5.23924 2.42281 5.55122C2.36031 5.87556 2.32262 6.26464 2.2983 6.71136C2.25 7.59836 2.25 8.81351 2.25 10.3896V11.9914C2.25 18.0924 6.85803 21.0175 9.59833 22.2146L9.62543 22.2264C9.96523 22.3749 10.2846 22.5144 10.6516 22.6084C11.0391 22.7076 11.4507 22.75 12 22.75C12.5493 22.75 12.9609 22.7076 13.3484 22.6084C13.7154 22.5144 14.0348 22.3749 14.3745 22.2264L14.4017 22.2146C17.142 21.0175 21.75 18.0924 21.75 11.9914V10.3898C21.75 8.81361 21.75 7.5984 21.7017 6.71136C21.6774 6.26464 21.6397 5.87556 21.5772 5.55122C21.5171 5.23924 21.4214 4.91516 21.2364 4.65154C21.0492 4.38484 20.7737 4.1859 20.499 4.02641C20.2136 3.86067 19.8592 3.69846 19.447 3.53099C18.6286 3.19852 17.4854 2.8072 16.004 2.30013L15.2766 2.05112C13.8327 1.55658 12.9375 1.25 12 1.25ZM9.08062 3.5143C10.6951 2.96164 11.3423 2.75 12 2.75C12.6577 2.75 13.3049 2.96164 14.9194 3.5143L15.4922 3.71037C17.0048 4.22814 18.1079 4.60605 18.8824 4.92069C19.269 5.07774 19.5491 5.20935 19.7457 5.32353C19.8428 5.3799 19.9097 5.42642 19.9543 5.46273C19.9922 5.49349 20.0066 5.51092 20.0087 5.51348C20.0106 5.5166 20.0231 5.53737 20.0406 5.58654C20.0606 5.64265 20.0827 5.72309 20.1043 5.83506C20.148 6.06169 20.1811 6.37301 20.2039 6.79292C20.2497 7.63411 20.25 8.80833 20.25 10.4167V11.9914C20.25 17.1665 16.3801 19.7135 13.8012 20.84C13.4297 21.0023 13.2152 21.0941 12.9764 21.1552C12.7483 21.2136 12.47 21.25 12 21.25C11.53 21.25 11.2517 21.2136 11.0236 21.1552C10.7848 21.0941 10.5703 21.0023 10.1988 20.84C7.6199 19.7135 3.75 17.1665 3.75 11.9914V10.4167C3.75 8.80833 3.75028 7.63411 3.79608 6.79292C3.81894 6.37301 3.85204 6.06169 3.89571 5.83506C3.91729 5.72309 3.93944 5.64265 3.95943 5.58654C3.97693 5.5374 3.98936 5.51663 3.99129 5.51349C3.99336 5.51095 4.0078 5.49351 4.04567 5.46273C4.09034 5.42642 4.15722 5.3799 4.25429 5.32353C4.4509 5.20935 4.731 5.07774 5.11759 4.92069C5.8921 4.60605 6.99521 4.22814 8.5078 3.71037L9.08062 3.5143Z"
                fill="currentColor"
            />
        </svg>
    );
};

export const ViewIcons = ({ className }: { className?: string }) => {
    return (
        <svg width="18" height="18"
            viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}>
            <path
                opacity="0.5"
                d="M3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C4.97196 6.49956 7.81811 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
            <path
                d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                stroke="currentColor"
                strokeWidth="1.5"
            />
        </svg>
    );
};


export const MoreIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className}
            width="24" height="24" viewBox="0 0 24 24"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10C6.10457 10 7 10.8954 7 12Z"
                fill="currentColor" />
            <path
                d="M14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12Z"
                fill="currentColor" />
            <path
                d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z"
                fill="currentColor" />
        </svg>
    );
};

export const FilterIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className}
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd"
                d="M4.95301 2.25C4.96862 2.25 4.98429 2.25 5.00001 2.25L19.047 2.25C19.7139 2.24997 20.2841 2.24994 20.7398 2.30742C21.2231 2.36839 21.6902 2.50529 22.0738 2.86524C22.4643 3.23154 22.6194 3.68856 22.6875 4.16405C22.7501 4.60084 22.7501 5.14397 22.75 5.76358L22.75 6.54012C22.75 7.02863 22.75 7.45095 22.7136 7.80311C22.6743 8.18206 22.5885 8.5376 22.3825 8.87893C22.1781 9.2177 21.9028 9.4636 21.5854 9.68404C21.2865 9.8917 20.9045 10.1067 20.4553 10.3596L17.5129 12.0159C16.8431 12.393 16.6099 12.5288 16.4542 12.6639C16.0966 12.9744 15.8918 13.3188 15.7956 13.7504C15.7545 13.9349 15.75 14.1672 15.75 14.8729L15.75 17.605C15.7501 18.5062 15.7501 19.2714 15.6574 19.8596C15.5587 20.4851 15.3298 21.0849 14.7298 21.4602C14.1434 21.827 13.4975 21.7933 12.8698 21.6442C12.2653 21.5007 11.5203 21.2094 10.6264 20.8599L10.5395 20.826C10.1208 20.6623 9.75411 20.519 9.46385 20.3691C9.1519 20.208 8.8622 20.0076 8.64055 19.6957C8.41641 19.3803 8.32655 19.042 8.28648 18.6963C8.24994 18.381 8.24997 18.0026 8.25 17.5806L8.25 14.8729C8.25 14.1672 8.24555 13.9349 8.20442 13.7504C8.1082 13.3188 7.90342 12.9744 7.54584 12.6639C7.39014 12.5288 7.15692 12.393 6.48714 12.0159L3.54471 10.3596C3.09549 10.1067 2.71353 9.8917 2.41458 9.68404C2.09724 9.4636 1.82191 9.2177 1.61747 8.87893C1.41148 8.5376 1.32571 8.18206 1.28645 7.80311C1.24996 7.45094 1.24998 7.02863 1.25 6.54012L1.25001 5.81466C1.25001 5.79757 1.25 5.78054 1.25 5.76357C1.24996 5.14396 1.24991 4.60084 1.31251 4.16405C1.38064 3.68856 1.53576 3.23154 1.92618 2.86524C2.30983 2.50529 2.77695 2.36839 3.26024 2.30742C3.71592 2.24994 4.28607 2.24997 4.95301 2.25ZM3.44796 3.79563C3.1143 3.83772 3.0082 3.90691 2.95251 3.95916C2.90359 4.00505 2.83904 4.08585 2.79734 4.37683C2.75181 4.69454 2.75001 5.12868 2.75001 5.81466V6.50448C2.75001 7.03869 2.75093 7.38278 2.77846 7.64854C2.8041 7.89605 2.84813 8.01507 2.90174 8.10391C2.9569 8.19532 3.0485 8.298 3.27034 8.45209C3.50406 8.61444 3.82336 8.79508 4.30993 9.06899L7.22296 10.7088C7.25024 10.7242 7.2771 10.7393 7.30357 10.7542C7.86227 11.0685 8.24278 11.2826 8.5292 11.5312C9.12056 12.0446 9.49997 12.6682 9.66847 13.424C9.75036 13.7913 9.75022 14.2031 9.75002 14.7845C9.75002 14.8135 9.75 14.843 9.75 14.8729V17.5424C9.75 18.0146 9.75117 18.305 9.77651 18.5236C9.79942 18.7213 9.83552 18.7878 9.8633 18.8269C9.89359 18.8695 9.95357 18.9338 10.152 19.0363C10.3644 19.146 10.6571 19.2614 11.1192 19.442C12.0802 19.8177 12.7266 20.0685 13.2164 20.1848C13.695 20.2985 13.8527 20.2396 13.9343 20.1885C14.0023 20.146 14.1073 20.0597 14.1757 19.626C14.2478 19.1686 14.25 18.5234 14.25 17.5424V14.8729C14.25 14.843 14.25 14.8135 14.25 14.7845C14.2498 14.2031 14.2496 13.7913 14.3315 13.424C14.5 12.6682 14.8794 12.0446 15.4708 11.5312C15.7572 11.2826 16.1377 11.0685 16.6964 10.7542C16.7229 10.7393 16.7498 10.7242 16.7771 10.7088L19.6901 9.06899C20.1767 8.79508 20.496 8.61444 20.7297 8.45209C20.9515 8.298 21.0431 8.19532 21.0983 8.10391C21.1519 8.01507 21.1959 7.89605 21.2215 7.64854C21.2491 7.38278 21.25 7.03869 21.25 6.50448V5.81466C21.25 5.12868 21.2482 4.69454 21.2027 4.37683C21.161 4.08585 21.0964 4.00505 21.0475 3.95916C20.9918 3.90691 20.8857 3.83772 20.5521 3.79563C20.2015 3.75141 19.727 3.75 19 3.75H5.00001C4.27297 3.75 3.79854 3.75141 3.44796 3.79563Z"
                fill="currentColor" />
        </svg>


    );
};
export const ArrowIcons = ({ className }: { className?: string }) => {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M8.51192 4.43057C8.82641 4.161 9.29989 4.19743 9.56946 4.51192L15.5695 11.5119C15.8102 11.7928 15.8102 12.2072 15.5695 12.4881L9.56946 19.4881C9.29989 19.8026 8.82641 19.839 8.51192 19.5695C8.19743 19.2999 8.161 18.8264 8.43057 18.5119L14.0122 12L8.43057 5.48811C8.161 5.17361 8.19743 4.70014 8.51192 4.43057Z" fill="currentColor" />
        </svg>
    );
};






