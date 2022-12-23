import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Home.css'
const Home = () => {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className='lg:w-[800px] mx-3 mb-32'>
                <div className='text-6xl font-semibold mb-9'>
                    <div className='hidden md:block'>
                        <span>Hi, I am</span> <span className='text-blue-700'>Sorwar Talukder</span>
                    </div>

                    <div className='text-3xl md:hidden block'>
                        <span>Hi, I am</span> <span className='text-blue-700'>Sorwar Talukder</span>
                    </div>

                    <div className='text-blue-700 text-5xl name mt-9 hidden md:block'
                    ><span>Front-End Web Developer</span></div>
                    <div className='text-blue-700 text-2xl name mt-5 md:hidden block'
                    ><span>Front-End Web Developer</span></div>
                </div>
                <p className=' text-justify text-xl'>I can provide clean code and pixel perfect design. I give most importance to user experience while building websites. Because the user is the boss.</p>
                <p className='text-justify text-xl my-6'>A freedom loving person. I enjoy work. The only difference between me and those who upgrade the world is skill. I will work to improve myself. I dream of giving something new to the world one day.
                </p>
                <div className='flex items-center justify-center mt-9'>
                    <a
                        className='text-4xl border-2 border-stone-200 hover:border-blue-500 hover:text-blue-500 rounded-full p-3 brightness-50'
                        target='_blank'
                        href="https://www.linkedin.com/in/sorwar-talukder/"
                        rel="noreferrer">
                        < FaLinkedinIn />
                    </a>
                    <a
                        className='text-4xl border-2 border-stone-200 hover:border-blue-500 hover:text-blue-500 rounded-full p-3 brightness-50 mx-9'
                        target='_blank'
                        href="https://github.com/sorwartalukder"
                        rel="noreferrer">
                        < FaGithub />
                    </a>
                    <a
                        className='text-4xl border-2 border-stone-200 hover:border-blue-500 hover:text-blue-500 rounded-full p-3 brightness-50 '
                        target='_blank'
                        href="https://www.facebook.com/sorwartalukderr/"
                        rel="noreferrer">
                        < FaFacebookF />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;