import React from 'react';
import codeSillPic from '../../../assets/Images/code-skill.png'
import Card from '../Card/Card';
const CodeSkill = () => {
    const codeSkill = {
        title: 'Cake & Craft',
        type: 'Online cake and craft selling website.',
        liveLink: 'https://code-skill-475de.web.app/',
        clientLink: 'https://github.com/sorwartalukder/code-skill',
        serverLink: 'https://github.com/sorwartalukder/code-skill-server',
        img: codeSillPic,
    }
    return (
        <div>
            <Card
                cardData={codeSkill}
            />
        </div>
    );
};

export default CodeSkill;