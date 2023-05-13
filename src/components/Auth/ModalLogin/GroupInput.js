import { errorMessageLoginState, loginState } from '@/atoms/authState'
import InputCustom from '@/components/Common/InputCustom'
import React from 'react'
import { useRecoilState } from 'recoil'


export const InputEmail = () => {
    const [login, setLogin] = useRecoilState(loginState)
    const { email } = login

    const [errLogin, setErrLogin] = useRecoilState(errorMessageLoginState)
    const { errEmail } = errLogin

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <InputCustom 
                placeholder="xxx@gmail.com..."
                value={email}
                onChange={(text) => {
                    setLogin({
                        ...login,
                        email: text,
                    })

                    if(errEmail) 
                        setErrLogin({
                            ...errLogin,
                            errEmail: ''
                        })
                }}
                errorMessage={errEmail}
            />
        </div>
    )
}


export const InputPassword = () => {
    const [login, setLogin] = useRecoilState(loginState);
    const { password } = login;

    const [errLogin, setErrLogin] = useRecoilState(errorMessageLoginState)
    const { errPassword } = errLogin

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Mật khẩu
            </label>
            <InputCustom 
                placeholder="xxxxxx"
                type="password"
                value={password}
                onChange={(text) => {
                    setLogin({
                        ...login,
                        password: text,
                    })

                    if(errPassword)
                        setErrLogin({
                            ...errLogin,
                            errPassword: ''
                        })
                }}
                errorMessage={errPassword}
            />
        </div>
    )
}
