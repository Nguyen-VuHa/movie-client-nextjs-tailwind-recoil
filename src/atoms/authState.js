import { atom } from "recoil";

export const authState = atom({
    key: 'authState',
    default: {
        register: {
            email: '',
            password: '',
            confirmPassword: '',
            fullName: '',
            numberPhone: '',
            birthDay: '',
            address: '',
        },
        errMessageRegister: {
            errEmail: '',
            errPassword: '',
            errConfirmPassword: '',
            errFullName: '',
            errNumberPhone: '',
            errBirthDay: '',
            errAddress: '',
        },
    }
})