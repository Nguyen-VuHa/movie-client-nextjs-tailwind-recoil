"use client"
import Hero from "@/components/HomePage/Hero"
import MovieCommingSoon from "@/components/HomePage/MovieCommingSoon"
import MovieCurrent from "@/components/HomePage/MovieCurrent"
import PromotionAndEvent from "@/components/HomePage/PromotionAndEvent";
import { useEffect } from "react";
import { fetchMovieCurrentAndCommingSoon, fetchTopMovieOfWeek } from "@/selectors/dashboardSelector";
import { useRecoilState } from "recoil";
import { topMovieOfWeek, dataMovie } from "@/atoms/dashboardState";
import { STR_STATUS_SUCCESS } from "@/constants/constants";

// write description -> SEO page
export const metadata = {
    title: 'Trang chủ | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

export default function HomePage() {
    const [movieTopOfWeek, setMovieTopOfWeek] = useRecoilState(topMovieOfWeek)
    const [movieData, setMovieData] = useRecoilState(dataMovie)

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
            <Hero />
            <MovieCurrent />
            <MovieCommingSoon />
            <PromotionAndEvent />
        </div>
    )
}
