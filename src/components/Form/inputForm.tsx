import { Field, FormikProps, FormikValues } from 'formik';
import React, { ReactNode } from 'react';

// Assuming you want to make this component generic for any form values
interface InputFormProps<T = FormikValues> {
    formikProps: FormikProps<T>;
    name: keyof T & string;
    title: string;
    placeholder: string;
    iconRight?: ReactNode;
    iconLeft?: ReactNode;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: string;
}

export const InputForm = <T extends FormikValues>({
    formikProps,
    name,
    title,
    placeholder,
    iconRight,
    iconLeft,
    props,
    className
}: InputFormProps<T>): React.ReactElement => {
    let pathArr = name.split('.');
    let errorValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.errors);
    let touchedValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.touched);

    return (
        <div
            className={`mb-3 w-full ${formikProps.submitCount ? (errorValue && touchedValue ? 'has-error' : '') : ''}`}>
            <label className='font-normal' htmlFor={name}>{title}</label>
            <div className="relative w-full flex"> 
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">{iconRight}</div>
                <Field {...props} name={name} id={name} placeholder={placeholder}
                    className={`${className} form-input text-sm font-normal`} />
                <div className="absolute inset-y-0 left-0 flex items-center pr-3">{iconLeft}</div>
            </div>
            <div>
                {formikProps.submitCount ?
                    (errorValue && touchedValue ?
                        <div className="mt-[2px] w-full p-1 text-sm text-danger">{errorValue}</div> : <></>
                    )
                    :
                    <>
                    </>
                }
            </div>
        </div>
    );
};
export const InputCurrencyMaskForm = <T extends FormikValues>({
    formikProps,
    name,
    title,
    placeholder,
    iconLeft,
    props,
    className
}: InputFormProps<T>): React.ReactElement => {
    // Helper function to navigate deep objects
    const getNestedValue = (path: string, obj: any) => path.split('.').reduce((res, key) => (res ? res[key] : undefined), obj);
    let errorValue = getNestedValue(name, formikProps.errors);
    let touchedValue = getNestedValue(name, formikProps.touched);

    const formatNumberWithCommas = (x: string): string => {
        const parts = x?.toString().split(".") || [];
        parts[0] = parts[0]?.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };

    const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numericValue = e.target.value.replace(/,/g, '');
        formikProps.setFieldValue(name, numericValue);
    };
    return (
        <div
            className={`mb-3 w-full ${formikProps.submitCount ? (errorValue && touchedValue ? 'has-error' : '') : ''}`}>
            <label className='font-normal' htmlFor={name}>{title}</label>
            <div className="relative w-full">
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">{iconLeft}</div>
                <Field
                    {...props}
                    as="input"
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className={`${className} form-input text-sm font-normal`}
                    onChange={handleNumberChange}
                    value={formatNumberWithCommas(getNestedValue(name, formikProps.values) as string)} />
            </div>
            {formikProps.submitCount ?
                (errorValue && touchedValue ?
                    <div className="mt-[2px] w-full p-1 text-sm text-danger">{errorValue}</div> : <></>
                )
                :
                <>
                </>
            }
        </div>
    );
};
