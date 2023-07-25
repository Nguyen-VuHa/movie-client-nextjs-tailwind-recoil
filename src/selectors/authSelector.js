import { handleEnCodeKey, handleEnCodeString } from "@/utils/endcrypt"
import dayjs from "dayjs"

const { default: authApi } = require("@/apis/auth")


// handle call api POST create account
export const handleCreateAccount = async (data) => {
    try { 
        let keyTime = dayjs().add(10, 's') // add time 10s - time expried if current time exceeds 
        let keyTimeStr = new Date(keyTime).getTime().toString()

        let arrHash = handleEnCodeKey(keyTimeStr)
        
        let strData = Buffer.from(handleEnCodeString(JSON.stringify(data), arrHash)).toString('base64')

        let dataEncrypt = `${handleEnCodeString(strData, arrHash)}.${keyTimeStr}` // endcode with arrHash

        const response = await authApi.signUpAccount({ data: dataEncrypt })
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};

// handle call api POST login account
export const handleLoginAccount = async (data) => {
    try {
        let keyTime = dayjs().add(10, 's') // add time 10s - time expried if current time exceeds 
        let keyTimeStr = new Date(keyTime).getTime().toString()

        let arrHash = handleEnCodeKey(keyTimeStr)
        
        let strData = Buffer.from(handleEnCodeString(JSON.stringify(data), arrHash)).toString('base64')

        let dataEncrypt = `${handleEnCodeString(strData, arrHash)}.${keyTimeStr}` // endcode with arrHash

        const response = await authApi.loginAccount({ data: dataEncrypt })
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
}