import { Field, FormikProps, FormikValues } from 'formik';
import React, { ReactNode, useState } from 'react';
import Upload from 'rc-upload';
import { getTranslation } from '../../../ni18n/i18n';
import { DeleteIcons } from '../common/icons/Actions';
import { RcFile } from 'rc-upload/lib/interface';
 
// Assuming you want to make this component generic for any form values
// ! TODO:
interface InputFormProps<T = FormikValues> {
    formikProps: FormikProps<T>;
    name: keyof T & string;
    title: string;
    placeholder: string;
    icon?: ReactNode;
    props?: React.InputHTMLAttributes<HTMLInputElement>;
    className?: string;
    valueFileName?: string;
    isFileUploaded?: boolean;
}

export const UploadFileForm = <T extends FormikValues>({
    formikProps,
    name,
    title,
    placeholder,
    icon,
    props,
    className,
    valueFileName,
    isFileUploaded
}: InputFormProps<T>): React.ReactElement => {
    let pathArr = name.split('.');
    const { t }: any = getTranslation();
    let errorValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.errors);
    let touchedValue = pathArr.reduce((prev: any, curr) => prev && prev[curr], formikProps.touched);
    const [upLoading, setUpLoading] = useState(false);
    const [fileName, setFileName] = useState<String | undefined>(valueFileName);
    const [image, setImage] = useState(valueFileName ? true : false);
    const [sizeFile, setSizeFile] = useState<String | undefined>();
    function convertBase64(file: RcFile): any {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result);
            };
            fileReader.onerror = (error) => {
                reject(error);
            };
        });
    }

    return (
        <div
            className={`mb-3 w-full ${formikProps.submitCount ? (errorValue && touchedValue ? 'has-error' : '') : ''}`}>
            <label className='font-normal' htmlFor={name}>{title} <span className='text-danger'>(10MB)</span></label>
            <div className="relative w-full group">
                {fileName && <div
                    onClick={() => {
                        formikProps.setFieldValue(name, null);
                        setFileName(undefined);
                        setImage(false);
                    }}
                    className='absolute group  hidden  group-hover:block  hover:bg-[black]/5 rounded-full left-0 mt-2 m-2'>
                    <DeleteIcons className=' group-hover:text-danger bg-danger/10 cursor-pointer' />
                </div>}
                <Upload
                    {...isFileUploaded && { accept: '.pdf' }}
                    className={`${image ? "h-[150px!important]" : "h-[50px!important]"} w-[100%!important] rounded-md border border-base border-dashed hover:border-primary 
                    ${formikProps.submitCount ?
                            (errorValue && touchedValue ? 'border-danger !bg-danger/[0.08]' : '') : ''
                        }`}
                    type="drag"
                    beforeUpload={async (file) => {

                        if (file) {
                            if (isFileUploaded && file) {
                                // check if file already exists
                                console.log("File already exists");

                            }

                            if (file.size > 10 * 1024 * 1024) {
                                console.log("File size exceeds the maximum limit of 10MB");
                                setSizeFile(t('file-size-exceeds-the-maximum-limit-of-10MB'))
                                return false;
                            }
                            // check if the file is an image
                            const isImage = (file: File): boolean => {
                                const acceptedImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
                                return acceptedImageTypes.includes(file.type);
                            };


                            setUpLoading((upLoading) => !upLoading);
                            setTimeout(async () => {
                                formikProps.setFieldValue(name, file);
                                if (isImage(file)) {
                                    const base64: any = await convertBase64(file);
                                    setImage(true)
                                    setFileName(base64)

                                } else {
                                    setFileName(file.name);

                                }
                                setUpLoading((upLoading) => !upLoading);
                                setSizeFile(undefined);
                            }, 500);
                        }
                        return false;
                    }}
                    multiple={false}
                    onSuccess={(res) => {
                        console.log(res);

                    }}
                    style={{ display: 'inline-block' }}
                >
                    <div className='flex justify-center items-center h-full w-full'>
                        {upLoading ?
                            <div className="loaderDots"></div>
                            :
                            fileName ?
                                <>
                                    {image && !isFileUploaded ? <img
                                        onError={() => {
                                            setImage(false);
                                            setFileName(undefined);
                                        }}
                                        src={`${fileName}`} className=' w-full h-[140px!important]' /> : <p className="text-gray-400">{fileName}</p>}
                                </>
                                :
                                <p className={`
                                    
                                    ${formikProps.submitCount ?
                                        (errorValue && touchedValue ? 'text-danger' : 'text-gray-400') : 'text-gray-400'
                                    }
                                    `}>{t('click-or-drag-file-to-this-area-to-upload')}</p>
                        }
                    </div>
                </Upload>
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
            {sizeFile && <div className="mt-[2px] w-full p-1 text-sm text-danger">{sizeFile}</div>}
        </div>
    );
};
