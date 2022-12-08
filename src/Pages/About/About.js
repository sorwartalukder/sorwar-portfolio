import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import aboutPhoto from '../../assets/Images/sorwar-about.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-9 ">
            <div className="hero-content flex-col lg:flex-row">
                <PhotoProvider >
                    <PhotoView src={aboutPhoto}>
                        <img src={aboutPhoto} className="lg:w-2/5 rounded-lg shadow-2xl" alt='' />
                    </PhotoView>
                </PhotoProvider>
                <div>
                    <h1 className='text-4xl font-semibold mb-6'>Hi, I am <span className='text-blue-700'>Sorwar Talukder</span>
                    </h1>
                    <p className='text-justify text-xl'>I am a frontend web developer. I can provide clean code and pixel perfect design. I give most importance to user experience while building websites. Because the user is the boss.</p>
                    <div className='flex text-xl leading-9 my-11'>
                        <div>
                            <p>Full Name</p>
                            <p>Age</p>
                            <p>Nationality</p>
                            <p>Address</p>
                            <p>Status</p>
                        </div>
                        <div className='ml-6'>
                            <p>: MD Golam Sorwar</p>
                            <p>: 22 Years</p>
                            <p>: Bangladeshi</p>
                            <p>: Dhaka, Bangladesh</p>
                            <p>: Open To Work</p>
                        </div>

                    </div>
                    <a href="https://drive.google.com/file/d/1_P_F6B3k6TGiXZJTBDMcrGuK4G_xPKko/view?usp=share_link"
                        target='_blank'
                        rel="noreferrer"
                    >
                        <button className="bg-blue-700 hover:bg-purple-900 text-white text-xl px-6 py-4">Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;