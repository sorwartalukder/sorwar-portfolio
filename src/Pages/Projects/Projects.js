import React from 'react';
import CakeAndCraft from './CakeAndCraft/CakeAndCraft';
import CodeSkill from './CodeSkill/CodeSkill';
import UsedPhone from './UsedPhone/UsedPhone';

const Projects = () => {
    return (
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-5  mx-9'>
            <UsedPhone />
            <CakeAndCraft />
            <CodeSkill />
        </div>
    );
};

export default Projects;