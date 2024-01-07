
import InputCustom from '@/components/Common/InputCustom'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionAuth } from '@/redux/reducers/auth.reducer'
import { handleValidateField } from '@/validators/login'

export const InputEmail = () => {
    const { formSignIn, errorSignIn } = useSelector(state => state.authState)
    const { email }= formSignIn

    const dispatch = useDispatch()
    return (
        <>
            <label className="block mb-2 text-sm font-medium text-primary">
                Email
            </label>
            <InputCustom 
                placeholder="Nhập email của bạn"
                value={email}
                name="email"
                onChange={(text) => {
                    dispatch(actionAuth.setEmailSignIn(text))
                }}
                errorMessage={errorSignIn.email}
                onBlur={async (e) => {
                    const { name, value } = e.target
                    const resCheck = await handleValidateField(name, value)

                    dispatch(actionAuth.setErrorMessageField(resCheck.objError))
                }}
            />
        </>
    )
}


export const InputPassword = () => {
    const { formSignIn, errorSignIn } = useSelector(state => state.authState)
    const { password }= formSignIn

    const dispatch = useDispatch()

    return (
        <>
            <label className="block mb-2 text-sm font-medium text-primary">
                Mật khẩu
            </label>
            <InputCustom 
                placeholder="Nhập mật khẩu của bạn"
                type="password"
                name="password"
                value={password}
                onChange={(text) => {
                    dispatch(actionAuth.setPasswordSignIn(text))
                }}
                onBlur={async (e) => {
                    const { name, value } = e.target
                    const resCheck = await handleValidateField(name, value)

                    dispatch(actionAuth.setErrorMessageField(resCheck.objError))
                }}
                errorMessage={errorSignIn.password}
            />
        </>
    )
}
