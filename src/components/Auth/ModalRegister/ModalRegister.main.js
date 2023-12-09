"use client"
import ModalCustom from '@/components/Common/ModalCustom'
import React from 'react'
import FormInput from './FormInput'

function ModalRegisterMain() {
    const { modalRegister } = useRecoilValue(modalState)
    const [modal, setModal] = useRecoilState(modalState)

    // close modal login
    const handleCloseModal = () => {
        setModal({
            ...modal,
            modalRegister: false,
        })
    }

    return (
        <ModalCustom status={modalRegister} onHidden={handleCloseModal} maxWidth="max-w-4xl">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-primary-text uppercase font-primary">Đăng Ký Thành Viên</h3>
                <FormInput />
            </div>
        </ModalCustom>
    )
}


export default ModalRegisterMain