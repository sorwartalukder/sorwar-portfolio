import React from 'react';
import Card from '../Card/Card';
import cakeAndCraftPic from '../../../assets/Images/cake-and-craft.png'

const CakeAndCraft = () => {
    const cakeAndCraft = {
        title: 'Cake & Craft',
        type: 'Online cake and craft selling website.',
        liveLink: 'https://cake-and-craft-450fb.web.app/',
        clientLink: 'https://github.com/sorwartalukder/cake-and-craft',
        serverLink: 'https://github.com/sorwartalukder/cake-and-craft-server',
        img: cakeAndCraftPic,
    }
    return (
        <div>
            <Card
                cardData={cakeAndCraft}
            />
        </div>
    );
};

export default CakeAndCraft;