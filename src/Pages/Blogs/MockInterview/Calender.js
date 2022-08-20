import { format } from 'date-fns';
import React from 'react';
import { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Calender = () => {
    const [selected, setSelected] = useState(new Date());

    return (
        <div>
            <div class="hero">
                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h1 class="text-3xl font-bold">You can choose the date</h1>
                        <div className='bg-gray-200'>
                            <DayPicker
                                mode="single"
                                selected={selected}
                                onSelect={setSelected}
                            />
                        </div>
                        <p>You have selected: {format(selected, 'PP')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calender;