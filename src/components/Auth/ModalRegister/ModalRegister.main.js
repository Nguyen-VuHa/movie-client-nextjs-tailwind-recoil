import { modalState } from '@/atoms/modalState'
import ButtonCustom from '@/components/Common/ButtonCustom'
import InputCustom from '@/components/Common/InputCustom'
import ModalCustom from '@/components/Common/ModalCustom'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

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

    // redirect form login
    const handleLogin = () => {
        setModal({
            ...modal,
            modalLogin: true,
            modalRegister: false,
        })
    }

    return (
        <ModalCustom status={modalRegister} onHidden={handleCloseModal} maxWidth="max-w-4xl">
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-primary-text uppercase font-primary">Đăng Ký Thành Viên</h3>
                <form 
                    className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 max-sm:flex-col-reverse"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className='col-span-1'>
                        <InputForm 
                            label="Họ & Tên"
                            placeholder="Nguyễn Văn A..."
                        />
                        <InputForm 
                            label="Số điện thoại"
                            placeholder="090.xxx.xxx"
                        />
                        <InputForm 
                            label="Ngày sinh"
                            placeholder="DD/MM/YYYY"
                        />
                         <InputForm 
                            label="Địa chỉ"
                            placeholder="abc xyz"
                        />
                    </div>
                    <div className='col-span-1'>
                        <InputForm 
                            label="Email"
                            placeholder="Email"
                        />
                        <InputForm 
                            label="Mật khẩu"
                            placeholder="090.xxx.xxx"
                        />
                        <InputForm 
                            label="Nhập lại mật khẩu"
                            placeholder="DD/MM/YYYY"
                        />
                    </div>
                    <div className='col-span-1'>
                        <ButtonCustom
                            buttonName="Đăng ký"
                            className="w-full"
                        />
                    </div>
                    <div className='col-span-1 flex justify-start items-center'>
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Bạn đã có tài khoản? <a href="#" onClick={() => handleLogin()} className="text-blue-700 hover:underline dark:text-blue-500">Đăng nhập</a>
                        </div>
                    </div>
                </form>
            </div>
        </ModalCustom>
    )
}

const InputForm = ({ label, placeholder }) => {
    return (
        <div className='mb-2'>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                { label }
            </label>
            <InputCustom 
                placeholder={ placeholder }
            />
        </div>
    )
}

export default ModalRegisterMain