import React, { useEffect, useState } from 'react';
import ShowAllCLTemp from './ShowAllCLTemp';
const AllCoverLetterTemp = () => {
    const [allCoverLetterTemps, setAllCoverLetterTemps] = useState([]);
    useEffect(() => {
        fetch('https://resume-builder-6p08.onrender.com/allCLPhoto')
            .then(res => res.json())
            .then(data => setAllCoverLetterTemps(data))
    }, [])
    return (
        <div>

            <div className='grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1' >
                {
                    allCoverLetterTemps.map(allCoverLetterTemp => <ShowAllCLTemp
                        key={allCoverLetterTemp._id}
                        allCoverLetterTemp={allCoverLetterTemp}

                    ></ShowAllCLTemp>)
                }
            </div>
        </div>
    );
};

export default AllCoverLetterTemp;