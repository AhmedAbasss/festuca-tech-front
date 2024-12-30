import React from 'react'
import { getTranslation } from '../../../ni18n/i18n';
 
export const LoadingForm = () => {
    const { t }: any = getTranslation();
    return (
        <div className="m-4 flex gap-x-3 items-center text-dark justify-center h-screen">
        <div className={"loader bg-primary"}/>
     </div>
)
}
