import React from 'react';
import { useNavigate } from 'react-router-dom';

const CoverLetterBlog = ({ coverLetterBlog }) => {
    const { _id, name, blogTitle, img, date, description } = coverLetterBlog;
    
    const navigate = useNavigate()
    const navigateToCLBlogDetails = (id) => {
        navigate(`/coverLetterBlog/${id}`)
    }

    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="blog" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p className=''>{description.slice(0, 400)}</p>
                    <hr className='font-3xl' />

                    <div className="card-actions justify-end">
                        <p className="card-title"> {name} | {date}  </p>
                        <button className="btn btn-primary"
                            onClick={() => navigateToCLBlogDetails(_id)}>See More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoverLetterBlog;