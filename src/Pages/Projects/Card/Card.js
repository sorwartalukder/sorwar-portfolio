import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';

const Card = ({ project }) => {
    const { _id, name, projectType, live, img } = project;
    return (
        <div className="card max-w-[400px] bg-base-100 border-[7px] shadow-xl h-full" >
            <PhotoProvider >
                <PhotoView src={img}>
                    <figure><img className='w-full h-64' src={img} alt="Shoes" /></figure>
                </PhotoView>
            </PhotoProvider>

            <div className="card-body">
                <div className='flex justify-between'>
                    <h2 className="card-title text-2xl ">{name}</h2>
                    <a href={live}
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 px-7 py-1 rounded">Live</button>
                    </a>
                </div>
                <Link to={`/projects/${_id}`}>
                    <p>{projectType}</p>
                    <div className="card-actions justify-between mt-5">
                        <button className="badge badge-outline px-5 text-blue-500 hover:shadow-md hover:shadow-blue-500">Details</button>
                    </div>
                </Link>
            </div>

        </div>
    );
};

export default Card;