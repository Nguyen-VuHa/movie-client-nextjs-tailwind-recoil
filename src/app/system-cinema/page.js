import React from "react"
import WithUnauthLayout from "@/components/Auth/WithUnauthLayout"

// write description -> SEO page
export const metadata = {
    title: 'Rạp chiếu BHD | BHD Star Cineplex',
    icons: {
        icon: '/short-cut-icons.png',
        shortcut: '/short-cut-icons.png',
    },
}

function SystemCinema() {
    
    return (
        <WithUnauthLayout>
            SystemCinema
        </WithUnauthLayout>
    )
}

export default SystemCinema;