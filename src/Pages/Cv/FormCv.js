import React from 'react';

const FormCv = () => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-2xl mx-auto my-10">
                <div className="card-body">
                    <h2 className="card-title">Give Your Information Here...</h2>

                    <input type="text" placeholder="Your Full Name" className="input w-full max-w-xs bg-base-200" />
                    <input type="text" placeholder="Your Address" className="input w-full max-w-xs bg-base-200" />
                    <input type="text" placeholder="Your Phone No." className="input w-full max-w-xs bg-base-200" />

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormCv;