
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
                value=""
                onChange={(text) => {
                   
                }}
                errorMessage=""
            />
        </div>
    )
}


export const InputNumberPhone = () => {

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Số điện thoại
            </label>
            <InputCustom 
                placeholder="090.xxx.xxxx"
                value=""
                onChange={(text) => {
                    if(text && handleRegexIsNumber(text))
                       
                    
                    if(text === '')
                      

                    if(errNumberPhone) {
                       
                    }
                }}
                errorMessage=""
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
                value=""
                onChange={(text) => {
               
                }}
                errorMessage=""
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
                value=""
                onChange={(text) => {
                }}
                errorMessage=""
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
                value=""
                onChange={(text) => {

                }}
                errorMessage=""
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
                value=""
                onChange={(text) => {
                  
                }}
                errorMessage=""
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
                value=""
                onChange={(text) => {

                }}
                errorMessage=""
            />
        </div>
    )
}