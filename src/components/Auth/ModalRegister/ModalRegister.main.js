"use client"
import ModalCustom from '@/components/Common/ModalCustom'
import React from 'react'
import FormInput from './FormInput'
import { useDispatch, useSelector } from 'react-redux'
import { actionModal } from '@/redux/reducers/modalStatus.reducer'

function ModalRegisterMain() {
    const  { modalSignUp } = useSelector(state => state.modalStatusState)
    const dispatch = useDispatch()
    
    // close modal login
    const handleCloseModal = () => {
       dispatch(actionModal.setModalSignUp(false))
    }

    return (
        <ModalCustom status={modalSignUp} onHidden={handleCloseModal} maxWidth="max-w-4xl">
            <div className="px-6 py-6 lg:px-8 bg-primary-bg rounded-lg">
                <h3 className="mb-4 text-xl font-bold text-primary uppercase font-primary">Đăng Ký Thành Viên</h3>
                <FormInput />
            </div>
        </ModalCustom>
    )
}


export default ModalRegisterMain