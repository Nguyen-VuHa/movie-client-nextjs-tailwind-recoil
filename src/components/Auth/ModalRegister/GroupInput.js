import { authState } from '@/atoms/authState'
import InputAreaCustom from '@/components/Common/InputAreaCustom'
import InputCustom from '@/components/Common/InputCustom'
import { handleRegexIsNumber } from '@/utils/regexIsNumber'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import dayjs from 'dayjs'

export const InputFullName = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { fullName } = register
    const { errFullName } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Họ & tên
            </label>
            <InputCustom 
                placeholder="Nguyễn Văn A..."
                value={fullName}
                onChange={(text) => {
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            fullName: text,
                        }
                    })

                    if(errFullName) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errFullName: '',
                            }
                        })
                    }
                }}
                errorMessage={errFullName}
            />
        </div>
    )
}


export const InputNumberPhone = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { numberPhone } = register
    const { errNumberPhone } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Số điện thoại
            </label>
            <InputCustom 
                placeholder="090.xxx.xxxx"
                value={numberPhone}
                onChange={(text) => {
                    if(text && handleRegexIsNumber(text))
                        setAuth({
                            ...auth,
                            register: {
                                ...register,
                                numberPhone: text,
                            }
                        })
                    
                    if(text === '')
                        setAuth({
                            ...auth,
                            register: {
                                ...register,
                                numberPhone: '',
                            }
                        })

                    if(errNumberPhone) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errNumberPhone: '',
                            }
                        })
                    }
                }}
                errorMessage={errNumberPhone}
            />
        </div>
    )
}


export const InputBirthDay = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { birthDay } = register
    const { errBirthDay } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ngày sinh nhật
            </label>
            <InputCustom 
                type={"date"}
                value={birthDay}
                onChange={(text) => {
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            birthDay: dayjs(new Date(text)).format('YYYY-MM-DD'),
                        }
                    })

                    if(errBirthDay) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errBirthDay: '',
                            }
                        })
                    }
                }}
                errorMessage={errBirthDay}
            />
        </div>
    )
}

export const InputAddress = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { address } = register
    const { errAddress } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Địa chỉ thường trú
            </label>
            <InputAreaCustom 
                placeholder="số 24, Phường A,..."
                value={address}
                onChange={(text) => {
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            address: text,
                        }
                    })

                    if(errAddress) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errAddress: '',
                            }
                        })
                    }
                }}
                errorMessage={errAddress}
            />
        </div>
    )
}

export const InputEmail = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { email } = register
    const { errEmail } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <InputCustom 
                placeholder="xxx@gmail.com..."
                value={email}
                onChange={(text) => {
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            email: text,
                        }
                    })

                    if(errEmail) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errEmail: '',
                            }
                        })
                    }
                }}
                errorMessage={errEmail}
            />
        </div>
    )
}



export const InputPassword = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { password } = register
    const { errPassword } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)


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
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            password: text,
                        }
                    })

                    if(errPassword) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errPassword: '',
                            }
                        })
                    }
                }}
                errorMessage={errPassword}
            />
        </div>
    )
}

export const InputConfirmPassword = () => {
    const { register, errMessageRegister } = useRecoilValue(authState)
    const { confirmPassword } = register
    const { errConfirmPassword } = errMessageRegister

    const [auth, setAuth] = useRecoilState(authState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nhập lại mật khẩu
            </label>
            <InputCustom 
                placeholder="xxxxxx"
                type="password"
                value={confirmPassword}
                onChange={(text) => {
                    setAuth({
                        ...auth,
                        register: {
                            ...register,
                            confirmPassword: text,
                        }
                    })

                    if(errConfirmPassword) {
                        setAuth({
                            ...auth,
                            errMessageRegister: {
                                ...errMessageRegister,
                                errConfirmPassword: '',
                            }
                        })
                    }
                }}
                errorMessage={errConfirmPassword}
            />
        </div>
    )
}