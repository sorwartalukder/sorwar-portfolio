import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Card = ({ cardData }) => {
    const { title, type, liveLink, clientLink, serverLink, img } = cardData;
    return (
        <div className="card max-w-[400px] h-full">
            <PhotoProvider >
                <PhotoView src={img}>
                    <img src={img} alt="Shoes" className="rounded-xl h-[300px]" />
                </PhotoView>
            </PhotoProvider>
            <figure>

            </figure>
            <div className="card-body text-white ">
                <div className='flex justify-between'>
                    <h2 className="card-title text-2xl ">{title}</h2>
                    <a href={liveLink}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-7 py-1">Live</button>
                    </a>
                </div>
                <p className='text-xl'>{type}</p>
                <div className="card-actions justify-between mt-5">

                    <a href={clientLink}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1">Client Code</button>
                    </a>
                    <a href={serverLink}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1">Server Code</button>
                    </a>


                </div>
            </div>
        </div>
    );
};

export default Card;