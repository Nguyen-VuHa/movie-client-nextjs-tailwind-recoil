import React from 'react'
import ButtonHeader from './Button'
import { FaUserPlus } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'

function SignUp() {
    const dispatch = useDispatch()

    return (
        <>
            <ButtonHeader
                className="show-right-left show-1"
                onClick={() => {
                    dispatch(actionModal.setModalSignUp(true))
                }}
            >
                <FaUserPlus />
                <span>Đăng ký</span>
            </ButtonHeader>
        </>
    )
}

export default SignUp