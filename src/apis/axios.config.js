import axios from 'axios';
import queryString from 'query-string';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});

function getAccessToken(){
    return localStorage.getItem('accessToken') || ''
}

axiosClient.interceptors.request.use(async (config) => {
    if(getAccessToken())
        config.headers['Authorization'] = `Bearer ${getAccessToken()}`

    return config
});


axiosClient.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data
        }
        return response
        },async (error) => {
        // Handle errors
        const originalRequest = error.config
        if (error.response.status === 403 && !originalRequest._retry)
        {
            
            originalRequest._retry = true
            const refreshToken = { 
                refreshToken: localStorage.getItem('refreshToken') 
            };
            const data = await axiosClient.post(
                process.env.NEXT_PUBLIC_API_URL + '/api/auth/refresh-token',
                refreshToken
            )
            delete axios.defaults.headers.common['Authorization']
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.accessToken
            localStorage.setItem('accessToken', data.accessToken)
            localStorage.setItem('refreshToken', data.refreshToken)
            
            return axiosClient(originalRequest)

        }
        throw error;
    }
);

export default axiosClient;