import React, { useContext } from 'react';
import { FaDownload } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';
import profilePic from '../assets/Images/sorwar.png'
import { AuthContext } from '../contexts/AuthProvider';
import './Main.css'

const Main = () => {
    const { user } = useContext(AuthContext)
    console.log(user)
    return (
        <div>
            <div className="navbar port-bg lg:w-[320Px]" >
                <label tabIndex={0}
                    htmlFor="my-drawer-2"
                    className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet />
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 port-bg text-white text-lg">
                        <li>
                            <div className="avatar bg-stone-200">
                                <div className="w-60 rounded-full">
                                    <img
                                        className='bg-black p-4 rounded-full'
                                        src={profilePic} alt='' />
                                </div>
                            </div>
                        </li>

                        <li className='mt-28 mx-auto text-xl'>
                            <Link to='/'>Home</Link>
                        </li>

                        <li className='mx-auto text-xl'>
                            <Link to='/projects'>Projects</Link>
                        </li>
                        <li className='mx-auto text-xl'>
                            <Link to='/blogs'>Blogs</Link>
                        </li>
                        <li className='mx-auto text-xl'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='mx-auto text-xl'>
                            <Link to='/contact'>Contact</Link>
                        </li>
                        {
                            user?.email === 'mdsorwar4039@gmail.com' && <li className='mx-auto text-xl'>
                                <Link to='/dashboard/add-project'>Dashboard</Link>
                            </li>
                        }
                        <li className='mx-auto text-xl'>
                            <a href="https://drive.google.com/u/0/uc?id=1_P_F6B3k6TGiXZJTBDMcrGuK4G_xPKko&export=download"
                                download='Resume'
                            >
                                Download Resume <FaDownload />
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Main;