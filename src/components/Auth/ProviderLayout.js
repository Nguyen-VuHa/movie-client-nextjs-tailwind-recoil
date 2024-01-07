"use client"
import { useEffect, useRef } from "react";
import HeaderMain from "../Header/Header.Main";

const ProviderLayout = ({ children }) => {
    const backgroudRef = useRef(null)

    useEffect(() => {
      backgroudRef.current.style.background  = `url('https://c4.wallpaperflare.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg') 0% 0% / cover no-repeat`;
    }, [])

    return (
      <div className="relative"> 
        <div className="absolute w-full h-full max-h-[100vh] top-0 left-0">
          <div 
              ref={backgroudRef}
              className="
                fixed w-[100vw] h-[100vh] z-[-1]
                before:bg-gradient-to-l before:absolute before:w-full before:h-full before:from-primary-bg
                after:bg-gradient-to-t after:absolute after:w-full after:h-full after:from-primary-bg
              "
          >
          </div>
        </div>
        <HeaderMain />
        <main>
          {children}
        </main>
      </div>
    );
};

export default ProviderLayout;