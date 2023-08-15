import React from 'react'
import ModalCustom from './ModalCustom'

function ModalViewTrailer({ children, youtubeId, status, onHidden }) {
    return (
        <ModalCustom
            status={status}
            onHidden={() => {
                onHidden && onHidden()
            }}
            maxWidth="max-w-5xl"
            {...children}
        >
            <div className="px-1 py-1">
                <h3 className="mb-4 text-xl font-bold text-primary-text uppercase font-primary">   </h3>
                <div className='w-full h-full video-container'>
                    {
                        status && <iframe 
                            allow="autoplay"
                            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=1&rel=0`}
                            width="100%"
                            allowFullScreen={true}
                        >
                        </iframe>
                    }
                </div>
            </div>
        </ModalCustom>
    )
}

export default ModalViewTrailer