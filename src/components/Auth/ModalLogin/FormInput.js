import React, { useEffect, useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import ButtonCustom from '@/components/Common/ButtonCustom'
import { InputEmail, InputPassword } from './GroupInput'
import { handleValidateFormLogin } from '@/validators/login'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'
import { useDispatch, useSelector } from 'react-redux'
import { actionAuth } from '@/redux/reducers/auth.reducer'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'

function FormInput() {
    const  { modalLogin } = useSelector(state => state.modalStatusState)
    const [isLoading, setIsLoading] = useState(false) // loading submit form
    const dispatch = useDispatch()
    const { formSignIn } = useSelector(state => state.authState)
    const { ipAddress } = formSignIn

    // redirect form register
    const handleRegister = () => {
        dispatch(actionModal.setModalLogin(false))
        dispatch(actionModal.setModalSignUp(true))
    }

    useEffect(() => {
        if(!ipAddress) {
            fetch('https://api.ipify.org?format=json')
            .then(response => response.json())
            .then(data => {
                dispatch(actionAuth.setIPAdressSignIn(data.ip))
            })
            .catch(error => console.log(error))
        }
    }, [])

    // handle submit login
    const handleLogin = async () => {
        const { status, objError } = await handleValidateFormLogin(formSignIn) 

        if(status) 
        {
            // handle register
            setIsLoading(true);
            
           const result = await handleLoginAccount(formSignIn);

            if(result?.status === 'FAILED') 
            {
                toast.warn(result?.message)
            } 
            
            if(result.status === 'SUCCESS') {
                toast.success(result?.message)

                // setModal({
                //     ...modal,
                //     modalLogin: false,
                // })

                const { accessToken, refreshToken, user } = result.data;
                Cookies.set('token', accessToken, { expires: 365  })
                Cookies.set('refreshToken', refreshToken, { expires: 365  })
                Cookies.set('user', JSON.stringify(user), { expires: 365  })
            }

            setIsLoading(false);
        } else {
            dispatch(actionAuth.setErrorMessageSingIn(objError))
        }

    }

    return (
        <form 
            className="space-y-3"
            onSubmit={(e) => {
                e.preventDefault()
                handleLogin()
            }}
        >
            <div className={`input-form ${modalLogin && 'show' || ''}`}>
                <InputEmail />
            </div>
            <div className={`input-form !delay-[200ms] ${modalLogin && 'show' || ''}`}>
                <InputPassword />
            </div>
            <div className={`flex justify-between input-form !delay-[300ms] ${modalLogin && 'show' || ''}`}>
                <a href="#" className="text-sm text-blue-700 hover:underline">Quên mật khẩu?</a>
            </div>
            <ButtonCustom
                buttonName="Đăng nhập"
                className={`w-full flex input-form !delay-[400ms] ${modalLogin && 'show' || ''}`}
                type="submit"
                loading={isLoading}
                loadingText="Đang đăng nhập..."
            /> 
            <hr />
            <button 
                type="button" disabled={!isLoading} 
                className={`w-full justify-center transition-colors text-primary-bg 
                bg-[white] hover:text-white hover:bg-[#4285F4]/90 
                focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center 
                !inline-flex items-center mr-2 mb-2 input-form !delay-[500ms] ${modalLogin && 'show' || ''}`}
            >
                <FcGoogle size={22} className="mr-2" />
                Đăng nhập với Google
            </button>
            <div className={`text-sm font-medium text-gray-500 input-form !delay-[600ms] ${modalLogin && 'show' || ''}`}>
                Bạn chưa có tài khoản? <a href="#" onClick={() => handleRegister()} className="text-blue-700 hover:underline dark:text-blue-500">Đăng ký tài khoản</a>
            </div>
        </form>
    )
}

export default FormInput