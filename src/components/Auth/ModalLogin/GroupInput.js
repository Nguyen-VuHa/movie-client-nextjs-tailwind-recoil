
import InputCustom from '@/components/Common/InputCustom'
import React from 'react'


export const InputEmail = () => {

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
    const { password } = login;

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
