import { atom } from "recoil";

export const initalRegisterState = {
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    numberPhone: '',
    birthDay: '',
    address: '',
}

export const initalErrMessageRegisterState = {
    errEmail: '',
    errPassword: '',
    errConfirmPassword: '',
    errFullName: '',
    errNumberPhone: '',
    errBirthDay: '',
    errAddress: '',
}

export const registerState = atom({
    key: 'registerState',
    default: initalRegisterState,
})

export const errorMessageRegisterState = atom({
    key: 'errorMessageRegisterState', 
    default: initalErrMessageRegisterState,
})