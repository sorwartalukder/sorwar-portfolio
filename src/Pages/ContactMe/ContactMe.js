import { format } from 'date-fns';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

const ContactMe = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const currentDate = new Date();
    const date = format(currentDate, 'PP');
    const time = (currentDate.getHours() + ':' + currentDate.getMinutes())

    const handleContact = data => {
        const contact = {
            name: data.name,
            email: data.email,
            subject: data.subject,
            message: data.message,
            sender: 'PortFolio',
            date,
            time
        }
        console.log(contact)

    }
    return (
        <div>
            <h1 className='text-slate-200 text-5xl text-center my-6 font-semibold'>CONTACT ME</h1>
            <div className='xl:flex justify-center items-center mx-4'>
                <form
                    className='xl:w-1/2  max-w-[600px] mx-auto'
                    onSubmit={handleSubmit(handleContact)}>
                    {/* name  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Your Name</span></label>
                        <input
                            type="text"
                            placeholder="Enter Your Name"
                            className="input input-bordered w-full "
                            {...register("name", {
                                required: 'Name is required'
                            })}
                        />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    {/* email  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Your Email</span></label>
                        <input
                            type="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered w-full "
                            {...register("email", {
                                required: 'Email is required'
                            })}
                        />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    {/* Subject line  */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Subject</span></label>
                        <input
                            type="text"
                            placeholder="Enter Your Subject"
                            className="input input-bordered w-full "
                            {...register("subject", {
                                required: 'Subject is required'
                            })}
                        />
                        {errors.subject && <p className='text-red-600'>{errors.subject?.message}</p>}
                    </div>

                    {/* Message */}
                    <div className="form-control w-full ">
                        <label className="label"><span className="label-text">Message</span></label>
                        <textarea
                            className="textarea textarea-bordered"
                            rows="8"
                            placeholder="Enter Your Message"
                            {...register("message", {
                                required: 'Message is required'

                            })}
                        ></textarea>
                        {errors.message && <p className='text-red-600'>{errors.message?.message}</p>}
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