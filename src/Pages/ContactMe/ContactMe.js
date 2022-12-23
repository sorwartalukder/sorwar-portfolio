import emailjs from 'emailjs-com';
import React from 'react';
import toast from 'react-hot-toast';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import './ContactMe.css'

const ContactMe = () => {
    const handleContact = e => {
        e.preventDefault()
        emailjs.sendForm('mD.sorwaR4039', 'template_1368kvf', e.target, 'S4ou50DBMf_kQTmhl')


        const contact = {
            name: e.target.name.value,
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
            sender: 'Portfolio',
        }
        fetch('https://sorwar-portfolio-server.vercel.app/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(contact)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success(`Mail send successfully.`)
                    e.target.reset()
                }
            })

    }
    return (
        <div className='mb-32'>
            <h1 className='text-slate-200 text-5xl text-center my-6 font-semibold'>CONTACT ME</h1>
            <div className='xl:flex justify-center items-center mx-4'>
                <form
                    className='xl:w-1/2  max-w-[600px] mx-auto'
                    onSubmit={handleContact}>
                    {/* name  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input
                            type="text"
                            name='name'
                            required
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full"
                        />
                    </div>
                    {/* email  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Your Email</span></label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered w-full "
                            name='email'
                            required
                        />
                    </div>
                    {/* Subject line  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Subject</span></label>
                        <input
                            type="text"
                            placeholder="Enter Your Subject"
                            className="input input-bordered w-full "
                            name='subject'
                            required
                        />
                    </div>

                    {/* Message */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Message</span></label>
                        <textarea
                            className="textarea textarea-bordered"
                            rows="8"
                            placeholder="Enter Your Message"
                            name='message'
                            required
                        ></textarea>

                    </div>

                    <input className="bg-blue-700 hover:bg-purple-900 text-white text-xl px-6 py-4 mt-5" value='Send Mail' type="submit" />

                </form>
                <div className='xl:w-1/2 mx-auto max-w-[600px] my-10 text-lg xl:pl-4'>
                    {/* phone */}
                    <div className='flex items-center port-bg px-7 py-10'>
                        <div className='text-4xl border p-4 border-gray-400'>
                            <FaPhoneAlt />
                        </div>
                        <div className='ml-5'>
                            <p>Phone / WhatsApp</p>
                            <p>+880 1742554039</p>
                        </div>
                    </div>
                    {/* email */}
                    <div className='flex items-center port-bg px-7 py-10 my-7'>
                        <div className='text-4xl border p-4 border-gray-400'>
                            <HiOutlineMail />
                        </div>
                        <div className='ml-5'>
                            <p>Email</p>
                            <p>mdsorwar4039@gmail.com</p>
                        </div>
                    </div>
                    {/* address */}
                    <div className='flex items-center port-bg px-7 py-10'>
                        <div className='text-4xl border p-4 border-gray-400'>
                            <HiOutlineLocationMarker />
                        </div>
                        <div className='ml-5'>
                            <p>Address</p>
                            <p>+880 1742554039</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;