import { atom } from "recoil";

export const globalState = atom({
    key: 'globalState',
    default: {
        darkMode: ((typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark') ? true : false) || false,
        isModalTrailer: false,
        youtubeId: "",
    }
})