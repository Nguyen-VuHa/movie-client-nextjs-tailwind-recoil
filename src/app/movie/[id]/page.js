import LayoutMovieDetail from "./LayoutMovieDetail"

// write description -> SEO page
export const metadata = {
    title: 'Avartar Dòng Chảy Của Nước | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

function MovieDetail({ params }) {

    return (
        <>
            <LayoutMovieDetail params={params}/>
        </>
    )
}

export default MovieDetail