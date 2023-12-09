"use client"
import React from 'react'
import ModalCustom from '@/components/Common/ModalCustom'
import FormInput from './FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { setModalLogin } from '@/redux/reducers/modalStatus.reducer'

function ModalLoginMain() {
    const { modalLogin } = useSelector(state => state.modalStatusState)
    const dispatch = useDispatch()

    // close modal login
    const handleCloseModal = () => {
        dispatch(setModalLogin(false))
    }
  
    return (
        <ModalCustom status={modalLogin} onHidden={handleCloseModal}>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-primary-text uppercase font-primary">Đăng Nhập Tài Khoản</h3>
                <FormInput />
            </div>
        </ModalCustom>
    )
}

export default ModalLoginMain