import React from 'react';

const Interview = ({ interview, setMock }) => {
    const { name, slots } = interview;
    return (
        <div>
            <div class="card w-80 lg:w-96 lg:max-w-lg bg-base-200 shadow-xl mx-auto mb-10 text-center">
                <div class="card-body dark:bg-cyan-900">
                    <h2 class="text-2xl text-accent font-bold dark:text-white">{name}</h2>
                    {
                        slots.slice(0, 2).map(slot => <p className='text-lg font-semibold'>{
                            slot.length ? <span>{slot}</span>
                                : <span className='text-red-500'>Try Another Date</span>
                        }</p>)
                    }
                    <p>{slots.length} available seats</p>
                    <div class="card-actions justify-center">
                        <label
                            for="my-modal-6"
                            class="btn btn-primary"
                            onClick={() => setMock(interview)}
                            disabled={slots.length == 0}
                        >Make Interview</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Interview;