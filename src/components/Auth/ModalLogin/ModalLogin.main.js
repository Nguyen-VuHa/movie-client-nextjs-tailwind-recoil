import { modalState } from '@/atoms/modalState'
import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import ButtonCustom from '@/components/Common/ButtonCustom'
import ModalCustom from '@/components/Common/ModalCustom'
import { FcGoogle } from 'react-icons/fc'
import InputCustom from '@/components/Common/InputCustom'

function ModalLoginMain() {
    const { modalLogin } = useRecoilValue(modalState)
    const [modal, setModal] = useRecoilState(modalState)

    // close modal login
    const handleCloseModal = () => {
        setModal({
            ...modal,
            modalLogin: false,
        })
    }


    // redirect form register
    const handleRegister = () => {
        setModal({
            ...modal,
            modalRegister: true,
            modalLogin: false,  
        })
    }

    return (
        <ModalCustom status={modalLogin} onHidden={handleCloseModal}>
            <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-bold text-primary-text uppercase font-primary">Đăng Nhập Tài Khoản</h3>
                <form 
                    className="space-y-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                        <InputCustom 
                            placeholder="xxx@gmail.com"
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mật khẩu</label>
                        <InputCustom 
                            type="password"
                            placeholder="xxxxxx"
                        />
                    </div>
                    <div className="flex justify-between">
                        <a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Quên mật khẩu?</a>
                    </div>
                    <ButtonCustom
                        buttonName="Đăng nhập"
                        className="w-full"
                    />
                    <hr />
                    <button type="button" className="w-full justify-center transition-colors text-primary-bg bg-[white] hover:text-white hover:bg-[#4285F4]/90 focus:outline-non font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                        <FcGoogle size={22} className="mr-2" />
                        Đăng nhập với Google
                    </button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Bạn chưa có tài khoản? <a href="#" onClick={() => handleRegister()} className="text-blue-700 hover:underline dark:text-blue-500">Đăng ký tài khoản</a>
                    </div>
                </form>
            </div>
        </ModalCustom>
    )
}

export default ModalLoginMain