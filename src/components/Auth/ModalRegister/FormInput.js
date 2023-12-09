import ButtonCustom from '@/components/Common/ButtonCustom'
import React, { useState } from 'react'
import { InputAddress, InputBirthDay, InputConfirmPassword, InputEmail, InputFullName, InputNumberPhone, InputPassword } from './GroupInput'
import { handleValidateFormRegister } from '@/validators/register'
import { toast } from 'react-toastify'

function FormInput() {
    const [isLoading, setIsLoading] = useState(false) // loading submit form

    // redirect form login
    const handleRedirectLogin = () => {
        
    }

    const handleSubmitForm = async () => {
        const result = await handleValidateFormRegister(register)

        if(result && result?.status) 
        {
            // handle register
            setIsLoading(true);
            
            const result = await handleCreateAccount(register);

            if(result?.status === 'FAILED') 
            {
                toast.warn(result?.message)
            } 
            
            if(result?.status === 'SUCCESS') {
                toast.success(result?.message)
            }

            setIsLoading(false);
        } else {
            const { objError } = result
        }
    }

    return (
        <>
           <form 
                className="grid max-sm:block grid-cols-2 gap-3"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitForm();
                }}
            >
                <div className='col-span-1'>
                    <InputFullName />
                    <InputNumberPhone />
                    <InputBirthDay />
                </div>
                <div className='col-span-1'>
                    <InputEmail />
                    <InputPassword />
                    <InputConfirmPassword />
                </div>
                <div className='col-span-2'>
                    <InputAddress />
                </div>
                <div className='col-span-1'>
                    <ButtonCustom
                        buttonName="Đăng ký"
                        className="w-full max-sm:my-2"
                        type="submit"
                        loading={isLoading}
                        loadingText="Đang xử lí..."
                    />
                </div>
                <div className='col-span-1 flex justify-start items-center'>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Bạn đã có tài khoản? <a href="#" onClick={() => handleRedirectLogin()} className="text-blue-700 hover:underline dark:text-blue-500">Đăng nhập</a>
                    </div>
                </div>
            </form>
        </>
    )
}

export default FormInput