 import { IRootState } from '@/store';
import { FormikProps, FormikValues } from 'formik';
import React, { ReactNode } from 'react';
 import { useSelector } from 'react-redux';
import Select, { ActionMeta, MultiValue, Props as SelectProps, SingleValue } from 'react-select';
import { getTranslation } from '../../../ni18n/i18n';

export interface OptionType {
    value: string; // or number, depending on your value type
    label: string;
}

interface SelectFormProps<T = FormikValues> {
    formikProps: FormikProps<T>;
    name: keyof T & string;
    title: string;
    placeholder: string;
    icon?: ReactNode;
    props?: SelectProps<OptionType>;
    className?: string;
    options: OptionType[];
    isLoading?: boolean;
}

export const SelectForm = <T extends FormikValues>({
    formikProps,
    name,
    title,
    placeholder,
    props,
    className,
    isLoading,
    options
}: SelectFormProps<T>): React.ReactElement => {
    const { t } = getTranslation();
    let pathArr = name.split('.');
    let errorValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.errors);
    let touchedValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.touched);

    const isDark = useSelector((state: IRootState) => state.themeConfig.isDarkMode);



    // Custom onChange handler to integrate with Formik
    const handleChange = (
        newValue: SingleValue<OptionType> | MultiValue<OptionType>,
        actionMeta: ActionMeta<OptionType>
    ) => {
        if (actionMeta.action === 'select-option' || actionMeta.action === 'remove-value') {
            if (Array.isArray(newValue)) {
                // Handle multi-value (array of options) case
                const values = newValue.map(item => item.value);
                formikProps.setFieldValue(name, values);
            } else {
                // Handle single-value case
                formikProps.setFieldValue(name, newValue ? (newValue as OptionType)?.value : '');

            }
        }
    };
    // console.log("pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.values",pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.values));

    const handleValue = props?.isMulti ? pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.values) : options?.find(item => item.value == pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.values));
    const combinedProps = {
        ...props,
        onChange: props?.onChange ? props.onChange : handleChange,
        value: handleValue // Use Formik's value, or default if not set
    };

    return (
        <div
            className={`custom-select  text-sm font-normal mb-3 ${formikProps.submitCount ? (errorValue && touchedValue ? 'has-error' : '') : ''} ${className || ''}`}>
            <label className='font-normal' htmlFor={name}>{title} </label>
            <Select
                {...combinedProps}
                placeholder={placeholder}
                options={options}
                isSearchable={true}
                isLoading={isLoading}
                noOptionsMessage={() => t('no-data')}
                styles={{
                    control: (baseStyle, state) => ({
                        ...baseStyle,
                        backgroundColor: formikProps.submitCount ? (errorValue && touchedValue ? 'rgb(231 81 90 / 0.08)' : isDark ? '#14141C' : '') : isDark ? '#14141C' : '',
                        borderColor: formikProps.submitCount ? (errorValue && touchedValue ? 'rgb(231 81 90  /1)' : isDark ? '#17263c' : 'rgb(224,230,237)') : isDark ? '#17263c' : 'rgb(224,230,237)',
                        color: formikProps.submitCount ? (!errorValue && !touchedValue ? 'rgb(231 81 90  /1)' : '') : '',
                        "&:hover": {
                            // Overwrittes the different states of border
                            borderColor: state.isFocused ? "#F65400" : "#F65400"
                        }
                    }),
                    menu: base => ({
                        ...base,
                        background: isDark ? '#14141C' : 'white',
                        zIndex:1111111111,
                        position:"relative",
                        height:"90px"
                    }),
                    menuList: base => ({
                        ...base,
                        // background: isDark ? '#14141C' : 'white',
                        zIndex:1111111111,
                        // position:"ab"
                        height:"90px"
                    }),
                    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                        return {
                            ...styles,
                            backgroundColor:
                                isSelected ? "#F65400" :
                                    isDark ? '#14141C' : 'white',
                            '&:hover': {
                                backgroundColor:
                                    isFocused ? '#F65400' : '',
                                color: 'white',
                            },
                            color: isSelected ? '#fff' : '',
                        }
                    },

                    input: (styles) => ({
                        ...styles,

                        color: formikProps.submitCount ? (errorValue && touchedValue ? 'rgb(231 81 90  /1)' : isDark ? '#fff' : '') : isDark ? '#fff' : '',
                        "&:hover": {
                            // Overwrittes the different states of border
                            borderColor: "#F65400"
                        }
                    }),

                }}
            />
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



