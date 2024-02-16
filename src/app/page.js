import Hero from "@/components/HomePage/Hero";
import React from "react";
import '@/components/HomePage/homepage.scss'

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
        <div className="mt-[50px]">
            <Hero />
        </div>
    )
}
