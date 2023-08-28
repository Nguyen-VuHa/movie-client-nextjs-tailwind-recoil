"use client"

import React, { useEffect, useState } from 'react';

const Rating = () => {
    const [ratingStar, setRatngStar] = useState(0)
    useEffect(() => {
        if(ratingStar === 0){
            let elmRadio = document.getElementsByName('star');
            for(var i=0;i<elmRadio.length;i++)
                elmRadio[i].checked = false;
        }
    }, [ratingStar]);
    return (
        <>
            <div className="star-rating items-center">
                <div className="title-rating">Đánh Giá</div>
                <div className="stars">
                    <form action="true">
                        <input className="star star-5" id="star-5" type="radio" name="star" />
                        <label className="star star-5" htmlFor="star-5" onClick={() => setRatngStar(5)}/>
                        <input className="star star-4" id="star-4" type="radio" name="star" />
                        <label className="star star-4" htmlFor="star-4" onClick={() =>setRatngStar(4)}/>
                        <input className="star star-3" id="star-3" type="radio" name="star" />
                        <label className="star star-3" htmlFor="star-3" onClick={() =>setRatngStar(3)}/>
                        <input className="star star-2" id="star-2" type="radio" name="star" />
                        <label className="star star-2" htmlFor="star-2" onClick={() =>setRatngStar(2)}/>
                        <input className="star star-1" id="star-1" type="radio" name="star" />
                        <label className="star star-1" htmlFor="star-1" onClick={() => setRatngStar(1)}/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Rating;