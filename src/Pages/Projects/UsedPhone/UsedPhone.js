import React from 'react';
import Card from '../Card/Card';
import usedPhone from '../../../assets/Images/used-phones.png'

const UsedPhone = () => {
    const usedPhones = {
        title: 'Used Phones',
        type: 'Phone reseller website',
        liveLink: 'https://used-phones-e6a78.web.app/',
        clientLink: 'https://github.com/sorwartalukder/used-phones',
        serverLink: 'https://github.com/sorwartalukder/used-phones-server',
        img: usedPhone,

    }
    return (
        <div>
            <Card
                cardData={usedPhones}
            />
        </div>
    );
};

export default UsedPhone;