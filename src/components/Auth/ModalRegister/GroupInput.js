
import InputAreaCustom from '@/components/Common/InputAreaCustom'
import InputCustom from '@/components/Common/InputCustom'
import { handleRegexIsNumber } from '@/utils/regexIsNumber'
import React from 'react'
import dayjs from 'dayjs'
import { actionAuth } from '@/redux/reducers/auth.reducer'
import { useDispatch, useSelector } from 'react-redux'
import { DatePicker } from 'antd'

export const InputFullName = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { fullName } = formSignUp
    const dispatch = useDispatch()
    
    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Họ & tên
            </label>
            <InputCustom 
                placeholder="Nguyễn Văn A..."
                value={fullName}
                onChange={(text) => {
                   dispatch(actionAuth.setFullNameSignUp(text))
                }}
                errorMessage={errorSignUp.fullName}
            />
        </div>
    )
}


export const InputNumberPhone = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { numberPhone } = formSignUp
    const dispatch = useDispatch()

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Số điện thoại
            </label>
            <InputCustom 
                placeholder="090.xxx.xxxx"
                value={numberPhone}
                onChange={(text) => {
                    if(text && handleRegexIsNumber(text)) {
                        dispatch(actionAuth.setPhoneNumberSignUp(text))
                    }

                    if (text === '') {
                        dispatch(actionAuth.setPhoneNumberSignUp(''))
                    }
                }}
                errorMessage={errorSignUp.numberPhone}
            />
        </div>
    )
}


export const InputBirthDay = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { birthDay } = formSignUp
    const dispatch = useDispatch()

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ngày sinh nhật
            </label>
            <DatePicker 
                className='w-full h-[42px]'  
                placeholder='Select birth day'    
                allowClear={false}    
                value={birthDay && dayjs(birthDay)}
                onChange={(value) => {
                    dispatch(actionAuth.setBirthDaySignUp(dayjs(value).format('YYYY-MM-DD')))
                }}  
            />
            <small className='mt-2 italic font-medium text-red-600 dark:text-red-500'>{errorSignUp.birthDay}</small>
        </div>
    )
}

export const InputAddress = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { address } = formSignUp
    const dispatch = useDispatch()


    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Địa chỉ thường trú
            </label>
            <InputAreaCustom 
                placeholder="số 24, Phường A,..."
                value={address}
                onChange={(text) => {
                    dispatch(actionAuth.setAddressSignUp(text))
                }}
                errorMessage={errorSignUp.address}
            />
        </div>
    )
}

export const InputEmail = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { email } = formSignUp
    const dispatch = useDispatch()

    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
            </label>
            <InputCustom 
                placeholder="xxx@gmail.com..."
                value={email}
                onChange={(text) => {
                    dispatch(actionAuth.setEmailSignUp(text))
                }}
                errorMessage={errorSignUp.email}
            />
        </div>
    )
}



export const InputPassword = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { password } = formSignUp
    const dispatch = useDispatch()

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
                    dispatch(actionAuth.setPasswordSignUp(text))
                }}
                errorMessage={errorSignUp.password}
            />
        </div>
    )
}

export const InputConfirmPassword = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { confirmPassword } = formSignUp
    const dispatch = useDispatch()

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
                    dispatch(actionAuth.setPasswordConfirmSignUp(text))
                }}
            />
        </div>
    )
}