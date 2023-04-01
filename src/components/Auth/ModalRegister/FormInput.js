import { modalState } from '@/atoms/modalState'
import ButtonCustom from '@/components/Common/ButtonCustom'
import InputCustom from '@/components/Common/InputCustom'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { InputAddress, InputBirthDay, InputConfirmPassword, InputEmail, InputFullName, InputNumberPhone, InputPassword } from './GroupInput'
import { handleValidateFormRegister } from '@/validators/register'
import { authState } from '@/atoms/authState'

function FormInput() {
    const [modal, setModal] = useRecoilState(modalState)

    const { register, errMessageRegister } = useRecoilValue(authState)
    const [auth, setAuth] = useRecoilState(authState)

    // redirect form login
    const handleRedirectLogin = () => {
        setModal({
            ...modal,
            modalLogin: true,
            modalRegister: false,
        })
    }


    const handleSubmitForm = async () => {
        const { status, objError } = await handleValidateFormRegister(register)

        if(status) 
        {
            // handle register
        } else {
            setAuth({
                ...auth,
                errMessageRegister: {
                    ...errMessageRegister,
                    errEmail: objError.email || '',
                    errPassword: objError.password || '',
                    errConfirmPassword: objError.confirmPassword || '',
                    errFullName: objError.fullName || '',
                    errNumberPhone: objError.numberPhone || '', 
                    errBirthDay: objError.birthDay || '',
                    errAddress: objError.address || '',
                },
            })
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