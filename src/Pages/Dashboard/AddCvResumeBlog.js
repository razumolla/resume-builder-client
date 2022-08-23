import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddCvResumeBlog = () => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;


    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageStorageKey = 'c887b5bdc735c9db713448a3cd95c9b2';

    const onSubmit = async data => {
        console.log('add Blog data', data);

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const resumeBlog = {
                        blogTitle: data.blogTitleName,
                        date: today,
                        name: user.displayName,
                        description: data.description,
                        img: img,
                    }
                    // send to your database
                    fetch('http://localhost:5000/cvResumeBlog', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(resumeBlog)
                    })
                        .then(res => res.json())
                        .then(insertedBlog => {
                            if (insertedBlog.insertedId) {
                                toast.success('CV/Resume Blog added successfully')
                                reset();
                            }
                            else {
                                toast.error('Failed to add the Blog');
                            }
                            console.log('Blog', insertedBlog);
                        })

                }
            })
    };

    return (
        <div className='mt-2'>
            <h1 className='text-2xl font-semibold mb-4'>New Cv/Resume Blog </h1>
            <form onSubmit={handleSubmit(onSubmit)}>


                {/* <label className="label">
                        <span className="label-text">Blog Title Name</span>
                    </label> */}
                <input
                    type="text"
                    placeholder="Blog Title Name"
                    className="input input-bordered w-full max-w-xs shadow-xl rounded-lg mb-3  border-primary dark:text-black"
                    {...register("blogTitleName", {
                        required: {
                            value: true,
                            message: 'Blog Title is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.blogTitleName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.blogTitleName.message}</span>}
                </label>


                {/*                 
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label> */}
                <textarea
                    type="text"
                    placeholder="Blog Description"
                    className="input input-bordered w-full max-w-xs shadow-xl rounded-lg mb-3  border-primary dark:text-black"
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Description is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
                </label>





                {/* <label className="label">
                        <span className="label-text">Blog Related Photo</span>
                    </label> */}
                <input
                    type="file"
                    className="input input-bordered w-full max-w-xs shadow-xl rounded-lg mb-3  border-primary dark:text-black"
                    {...register("image", {
                        required: {
                            value: true,
                            message: 'Image is Required'
                        },
                    })}
                />
                <label className="label">
                    {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                </label>


                <input className='btn w-full max-w-xs text-white hover:bg-primary bg-primary' type="submit" value="Add Blog" />
            </form>


        </div>
    );
};

export default AddCvResumeBlog;