"use client"
import Hero from "@/components/HomePage/Hero"
import MovieCommingSoon from "@/components/HomePage/MovieCommingSoon"
import MovieCurrent from "@/components/HomePage/MovieCurrent"
import PromotionAndEvent from "@/components/HomePage/PromotionAndEvent";
import { useEffect } from "react";
import { fetchMovieCurrentAndCommingSoon, fetchTopMovieOfWeek } from "@/selectors/dashboardSelector";
import { useRecoilState, useRecoilValue } from "recoil";
import { topMovieOfWeek, dataMovie } from "@/atoms/dashboardState";
import { STR_STATUS_SUCCESS } from "@/constants/constants";
import ModalViewTrailer from "@/components/Common/ModalViewTrailer";
import { globalState } from "@/atoms/globalState";
// import Chatwoot from "@/components/Common/Chatwoot";

export default function LayoutHomePage() {
    const [movieTopOfWeek, setMovieTopOfWeek] = useRecoilState(topMovieOfWeek)
    const [movieData, setMovieData] = useRecoilState(dataMovie)
    const { isModalTrailer, youtubeId } = useRecoilValue(globalState)
    const [global, setGlobal] = useRecoilState(globalState)

    useEffect(() => {
        const fetchMovieOfWeek = async () => {
            if(!movieTopOfWeek.loadingFetch) {
                setMovieTopOfWeek({
                    ...movieTopOfWeek,
                    loadingFetch: true
                })
                
                const res = await fetchTopMovieOfWeek()

                if(res && res.status === STR_STATUS_SUCCESS) {
                    setMovieTopOfWeek({
                        movieTopOfWeek: res.data,
                        loadingFetch: false,
                    })
                }
            }
        }

        const fetchDataMovie = async () => {
            if(!movieTopOfWeek.loadingFetch) {
                setMovieData({
                    ...movieData,
                    loadingFetch: true
                })
                
                const res = await fetchMovieCurrentAndCommingSoon()

                if(res && res.status === STR_STATUS_SUCCESS) {
                    const { current, commingSoon } = res.data;
                    setMovieData({
                        loadingFetch: false,
                        movieCurrent: current,
                        movieCommingSoon: commingSoon,
                    })
                }
            }
        }

        fetchMovieOfWeek()
        fetchDataMovie()
    }, [])
    

    return (
        <div>
            {/* <Chatwoot /> */}
            
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

            <Hero />
            <MovieCurrent />
            <MovieCommingSoon />
            <PromotionAndEvent />
        </div>
    )
}
