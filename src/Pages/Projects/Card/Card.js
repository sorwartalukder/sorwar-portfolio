import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Card = ({ project }) => {
    const { _id, name, projectType, live, client, server, img } = project;
    return (
        <div className="card max-w-[400px] h-full w-full shadow-xl mx-auto  bg-black">
            <PhotoProvider >
                <PhotoView src={img}>
                    <img src={img} alt="Shoes" className=" h-[300px] " />
                </PhotoView>
            </PhotoProvider>
            <figure>

            </figure>
            <div className="card-body text-white ">
                <div className='flex justify-between'>
                    <h2 className="card-title text-2xl ">{name}</h2>
                    <a href={live}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-7 py-1">Live</button>
                    </a>
                </div>
                <p className='text-xl'>{projectType}</p>
                <div className="card-actions justify-between mt-5">

                    <a href={client}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1">Client Code</button>
                    </a>
                    <a href={server}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1">Server Code</button>
                    </a>
                </div>

            </div>
            <Link to={`/projects/${_id}`}>
                <button
                    className="bg-blue-700 hover:bg-purple-900 px-3 py-1 text-white block w-full"
                >Details</button>
            </Link>
        </div>
    );
};

export default Card;