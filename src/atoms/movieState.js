import { atom } from "recoil";

export const movieState = atom({
    key: 'movieState',
    default: {
        detailMovie: null,
        loadingDetail: false,
    }
})