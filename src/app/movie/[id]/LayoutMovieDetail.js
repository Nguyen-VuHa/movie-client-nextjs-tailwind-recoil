"use client"
import { movieState } from '@/atoms/movieState'
import Comment from '@/components/MovieDetail/Comment'
import DetailMovie from '@/components/MovieDetail/DetailMovie'
import ShowTime from '@/components/MovieDetail/ShowTime'
import { STR_STATUS_SUCCESS } from '@/constants/constants'
import { fetchMovieDetailById } from '@/selectors/movieSelector'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'

function LayoutMovieDetail({ params }) {
    const [movie, setMovie] = useRecoilState(movieState)
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
    
    return (
        <div>
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