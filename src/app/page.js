import CarouselCustom from "@/components/Common/Carousel/CarouselCustom"
import Hero from "@/components/HomePage/Hero"
import MovieCurrent from "@/components/HomePage/MovieCurrent"

// write description -> SEO page
export const metadata = {
    title: 'Trang chủ | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

export default function HomePage() {
    
    return (
        <div>
            <Hero />
            {/* <MovieCurrent /> */}
            <CarouselCustom />
        </div>
    )
}
