"use client"
import { useEffect, useRef } from "react";
import HeaderMain from "../Header/Header.Main";

const ProviderLayout = ({ children }) => {
  const backgroudRef = useRef(null)

  useEffect(() => {
    backgroudRef.current.style.background  = `url('https://c4.wallpaperflare.com/wallpaper/810/33/235/movies-avatar-1680x1050-entertainment-movies-hd-art-wallpaper-preview.jpg') 0% 0% / cover no-repeat`;
  }, [])
  

    return (
      <div 
        ref={backgroudRef}
        className="
          fixed w-[100vw] h-[100vh]
          before:bg-gradient-to-l before:absolute before:w-full before:h-full dark:before:from-[#121825d1] before:from-[#121825d1]
          after:bg-gradient-to-t after:absolute after:w-full after:h-full dark:after:from-[#10141d9c] after:from-[#10141d9c]
        "
      > 
        <HeaderMain />
        <main>
          {children}
        </main>
      </div>
    );
};

export default ProviderLayout;