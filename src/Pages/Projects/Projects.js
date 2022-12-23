import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../componnets/Loading/Loading';
import Card from './Card/Card';

const Projects = () => {
    const { data: projects = [], isLoading } = useQuery({
        queryKey: ['categoryProducts'],
        queryFn: async () => {
            const res = await fetch(`https://sorwar-portfolio-server.vercel.app/projects`);
            const data = res.json();
            return data
        }
    })
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5  mx-2 lg:mx-9 mb-32 mt-5'>
            {
                projects.map(project => <Card
                    key={project._id}
                    project={project}
                />)
            }
        </div>
    );
};

export default Projects;