import React from 'react';

const FormCv = () => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-2xl mx-auto my-10">
                <div class="card-body">
                    <h2 class="card-title">Give Your Information Here...</h2>

                    <input type="text" placeholder="Your Full Name" class="input w-full max-w-xs bg-base-200" />
                    <input type="text" placeholder="Your Address" class="input w-full max-w-xs bg-base-200" />
                    <input type="text" placeholder="Your Phone No." class="input w-full max-w-xs bg-base-200" />

                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FormCv;