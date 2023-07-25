import { atom } from "recoil";

// Register
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

// Login
export const initialLoginState = {
    email: '',
    password: '',
}

export const initialErrMessageLoginState = {
    errEmail: '',
    errPassword: '',
}

export const loginState = atom({
    key: 'loginState',
    default: initialLoginState,
})

export const errorMessageLoginState = atom({
    key: 'errorMessageLoginState',
    default: initialErrMessageLoginState,
})