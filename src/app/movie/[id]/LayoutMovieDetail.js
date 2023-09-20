"use client"
import { globalState } from '@/atoms/globalState'
import { commentMovieState, movieState } from '@/atoms/movieState'
import ModalViewTrailer from '@/components/Common/ModalViewTrailer'
import Comment from '@/components/MovieDetail/Comment'
import DetailMovie from '@/components/MovieDetail/DetailMovie'
import ShowTime from '@/components/MovieDetail/ShowTime'
import { STR_STATUS_SUCCESS } from '@/constants/constants'
import { fetchCommentMovieById, fetchMovieDetailById } from '@/selectors/movieSelector'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'

function LayoutMovieDetail({ params }) {
    const [movie, setMovie] = useRecoilState(movieState)
    const [comment, setComment] = useRecoilState(commentMovieState)
    const { isModalTrailer, youtubeId } = useRecoilValue(globalState)
    const [global, setGlobal] = useRecoilState(globalState)
    
    const router = useRouter()

    useEffect(() => {
        if(params && params.id) {
            const fetchMovieOfWeek = async () => {
                if(!movie.loadingDetail) {
                    setMovie({
                        ...movie,
                        loadingDetail: true,
                    })
        
                    const res = await fetchMovieDetailById(params.id)
        
                    if(res && res.status === STR_STATUS_SUCCESS) {
                        document.title = res.data.movie_name + " | BHD Star Cineplex"
                        setMovie({
                            loadingDetail: false,
                            detailMovie: res.data,
                        })
                    } else {
                        setMovie({
                            loadingDetail: false,
                            detailMovie: null,
                        })

                        router.back()
                    }
                }
            }
    
            fetchMovieOfWeek()
        }
    }, [params])

    useEffect(() => {
        if(params && params.id) {
          
            const fetchCommentMovie = async () => {
                if(!comment.fetchComment) {
                    setComment({
                        ...comment,
                        fetchComment: true,
                    })
        
                    const res = await fetchCommentMovieById(params.id)
        
                    if(res && res.status === STR_STATUS_SUCCESS) {
                        setComment({
                            fetchComment: false,
                            comments: res.data,
                        })
                    } else {
                        setComment({
                            fetchComment: false,
                            comments: [],
                            
                        })
                    }
                }
            }
    
            fetchCommentMovie()
        }
    }, [params])
    
    return (
        <div>
            <ModalViewTrailer 
                status={isModalTrailer}
                youtubeId={youtubeId}
                onHidden={() => {
                    setGlobal({
                        ...global,
                        isModalTrailer: false,
                        youtubeId: ""
                    })
                }}
            />
            <DetailMovie />
            <div className='container grid grid-cols-5 max-sm:grid-cols-1 max-sm:px-[20px]'>
                <div className="col-span-3">
                    <Comment />
                </div>
                <div className="col-span-2">
                    <ShowTime />
                </div>
            </div>
        </div>
    )
}

export default LayoutMovieDetail