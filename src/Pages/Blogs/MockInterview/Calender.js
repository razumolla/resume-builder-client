import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Calender = ({ selected, setSelected }) => {

    return (
        <div>
            <div className="hero ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-3xl font-bold">You can choose the date</h1>
                        <div className='bg-gray-200 dark:bg-cyan-900 dark:text-red-400'>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;