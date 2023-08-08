import { atom } from "recoil";

export const topMovieOfWeek = atom({
    key: 'dashboard_TopMovieOfWeek',
    default: {
        loadingFetch: false,
        movieTopOfWeek: null,
    },
})

export const dataMovie = atom({
    key: 'dashboard_DataMovie',
    default: {
        loadingFetch: false,
        movieCurrent: null,
        movieCommingSoon: null,
    },
})