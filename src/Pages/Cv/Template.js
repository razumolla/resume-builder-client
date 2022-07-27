import React from 'react';
import { Link } from 'react-router-dom';

const Template = ({ template }) => {
    const { image, name } = template;
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl mt-5 transform transition duration-500 hover:scale-110">
                <figure class="px-10 pt-10">
                    <img src={image} alt="Templates" class="rounded-xl " />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name}</h2>
                    <div class="card-actions">
                        <Link to='/cv/form'> <button class="btn btn-primary">Create Your CV</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Template;