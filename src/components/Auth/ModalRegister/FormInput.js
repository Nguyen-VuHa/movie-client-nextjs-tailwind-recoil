import ButtonCustom from '@/components/Common/ButtonCustom'
import React, { useState } from 'react'
import { InputAddress, InputBirthDay, InputConfirmPassword, InputEmail, InputFullName, InputNumberPhone, InputPassword } from './GroupInput'
import { handleValidateFormRegister } from '@/validators/register'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setModalLogin, setModalSignUp } from '@/redux/reducers/modalStatus.reducer'

function FormInput() {
    const { formSignIn } = useSelector(state => state.authState)
    const [isLoading, setIsLoading] = useState(false) // loading submit form
    const dispatch = useDispatch()
    // redirect form login
    const handleRedirectLogin = () => {
        dispatch(setModalSignUp(false))
        dispatch(setModalLogin(true))
    }

    const handleSubmitForm = async () => {
        const result = await handleValidateFormRegister(formSignIn)

        if(result && result?.status) 
        {
            // handle register
            setIsLoading(true);
            
            const result = await handleCreateAccount(formSignIn);

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
            console.log(objError)
        }
    }

    return (
        <>
           <form 
                className="grid max-sm:block grid-cols-2 gap-4 !text-primary"
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmitForm();
                }}
            >
                <InputFullName />
                <InputNumberPhone />
                <InputBirthDay />
                <InputEmail />
                <InputPassword />
                <InputConfirmPassword />
                <div className='col-span-2'>
                    <InputAddress />
                </div>
                <div className='col-span-2 space-x-2 flex'>
                    <ButtonCustom
                        buttonName="Đăng ký"
                        className="w-fit max-sm:my-2"
                        type="submit"
                        loading={isLoading}
                        loadingText="Đang xử lí..."
                    />
                    <div className='col-span-1 flex justify-start items-center'>
                        <div className="text-sm font-medium text-primary-text">
                            Bạn đã có tài khoản? <a href="#" onClick={() => handleRedirectLogin()} className="text-blue-700 hover:underline dark:text-blue-500">Đăng nhập</a>
                        </div>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default FormInput