import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='lg:w-[800px] mx-6 text-center'>
                <h1 className='text-6xl font-semibold mb-9'>Hi, I am <span className='text-blue-700'>Sorwar Talukder</span>
                </h1>
                <p className=' lg:text-center text-justify text-xl'>I am a frontend web developer. I can provide clean code and pixel perfect design. I give most importance to user experience while building websites. Because the user is the boss.</p>
                <div className='flex items-center justify-center mt-9'>
                    <a
                        className='text-4xl border-2 border-stone-200 rounded-full p-3 brightness-50'
                        target='_blank'
                        href="https://www.linkedin.com/in/sorwar-talukder/"
                        rel="noreferrer">
                        < FaLinkedinIn />
                    </a>
                    <a
                        className='text-4xl border-2 border-stone-200 rounded-full p-3 brightness-50 mx-9'
                        target='_blank'
                        href="https://github.com/sorwartalukder"
                        rel="noreferrer">
                        < FaGithub />
                    </a>
                    <a
                        className='text-4xl border-2 border-stone-200 rounded-full p-3 brightness-50 '
                        target='_blank'
                        href="https://www.facebook.com/md.sorowarr"
                        rel="noreferrer">
                        < FaFacebookF />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;