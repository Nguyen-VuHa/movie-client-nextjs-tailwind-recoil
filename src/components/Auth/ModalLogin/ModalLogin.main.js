"use client"
import React from 'react'
import ModalCustom from '@/components/Common/ModalCustom'
import FormInput from './FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'

function ModalLoginMain() {
    const { modalLogin } = useSelector(state => state.modalStatusState)
    const dispatch = useDispatch()

    // close modal login
    const handleCloseModal = () => {
        dispatch(actionModal.setModalLogin(false))
    }
  
    return (
        <ModalCustom status={modalLogin} onHidden={handleCloseModal}>
            <div className="px-6 py-6 lg:px-8 bg-primary-bg rounded-lg">
                <h3 className="mb-4 text-xl font-bold text-primary uppercase font-primary">Đăng Nhập</h3>
                <FormInput />
            </div>
        </ModalCustom>
    )
}

export default ModalLoginMain