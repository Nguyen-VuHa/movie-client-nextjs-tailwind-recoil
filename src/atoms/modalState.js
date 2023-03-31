import { atom } from "recoil";

export const modalState = atom({
    key: 'modalState',
    default: {
        modalLogin: false,
        modalRegister: false,
    }
})