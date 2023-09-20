import { atom } from "recoil";

export const movieState = atom({
    key: 'movieState',
    default: {
        detailMovie: null,
        loadingDetail: false,
    }
})


export const commentMovieState = atom({
    key: 'commentMovieState',
    default: {
        fetchComment: false,
        comments: [],
    }
})