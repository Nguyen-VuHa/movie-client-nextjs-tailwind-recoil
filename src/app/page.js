import React from "react";
import WithUnauthLayout from "@/components/Auth/WithUnauthLayout";

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
        <WithUnauthLayout>
            <div>
                Content Home Page
            </div>
        </WithUnauthLayout>
    )
}
