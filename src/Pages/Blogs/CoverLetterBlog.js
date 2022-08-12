import React from 'react';

const CoverLetterBlog = ({ coverLetterBlog }) => {
    const { _id, name, blogTitle, img, date, description } = coverLetterBlog;
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl">
                <figure><img src={img} alt="blog" /></figure>
                <div className="">
                    <h2 className="card-title">{blogTitle}</h2>
                    <p>  <small>{date} | {name} </small>   </p>


                    <p>{description.slice(0, 400)}</p>

                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CoverLetterBlog;