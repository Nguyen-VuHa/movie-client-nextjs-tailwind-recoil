import { configHeaderAxios } from "@/utils/configHeaderAxios"
import axiosClient from "./axios.config"

const movieApi = {
    getTopMovieOfWeek: () => {
        const url = `api/v1/movie/top-of-week`

        return axiosClient.get(url)
    },
    getDataMovie: () => {
        const url = `api/v1/movie/data`

        return axiosClient.get(url)
    },
    getDetailMovie: (payload) => {
        const url = `api/v1/movie/detail/${payload}`

        return axiosClient.get(url)
    },
}

export default movieApi;