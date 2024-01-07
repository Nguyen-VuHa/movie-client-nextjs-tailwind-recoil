
import InputAreaCustom from '@/components/Common/InputAreaCustom'
import InputCustom from '@/components/Common/InputCustom'
import { handleRegexIsNumber } from '@/utils/regexIsNumber'
import React from 'react'
import dayjs from 'dayjs'
import { actionAuth } from '@/redux/reducers/auth.reducer'
import { useDispatch, useSelector } from 'react-redux'
import InputDatePicker from '@/components/Common/InputDatePicker'

export const InputFullName = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { fullName } = formSignUp
    const dispatch = useDispatch()
    
    return (
        <>
            <label className="block mb-2 text-sm font-medium">
                Họ & tên
            </label>
            <InputCustom 
                placeholder="Nhập họ tên của bạn"
                value={fullName}
                onChange={(text) => {
                   dispatch(actionAuth.setFullNameSignUp(text))
                }}
                errorMessage={errorSignUp.fullName}
            />
        </>
    )
}


export const InputNumberPhone = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { phoneNumber } = formSignUp
    const dispatch = useDispatch()

    return (
        <>
            <label className="block mb-2 text-sm font-medium">
                Số điện thoại
            </label>
            <InputCustom 
                placeholder="Nhập số điện thoại của bạn"
                value={phoneNumber}
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
        </>
    )
}


export const InputBirthDay = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { birthDay } = formSignUp
    const dispatch = useDispatch()

    return (
        <>
            <label className="block mb-2 text-sm font-medium">
                Ngày sinh nhật
            </label>
            <InputDatePicker 
                placeholder='Chọn ngày sinh nhật của bạn'  
                value={birthDay && dayjs(birthDay)}
                onChange={(value) => {
                    dispatch(actionAuth.setBirthDaySignUp(dayjs(value).format('YYYY-MM-DD')))
                }}  
                errorMessage={errorSignUp.birthDay}
            />
        </>
    )
}

export const InputAddress = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { address } = formSignUp
    const dispatch = useDispatch()


    return (
        <div>
            <label className="block mb-2 text-sm font-medium">
                Địa chỉ thường trú
            </label>
            <InputAreaCustom 
                placeholder="Nhập địa chỉ thường trú của bạn"
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
        <>
            <label className="block mb-2 text-sm font-medium">
                Email
            </label>
            <InputCustom 
                placeholder="Nhập email của bạn"
                value={email}
                onChange={(text) => {
                    dispatch(actionAuth.setEmailSignUp(text))
                }}
                errorMessage={errorSignUp.email}
            />
        </>
    )
}



export const InputPassword = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { password } = formSignUp
    const dispatch = useDispatch()

    return (
        <>
            <label className="block mb-2 text-sm font-medium">
                Mật khẩu
            </label>
            <InputCustom 
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                value={password}
                onChange={(text) => {
                    dispatch(actionAuth.setPasswordSignUp(text))
                }}
                errorMessage={errorSignUp.password}
            />
        </>
    )
}

export const InputConfirmPassword = () => {
    const { formSignUp, errorSignUp } = useSelector(state => state.authState)
    const { confirmPassword } = formSignUp
    const dispatch = useDispatch()

    return (
        <>
            <label className="block mb-2 text-sm font-medium">
                Nhập lại mật khẩu
            </label>
            <InputCustom 
                placeholder="Nhập lại mật khẩu"
                type="password"
                value={confirmPassword}
                onChange={(text) => {
                    dispatch(actionAuth.setPasswordConfirmSignUp(text))
                }}
                errorMessage={errorSignUp.confirmPassword}
            />
        </>
    )
}