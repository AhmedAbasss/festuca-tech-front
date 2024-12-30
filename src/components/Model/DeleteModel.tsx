
import Model from '@/components/Model'
import React from 'react'


import { getTranslation } from '../../../ni18n/i18n';
import { useRouter, useSearchParams } from 'next/navigation';
import { ButtonForm } from '../Form/ButtonForm';
const DeleteModel = ({ name, title, handleRemove, isLoading, description }: { name: string, title: string, handleRemove: any, isLoading: boolean, description: string }) => {
    const { t } = getTranslation();
    const router = useRouter();
    const searchParams = useSearchParams();
    const openDeleteModel = searchParams.get("openDeleteModel") ?? "false"
    return (
        <Model
            title={title}
            open={openDeleteModel == "true"}
            setOpen={(open) => {
                router.back();
            }}

        >
            <div>
                <h3 className="font-bold my-3 !font-[Almarai] ">
                    {description} <span className=" font-bold text-red-700 px-1">{name}</span>
                </h3>

                <ButtonForm
                    title={t("remove")}
                    isLoading={isLoading}
                    props={{
                        className: "w-full !bg-danger !hover:bg-danger/80 text-white dark:text-white-dark dark:!hover:bg-danger/80 dark:hover:text-white-dark !border-danger/70",
                        onClick: handleRemove,
                    }}
                />

            </div>
        </Model>
    )
}

export default DeleteModel