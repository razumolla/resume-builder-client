import React from 'react';
import { useParams } from 'react-router-dom';
import useCLBlogDetails from '../../hooks/useCLBlogDetails';

const CLBlogDetails = () => {
    let { cLBlogId } = useParams();
    const [cLBlog] = useCLBlogDetails(cLBlogId);

    return (
        <div className='flex justify-center p-10'>
            <div className="card w-full lg:w-3/4  bg-base-100 shadow-xl dark:bg-cyan-900">
                <figure><img src={cLBlog.img} alt="blog" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{cLBlog.blogTitle}</h2>
                    <p className=''>{cLBlog.description}</p>
                    <hr className='font-3xl' />

                    <div className="card-actions justify-end">
                        <p className="card-title"> {cLBlog.name} | {cLBlog.date}  </p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CLBlogDetails;