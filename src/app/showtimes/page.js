import WithUnauthLayout from "@/components/Auth/WithUnauthLayout"

// write description -> SEO page
export const metadata = {
    title: 'Lịch chiếu phim | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

function ShowTime() {

    return (
        <WithUnauthLayout>
            ShowTime
        </WithUnauthLayout>
    )
}

export default ShowTime;