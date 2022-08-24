import React from 'react';

const Interview = ({ interview, setMock }) => {
    const { name, slots } = interview;
    return (
        <div>
            <div className="card w-96 lg:max-w-lg bg-base-200 shadow-xl mx-auto mb-10 text-center">
                <div className="card-body">
                    <h2 className="text-2xl text-accent font-bold">{name}</h2>
                    {
                        slots.slice(0, 2).map(slot => <p className='text-lg font-semibold'>{
                            slot.length ? <span>{slot}</span>
                                : <span className='text-red-500'>Try Another Date</span>
                        }</p>)
                    }
                    <p>{slots.length} available seats</p>
                    <div className="card-actions justify-center">
                        <label
                            for="my-modal-6"
                            className="btn btn-primary"
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