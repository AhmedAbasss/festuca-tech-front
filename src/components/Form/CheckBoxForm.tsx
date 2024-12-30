import { FormikProps, FormikValues } from "formik";
import { ReactNode } from "react";

interface CheckBoxFormProps<T = FormikValues> {
    formikProps: FormikProps<T>;
    name: keyof T & string;
    title: string;
    icon?: ReactNode;
    props?: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
    className?: string;
    type?: string;
}




export const CheckBoxForm = <T extends FormikValues>({
    formikProps,
    name,
    title,
    props,
    className
}: CheckBoxFormProps<T>): React.ReactElement => {
    let pathArr = name.split('.');
    let errorValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.errors);
    let touchedValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.touched);

    return (
        <div
            className={`w-full ${formikProps.submitCount ? (errorValue && touchedValue ? 'has-error' : '') : ''}`}>
            <label className="flex w-full   items-center">
                <input type="checkbox" {...props} name={name} id={name} className={"form-checkbox peer" + className} />
                <span className="peer-checked:text-primary font-normal">
                    {title}
                </span>
            </label>
            <div>

                {formikProps.submitCount ?
                    (errorValue && touchedValue ?
                        <div className="mt-[2px] w-full p-1 text-sm text-danger">{errorValue}</div> : <></>
                    )
                    :
                    <> </>
                }

            </div>
        </div>
    );
};
