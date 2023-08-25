const { default: movieApi } = require("@/apis/movie")

export const fetchMovieDetailById = async (payload) => {
    try { 
        const response = await movieApi.getDetailMovie(payload)
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};