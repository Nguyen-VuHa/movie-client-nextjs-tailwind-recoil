"use client"
import React from 'react'
import ModalCustom from '@/components/Common/ModalCustom'
import FormInput from './FormInput'

function ModalLoginMain() {

    // close modal login
    const handleCloseModal = () => {
        setModal({
            ...modal,
            modalLogin: false,
        })
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