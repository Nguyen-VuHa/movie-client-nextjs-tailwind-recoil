import ButtonCustom from '@/components/Common/ButtonCustom'
import React, { useState } from 'react'
import { InputAddress, InputBirthDay, InputConfirmPassword, InputEmail, InputFullName, InputNumberPhone, InputPassword } from './GroupInput'
import { handleValidateFormRegister } from '@/validators/register'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'
import { actionAuth } from '@/redux/reducers/auth.reducer'

function FormInput() {
    const  { modalSignUp } = useSelector(state => state.modalStatusState)
    const { formSignUp } = useSelector(state => state.authState)
    const [isLoading, setIsLoading] = useState(false) // loading submit form
    const dispatch = useDispatch()
    // redirect form login
    const handleRedirectLogin = () => {
        dispatch(actionModal.setModalSignUp(false))
        dispatch(actionModal.setModalLogin(true))
    }

    const handleSubmitForm = async () => {
        const result = await handleValidateFormRegister(formSignUp)

        if(result && result?.status) 
        {
            // handle register
            setIsLoading(true);
            
            const result = await handleCreateAccount(formSignUp);

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
            dispatch(actionAuth.setErrorMessageSingUp(objError))
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
                <div className={`input-form ${modalSignUp && 'show' || ''}`}>
                    <InputFullName />
                </div>
                <div className={`input-form !delay-[100ms] ${modalSignUp && 'show' || ''}`}>
                    <InputNumberPhone />
                </div>
                <div className={`input-form !delay-[200ms] ${modalSignUp && 'show' || ''}`}>
                    <InputBirthDay />
                </div>
                <div className={`input-form !delay-[300ms] ${modalSignUp && 'show' || ''}`}>
                    <InputEmail />
                </div>
                <div className={`input-form !delay-[400ms] ${modalSignUp && 'show' || ''}`}>
                    <InputPassword />
                </div>
                <div className={`input-form !delay-[500ms] ${modalSignUp && 'show' || ''}`}>
                    <InputConfirmPassword />
                </div>
                <div className={`col-span-2 input-form !delay-[600ms] ${modalSignUp && 'show' || ''}`}>
                    <InputAddress />
                </div>
                <div className={`!flex col-span-2 space-x-2 input-form !delay-[700ms] ${modalSignUp && 'show' || ''}`}>
                    <ButtonCustom
                        buttonName="Đăng ký"
                        className="w-fit max-sm:my-2"
                        type="submit"
                        loading={isLoading}
                        loadingText="Đang xử lí..."
                    />
                    <div className='col-span-1 flex justify-start items-center'>
                        <div className="text-sm font-medium text-primary-text">
                            Bạn đã có tài khoản? <a  href="#" onClick={() => handleRedirectLogin()} className="ml-2 text-blue-700 hover:underline dark:text-blue-500">Đăng nhập</a>
                        </div>
                    </div>
                </div>
                
            </form>
        </>
    )
}

export default FormInput