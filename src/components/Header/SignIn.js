import React from 'react'
import ButtonHeader from './Button'
import { RiLoginCircleLine } from 'react-icons/ri'
import ModalLoginMain from '../Auth/ModalLogin/ModalLogin.main'
import { useDispatch } from 'react-redux'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'

function SignIn() {
    const dispatch = useDispatch()

    return (
        <>
            <ModalLoginMain />
            <ButtonHeader
                onClick={() => {
                    dispatch(actionModal.setModalLogin(true))
                }}
                className="show-right-left show-2 !text-black bg-primary border-primary hover:opacity-80"
            >
                <RiLoginCircleLine />
                <span>Đăng nhập</span>
            </ButtonHeader>
        </>
    )
}

export default SignIn