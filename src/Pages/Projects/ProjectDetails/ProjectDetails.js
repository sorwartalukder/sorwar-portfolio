import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';

const ProjectDetails = () => {
    const project = useLoaderData();
    const { name, projectType, live, client, server, points, gallery } = project;
    return (
        <div>
            <div className=" max-w-[900px] mx-auto  py-10 mb-32 px-6 md:px-10">
                <PhotoProvider>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 bg-black p-6 cursor-pointer'>
                        {
                            gallery.map((img, i) => <PhotoView
                                key={i}
                                src={img}>
                                <div className='mx-auto'>
                                    <img src={img} className='h-96 w-96' alt="Shoes" />
                                </div>
                            </PhotoView>)
                        }
                    </div>
                </PhotoProvider>
                <div className="mt-4">

                    <h2 className="text-3xl font-bold">
                        {name}
                    </h2>
                    <p>{projectType}</p>
                    <div className='my-5 text-lg font-semibold'>
                        <ol>
                            {
                                points.map((point, index) => <li
                                    key={index}
                                >{index + 1}. {point}</li>)
                            }
                        </ol>
                    </div>
                    <div className="card-actions mt-5">
                        <a href={live}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <button className="bg-blue-700 hover:bg-purple-900 px-7 py-1 rounded">Live</button>
                        </a>
                        <a href={client}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1 rounded">Client Code</button>
                        </a>
                        <a href={server}
                            target='_blank'
                            rel="noreferrer"
                        >
                            <button className="bg-blue-700 hover:bg-purple-900 px-3 py-1 rounded">Server Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;