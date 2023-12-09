
import InputAreaCustom from '@/components/Common/InputAreaCustom'
import InputCustom from '@/components/Common/InputCustom'
import { handleRegexIsNumber } from '@/utils/regexIsNumber'
import React from 'react'
import dayjs from 'dayjs'

export const InputFullName = () => {
    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Họ & tên
            </label>
            <InputCustom 
                placeholder="Nguyễn Văn A..."
                value={fullName}
                onChange={(text) => {
                   
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
                       
                    
                    if(text === '')
                      

                    if(errNumberPhone) {
                       
                    }
                }}
                errorMessage={errNumberPhone}
            />
        </div>
    )
}


export const InputBirthDay = () => {
    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ngày sinh nhật
            </label>
            <InputCustom 
                type={"date"}
                value={birthDay}
                onChange={(text) => {
                   
                    if(errBirthDay) {
                       
                    }
                }}
                errorMessage={errBirthDay}
            />
        </div>
    )
}

export const InputAddress = () => {


    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Địa chỉ thường trú
            </label>
            <InputAreaCustom 
                placeholder="số 24, Phường A,..."
                value={address}
                onChange={(text) => {
                   
                    if(errAddress) {
                     
                    }
                }}
                errorMessage={errAddress}
            />
        </div>
    )
}

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

                    if(errEmail) {
                    
                    }
                }}
                errorMessage={errEmail}
            />
        </div>
    )
}



export const InputPassword = () => {

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
                  

                    if(errPassword) {
                      
                    }
                }}
                errorMessage={errPassword}
            />
        </div>
    )
}

export const InputConfirmPassword = () => {

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

                    if(errConfirmPassword) {
                    }
                }}
                errorMessage={errConfirmPassword}
            />
        </div>
    )
}