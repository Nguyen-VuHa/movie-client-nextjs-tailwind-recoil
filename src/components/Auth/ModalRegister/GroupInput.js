import { errorMessageRegisterState, registerState } from '@/atoms/authState'
import InputAreaCustom from '@/components/Common/InputAreaCustom'
import InputCustom from '@/components/Common/InputCustom'
import { handleRegexIsNumber } from '@/utils/regexIsNumber'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import dayjs from 'dayjs'

export const InputFullName = () => {
    const { fullName } = useRecoilValue(registerState)
    const { errFullName } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Họ & tên
            </label>
            <InputCustom 
                placeholder="Nguyễn Văn A..."
                value={fullName}
                onChange={(text) => {
                    setRegister({
                        ...register,
                        fullName: text,
                    })

                    if(errFullName) {
                        setErrRegister({
                            ...errRegister,
                            errFullName: '',
                        })
                    }
                }}
                errorMessage={errFullName}
            />
        </div>
    )
}


export const InputNumberPhone = () => {
    const { numberPhone } = useRecoilValue(registerState)
    const { errNumberPhone } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)

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
                        setRegister({
                            ...register,
                            numberPhone: text,
                        })
                    
                    if(text === '')
                        setRegister({
                            ...register,
                            numberPhone: '',
                        })

                    if(errNumberPhone) {
                        setErrRegister({
                            ...errRegister,
                            errNumberPhone: '',
                        })
                    }
                }}
                errorMessage={errNumberPhone}
            />
        </div>
    )
}


export const InputBirthDay = () => {
    const { birthDay } = useRecoilValue(registerState)
    const { errBirthDay } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ngày sinh nhật
            </label>
            <InputCustom 
                type={"date"}
                value={birthDay}
                onChange={(text) => {
                    setRegister({
                        ...register,
                        birthDay: dayjs(new Date(text)).format('YYYY-MM-DD'),
                    })

                    if(errBirthDay) {
                        setErrRegister({
                            ...errRegister,
                            errBirthDay: '',
                        })
                    }
                }}
                errorMessage={errBirthDay}
            />
        </div>
    )
}

export const InputAddress = () => {
    const { address } = useRecoilValue(registerState)
    const { errAddress } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)


    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Địa chỉ thường trú
            </label>
            <InputAreaCustom 
                placeholder="số 24, Phường A,..."
                value={address}
                onChange={(text) => {
                    setRegister({
                        ...register,
                        address: text,
                    })

                    if(errAddress) {
                        setErrRegister({
                            ...errRegister,
                            errAddress: '',
                        })
                    }
                }}
                errorMessage={errAddress}
            />
        </div>
    )
}

export const InputEmail = () => {
    const { email } = useRecoilValue(registerState)
    const { errEmail } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)


    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <InputCustom 
                placeholder="xxx@gmail.com..."
                value={email}
                onChange={(text) => {
                    setRegister( {
                        ...register,
                        email: text,
                    })

                    if(errEmail) {
                        setErrRegister({
                            ...errRegister,
                            errEmail: '',
                        })
                    }
                }}
                errorMessage={errEmail}
            />
        </div>
    )
}



export const InputPassword = () => {
    const { password } = useRecoilValue(registerState)
    const { errPassword } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)


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
                    setRegister({
                        ...register,
                        password: text,
                    })

                    if(errPassword) {
                        setErrRegister({
                            ...errRegister,
                            errPassword: '',
                        })
                    }
                }}
                errorMessage={errPassword}
            />
        </div>
    )
}

export const InputConfirmPassword = () => {
    const { confirmPassword } = useRecoilValue(registerState)
    const { errConfirmPassword } = useRecoilValue(errorMessageRegisterState)

    const [register, setRegister] = useRecoilState(registerState)
    const [errRegister, setErrRegister] = useRecoilState(errorMessageRegisterState)

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
                    setRegister({
                        ...register,
                        confirmPassword: text,
                    })

                    if(errConfirmPassword) {
                        setErrRegister({
                            ...errRegister,
                            errConfirmPassword: '',
                        })
                    }
                }}
                errorMessage={errConfirmPassword}
            />
        </div>
    )
}