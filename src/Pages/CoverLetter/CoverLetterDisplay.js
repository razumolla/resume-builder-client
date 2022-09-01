import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Link } from 'react-router-dom';
const CoverLetterDisplay = ({ formData, submitted }) => {
    const {
        name,
        email,
        address,
        linkedin,
        phone,
        designation,
        dear,
        professionalCareer,
        achievements,
        characteristics,
        signatureName

    }
        = formData;




    const generatePdf = () => {
        const input = document.getElementById('coverLetter');
        html2canvas(input, {
            quality: 4,
            scale: 5
        }).then(canvas => {
            // Few necessary setting options
            const imgWidth = 208;
            const imgHeight = canvas.height * imgWidth / canvas.width;
            alert(imgHeight)
            const contentDataURL = canvas.toDataURL('image/png')
            const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            const position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('new-file.pdf');
            // window.open(pdf.output('bloburl', { filename: 'new-file.pdf' }), '_blank');
        });

    }

    return (
        <div className='my-10 mb-96 bg-gray-100 shadow-xl'>
            <div className="card  bg-gray-100  ">
                <div className="card-body text-left ml-6 " id='coverLetter dark:text-black'>
                    <div>
                        <div>
                            <h1 className='text-4xl text-pink-600 font-bold break-words '>{name}</h1>
                            <h1 className='text-2xl mt-2 text-sky-900 mb-2 font-bold break-words'>{designation}</h1>
                        </div>
                        <div className='text-left'>
                            <small className='font-semibold break-words'><i className="fa-solid fa-envelope dark:text-black"></i> <span className='dark:text-black'> {email} </span></small> <br />
                            <small className='font-semibold break-words'><i className="fa-solid fa-phone-flip dark:text-black"></i> <span className='dark:text-black'>  {phone}</span></small> <br />
                            <small className='font-semibold break-words'><i className="fa-solid fa-location-dot dark:text-black"></i> <span className='dark:text-black'>{address}</span></small> <br />
                            <small className='font-semibold break-words'><i className="fa-brands fa-linkedin-in dark:text-black"></i><span className='dark:text-black'> {linkedin} </span></small> <br />

                        </div>
                    </div>
                    {/* <div className='divider bg-pink-600'></div> */}

                    <div className='border border-spacing-28  border-pink-600 h-1 bg-pink-600'></div>
                    <div >
                        <h2 className='text-xl font-bold break-words dark:text-black'><span className='dark:text-black'>{dear}</span> </h2>
                        <p className='break-words dark:text-black'>{professionalCareer}
                        </p>
                    </div>
                    <div className='mt-3'>
                        <p className='break-words dark:text-black'> {achievements}</p>
                    </div>
                    <div className='mt-3'>
                        <p className=' break-words dark:text-black'>{characteristics}
                        </p>
                    </div>

                    <div className="mt-10 mb-28 ">

                        <p className='text-xl break-words mb-3 dark:text-black'>Sincerely.</p>
                        <p className='text-xl break-words dark:text-black'>{signatureName}</p>
                    </div>


                    <div>
                        <div className='border border-spacing-28  border-pink-600 h-3 bg-pink-600'></div>
                        <div className='border border-36 border-sky-900/100 h-6 bg-sky-900 '></div>
                    </div>
                </div>
            </div>
            <div className='py-4 ml-8'>
                <Link to='/dashboard/allcoverlettertemp'>

                    <button disabled={submitted == false}

                        className="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>Dowload as pdf</button>
                </Link>
            </div>
        </div >
    );
};

export default CoverLetterDisplay;