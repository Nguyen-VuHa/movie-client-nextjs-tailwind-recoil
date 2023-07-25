import React from 'react';
import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";
import './Carousel.scss';

function CarouselCustom(
   
) {
    

    return (
        <div 
            className="
                w-full h-auto
                min-h-[200px]
                flex justify-start items-center
                relative
            "
        >
            <div className="h-full overflow-hidden mx-[2%] h-[400px]">
                <div className="snap-mandatory snap-x warapper-content">
                    <div className="snap-center item-carousel">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                    <div className="item-carousel snap-center">
                        <img src="https://res.cloudinary.com/cgv-vi-t-nam/image/upload/v1640167813/poster_movie/sy5rqnq9orcv3bqj7f74.jpg" alt="..." />
                    </div>
                </div>
            </div>

            <button 
                className="w-[35px] h-[35px] rounded
                transition-colors 
                whitespace-nowrap
                font-primary font-semibold bg-primary-text 
                hover:bg-primary-text/90 focus:outline-none  rounded-[50%]
                text-center inline-flex justify-center items-center
                absolute top-[45%] z-[1] left-[5%]
                "
            >
                <AiFillCaretLeft />
            </button>
            <button 
                className="w-[35px] h-[35px] rounded
                transition-colors 
                whitespace-nowrap
                font-primary font-semibold bg-primary-text 
                hover:bg-primary-text/90 focus:outline-none rounded-[50%]
                text-center inline-flex justify-center items-center
                absolute
                top-[45%] right-[5%] z-[1]
                "
            >
                <AiFillCaretRight />
            </button>
        </div>
    )
}


export default CarouselCustom