import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const ResumePage = ({ formData, submitted }) => {
    const {
        name,
        title,
        email,
        phone,
        city,
        education,
        institute,
        year,
        project,
        link,
        features,
        project2,
        link2,
        features2,
        skills,
        technology,
        language,

    } = formData


    const generatePdf = () => {
        const input = document.getElementById('cv');
        html2canvas(input, {
            quality: 4,
            scale: 5
        }).then(canvas => {
            // Few necessary setting options
            var imgWidth = 208;
            var imgHeight = canvas.height * imgWidth / canvas.width;
            // alert(imgHeight)
            const contentDataURL = canvas.toDataURL('image/png')
            let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
            var position = 0;
            pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
            pdf.save('new-file.pdf');

        });

    }
    return (
        <div className='my-10'>
            <div className="w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
                <div className="card-body" id='cv'>
                    <div className='text-white bg-sky-400 flex p-4 w-full'>
                        <div className='text-left px-4 w-3/4 flex items-center'>
                            <div>
                                <h1 className='text-2xl font-semibold '>{name}</h1>
                                <h1 className='text-xl uppercase'>{title}</h1>
                            </div>
                        </div>
                        <div className='text-left'>

                            <p className='font-semibold'>{email}</p>
                            <p className='font-semibold'>{phone}</p>
                            <p className='font-semibold'>{city}</p>

                        </div>
                    </div>
                    <div className='text-left'>
                        <div className='dark:text-black'>
                            <div className='divider px-2 dark:text-black'></div>

                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Skills Highlights </h2>
                                <p className=''><span className='font-semibold'>My Skills:</span> {skills} </p>
                                <p className=''><span className='font-semibold'>Technologies:</span> {technology} </p>

                            </div>
                            <div className='divider px-2 dark:text-black'></div>



                            <div className=''>
                                <h2 className='text-xl font-semibold uppercase'>Projects</h2>
                                <p className=''><span className='font-semibold'>1. Project:</span>  {project}</p>
                                <p className=''><span className='font-semibold'>Project LInk:</span>  {link}</p>

                                <p className='break-words'><span className='font-semibold'>Describe Project:</span>  {features}</p>
                            </div>

                            <div className='mt-3'>

                                <p className=''><span className='font-semibold'>2. Project:</span>  {project2}</p>
                                <p className=''><span className='font-semibold'>Project LInk:</span>  {link2}</p>

                                <p className='break-words'><span className='font-semibold'>Describe Project:</span>  {features2}</p>
                            </div>


                            <div className='divider px-2 dark:text-black'></div>

                            <div className=''>
                                <h2 className='text-xl font-semibold uppercase'>Education</h2>
                                <p className='font-semibold'>{education}</p>
                                <p className=''>{institute}</p>
                                <p className=''><span className=''>Passing Year </span> <span className=''>{year}</span> </p>
                            </div>


                            <div className='divider px-2 dark:text-black'></div>

                            <div className="">
                                <h2 className="text-xl font-semibold uppercase">Language</h2>
                                <p className=''><span className='font-semibold'>Language:</span> {language} </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center'>

                <button

                    disabled={submitted == false}
                    className="btn btn-wide mt-8 btn-primary font-bold" onClick={generatePdf}>
                    Download PDF</button>
            </div>
        </div >
    );
};

export default ResumePage;