// import React, { useEffect, useState } from 'react';
// import CoverLetterDisplay from './CoverLetterDisplay';

// const CoverLetterGet = () => {
//     const [forms, setForms] = useState([]);
//     useEffect(() => {
//         fetch('http://localhost:5000/aboutForm')
//             .then(res => res.json())
//             .then(data => setForms(data))
//     }, []);
//     console.log(forms);
//     return (
//         <div>
//              <div className='mt-28'>
//                         {
//                             forms?.map(form => <CoverLetterDisplay
//                                 key={form._id}
//                                 form={form}
//                             ></CoverLetterDisplay>
//                             )
//                         }


//                     </div>
//         </div>
//     );
// };

// export default CoverLetterGet;