
import InputCustom from '@/components/Common/InputCustom'
import { setEmailSignIn, setPasswordSignIn } from '@/redux/reducers/auth.reducer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


export const InputEmail = () => {
    const { formSignIn } = useSelector(state => state.authState)
    const { email }= formSignIn

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
                    dispatch(setEmailSignIn(text))
                }}
                errorMessage=""
            />
        </div>
    )
}


export const InputPassword = () => {
    const { formSignIn } = useSelector(state => state.authState)
    const { password }= formSignIn

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
                    dispatch(setPasswordSignIn(text))
                }}
                errorMessage=""
            />
        </div>
    )
}
