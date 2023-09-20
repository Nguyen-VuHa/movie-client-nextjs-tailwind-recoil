import { configHeaderAxios } from "@/utils/configHeaderAxios"
import axiosClient from "./axios.config"

const commentApi = {
    getMainComment: (data) => {
        const url = `api/v1/comment/get-main?movie_id=${data}`

        return axiosClient.get(url)
    },
    getChildComment: (data) => {
        const url = `api/v1/comment/get-sub-comment?parent_id=${data}`

        return axiosClient.get(url)
    },
}

export default commentApi;