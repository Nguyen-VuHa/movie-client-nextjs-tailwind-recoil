import { configHeaderAxios } from "@/utils/configHeaderAxios"
import axiosClient from "./axios.config"

const authApi = {
    signUpAccount: (data) => {
        const url = `api/v1/auth/account/create`

        return axiosClient.post(url, data)
    },
    loginAccount: (data) => {
        const url = `api/v1/auth/account/login`

        return axiosClient.post(url, data)
    },
}

export default authApi;