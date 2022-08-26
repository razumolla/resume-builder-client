import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const InterviewModal = ({ mock, setMock, selected }) => {
    const { _id, name, slots } = mock;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(selected, 'PP');

    const interviewAppoint = e => {
        e.preventDefault();
        const slot = e.target.slot.value;
        console.log(_id, slot);
        const interview = {
            interviewId: _id,
            interview: name,
            date: formattedDate,
            slot: slot,
            student: user.email,
            studentName: user.displayName,
            phoneNumber: e.target.phone.value,
        }

        fetch('http://localhost:5000/appointment', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(interview)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.success) {
                    toast.success(`Your Interview is ${formattedDate} at ${slot}`);
                    toast('You will recieve email for the interview')
                }
                else {
                    toast.error(`You have already boocked this subject !!`);
                }

                setMock(null);
            })
    }

    return (
        <div>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative dark:bg-cyan-900">
                    <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Subject: {name}</h3>

                    <form onSubmit={interviewAppoint} className='grid grid-cols-1 justify-items-center gap-5 mt-3 '>

                        <input type="text" value={format(selected, 'PP')} disabled className="input input-bordered w-full max-w-xs dark:text-black" />

                        <select name='slot' className="select select-bordered w-full max-w-xs dark:text-black">
                            {
                                slots?.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName || ''} placeholder="Your Name" className="input input-bordered w-full max-w-xs dark:text-black" />

                        <input type="email" name='email' disabled value={user?.email || ''} placeholder="Your Email" className="input input-bordered w-full max-w-xs dark:text-black" />

                        <input type="number" name='phone' placeholder="Your Phone no." className="input input-bordered w-full max-w-xs dark:text-black" />

                        <input type="submit" placeholder="Type here" className="btn btn-primary w-full max-w-xs dark:text-black" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default InterviewModal;