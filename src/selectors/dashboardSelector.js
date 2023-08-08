const { default: movieApi } = require("@/apis/movie")


export const fetchTopMovieOfWeek = async () => {
    try { 
        const response = await movieApi.getTopMovieOfWeek()
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};


export const fetchMovieCurrentAndCommingSoon = async () => {
    try { 
        const response = await movieApi.getDataMovie()
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};