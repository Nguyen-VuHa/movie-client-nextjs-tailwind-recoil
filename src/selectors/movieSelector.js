import commentApi from "@/apis/comment";

const { default: movieApi } = require("@/apis/movie")

export const fetchMovieDetailById = async (payload) => {
    try { 
        const response = await movieApi.getDetailMovie(payload)
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};


export const fetchCommentMovieById = async (payload) => {
    try { 
        const response = await commentApi.getMainComment(payload)
        
        return response
    } catch (error) {
        return error?.response?.data;
    }
};