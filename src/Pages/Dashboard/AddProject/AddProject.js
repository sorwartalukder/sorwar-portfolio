import React from 'react';
import { toast } from 'react-hot-toast';
const handleAddProject = e => {
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const projectType = form.projectType.value;
    const photoURL1 = form.photoURL1.value
    const photoURL2 = form.photoURL2.value
    const photoURL3 = form.photoURL3.value
    const photoURL4 = form.photoURL4.value
    const live = form.live.value
    const client = form.client.value
    const server = form.server.value
    const point1 = form.point1.value
    const point2 = form.point2.value
    const point3 = form.point3.value
    const point4 = form.point4.value
    const point5 = form.point5.value


    const project = {
        name,
        projectType,
        img: photoURL1,
        gallery: [photoURL1, photoURL2, photoURL3, photoURL4],
        live,
        client,
        server,
        points: [point1, point2, point3, point4, point5]
    }
    console.log(project)
    fetch('https://sorwar-portfolio-server.vercel.app/projects', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(project)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if (data.acknowledged) {
                toast.success('added Project')
                form.reset()
            }
        })

}
const AddProject = () => {
    return (
        <div>
            <div className='services-container '>
                <div className=' mx-auto  bg-gray-900 p-16 text-white rounded-xl'>
                    <form onSubmit={handleAddProject}>
                        <div >
                            <h2 className="text-4xl pb-8 text-center font-semibold text-blue-500">Add Project</h2>

                            <div className='grid grid-cols-1 gap-4'>
                                <div className='md:flex'>
                                    <input required name='name' type="text" placeholder="Project Name" className="input input-ghost w-full input-bordered mb-4 md:mr-4" />

                                    <input required name='projectType' type="text" placeholder="Project type" className="input input-ghost w-full input-bordered " />
                                </div>
                                {/* image */}

                                <input required name='photoURL1' type="text" placeholder="Image URL Main" className="input input-ghost w-full input-bordered " />
                                <input required name='photoURL2' type="text" placeholder="Image URL" className="input input-ghost w-full input-bordered " />
                                <input required name='photoURL3' type="text" placeholder="Image URL" className="input input-ghost w-full input-bordered " />
                                <input required name='photoURL4' type="text" placeholder="Image URL" className="input input-ghost w-full input-bordered " />
                                {/* link */}
                                <label className='text-xl  font-semibold text-blue-500'>Project Link (Live, Client, Server)</label>

                                <input required name='live' type="text" placeholder="Live Link" className="input input-ghost w-full input-bordered " />
                                <input required name='client' type="text" placeholder="Client Link" className="input input-ghost w-full input-bordered " />
                                <input required name='server' type="text" placeholder="Server Link" className="input input-ghost w-full input-bordered " />





                                <label className='text-xl  font-semibold text-blue-500'>Key Point (Must add 5 Point)</label>
                                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                    <input required name='point1' type="text" placeholder="Point-1" className="input input-ghost w-full input-bordered " />
                                    <input required name='point2' type="text" placeholder="Point-2" className="input input-ghost w-full input-bordered " />
                                    <input required name='point3' type="text" placeholder="Point-3" className="input input-ghost w-full input-bordered " />
                                    <input required name='point4' type="text" placeholder="Point-4" className="input input-ghost w-full input-bordered " />
                                    <input required name='point5' type="text" placeholder="Point-5" className="input input-ghost w-full input-bordered " />

                                </div>
                            </div>
                            <input className='bg-blue-700 hover:bg-purple-900 text-white text-xl px-6 py-4 mt-5  block mx-auto' type="submit" value="add Project" />

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProject;